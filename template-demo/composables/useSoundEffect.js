/**
 * useSoundEffect - Web Audio API による効果音合成 Composable
 *
 * プリセット: dramatic, pop, whoosh, chime, boom, sparkle, click
 * カスタムファイル再生: sound: 'custom' + soundFile: '/sounds/x.mp3'
 */

let audioCtx = null
let userInteracted = false
let listenerRegistered = false
const bufferCache = new Map()

function getAudioContext() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)()
  }
  return audioCtx
}

function ensureUserInteraction() {
  if (userInteracted || listenerRegistered) return
  listenerRegistered = true
  const resume = () => {
    userInteracted = true
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume()
    }
    document.removeEventListener('click', resume)
    document.removeEventListener('keydown', resume)
    document.removeEventListener('touchstart', resume)
  }
  document.addEventListener('click', resume)
  document.addEventListener('keydown', resume)
  document.addEventListener('touchstart', resume)
}

// --- プリセット合成音 ---

function playDramatic(ctx, volume) {
  const now = ctx.currentTime
  const master = ctx.createGain()
  master.gain.setValueAtTime(0, now)
  master.connect(ctx.destination)

  // 低音ベース
  const osc1 = ctx.createOscillator()
  osc1.type = 'sawtooth'
  osc1.frequency.setValueAtTime(80, now)
  osc1.frequency.exponentialRampToValueAtTime(120, now + 0.3)
  const g1 = ctx.createGain()
  g1.gain.setValueAtTime(volume * 0.6, now)
  g1.gain.exponentialRampToValueAtTime(0.01, now + 1.2)
  osc1.connect(g1).connect(master)
  osc1.start(now)
  osc1.stop(now + 1.2)

  // 中音ハーモニー
  const osc2 = ctx.createOscillator()
  osc2.type = 'square'
  osc2.frequency.setValueAtTime(220, now)
  osc2.frequency.exponentialRampToValueAtTime(330, now + 0.15)
  const g2 = ctx.createGain()
  g2.gain.setValueAtTime(volume * 0.3, now)
  g2.gain.exponentialRampToValueAtTime(0.01, now + 0.8)
  osc2.connect(g2).connect(master)
  osc2.start(now)
  osc2.stop(now + 0.8)

  // 高音アクセント
  const osc3 = ctx.createOscillator()
  osc3.type = 'sine'
  osc3.frequency.setValueAtTime(660, now)
  osc3.frequency.exponentialRampToValueAtTime(880, now + 0.1)
  const g3 = ctx.createGain()
  g3.gain.setValueAtTime(volume * 0.4, now)
  g3.gain.exponentialRampToValueAtTime(0.01, now + 0.6)
  osc3.connect(g3).connect(master)
  osc3.start(now)
  osc3.stop(now + 0.6)

  // マスターエンベロープ
  master.gain.linearRampToValueAtTime(1, now + 0.02)
  master.gain.setValueAtTime(1, now + 0.5)
  master.gain.exponentialRampToValueAtTime(0.01, now + 1.5)
}

function playPop(ctx, volume) {
  const now = ctx.currentTime

  const osc = ctx.createOscillator()
  osc.type = 'sine'
  osc.frequency.setValueAtTime(600, now)
  osc.frequency.exponentialRampToValueAtTime(200, now + 0.15)

  const gain = ctx.createGain()
  gain.gain.setValueAtTime(volume, now)
  gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3)

  osc.connect(gain).connect(ctx.destination)
  osc.start(now)
  osc.stop(now + 0.3)
}

function playWhoosh(ctx, volume) {
  const now = ctx.currentTime
  const duration = 0.4

  // ノイズバッファ生成
  const bufferSize = ctx.sampleRate * duration
  const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate)
  const data = buffer.getChannelData(0)
  for (let i = 0; i < bufferSize; i++) {
    data[i] = (Math.random() * 2 - 1) * 0.5
  }

  const noise = ctx.createBufferSource()
  noise.buffer = buffer

  // バンドパスフィルター（周波数スイープ）
  const filter = ctx.createBiquadFilter()
  filter.type = 'bandpass'
  filter.frequency.setValueAtTime(500, now)
  filter.frequency.exponentialRampToValueAtTime(3000, now + duration * 0.3)
  filter.frequency.exponentialRampToValueAtTime(800, now + duration)
  filter.Q.value = 2

  const gain = ctx.createGain()
  gain.gain.setValueAtTime(0, now)
  gain.gain.linearRampToValueAtTime(volume * 0.6, now + 0.05)
  gain.gain.exponentialRampToValueAtTime(0.01, now + duration)

  noise.connect(filter).connect(gain).connect(ctx.destination)
  noise.start(now)
  noise.stop(now + duration)
}

function playChime(ctx, volume) {
  const now = ctx.currentTime
  const frequencies = [523, 659, 784, 1047] // C5, E5, G5, C6

  frequencies.forEach((freq, i) => {
    const osc = ctx.createOscillator()
    osc.type = 'sine'
    osc.frequency.value = freq

    const gain = ctx.createGain()
    const startTime = now + i * 0.08
    gain.gain.setValueAtTime(0, startTime)
    gain.gain.linearRampToValueAtTime(volume * 0.4, startTime + 0.01)
    gain.gain.exponentialRampToValueAtTime(0.01, startTime + 0.8)

    osc.connect(gain).connect(ctx.destination)
    osc.start(startTime)
    osc.stop(startTime + 0.8)
  })
}

function playBoom(ctx, volume) {
  const now = ctx.currentTime

  // 低音インパクト
  const osc = ctx.createOscillator()
  osc.type = 'sine'
  osc.frequency.setValueAtTime(150, now)
  osc.frequency.exponentialRampToValueAtTime(30, now + 0.5)

  const gain = ctx.createGain()
  gain.gain.setValueAtTime(volume, now)
  gain.gain.exponentialRampToValueAtTime(0.01, now + 1.0)

  // ディストーション
  const waveshaper = ctx.createWaveShaper()
  const curve = new Float32Array(256)
  for (let i = 0; i < 256; i++) {
    const x = (i * 2) / 256 - 1
    curve[i] = (Math.PI + 3) * x / (Math.PI + 3 * Math.abs(x))
  }
  waveshaper.curve = curve

  osc.connect(waveshaper).connect(gain).connect(ctx.destination)
  osc.start(now)
  osc.stop(now + 1.0)

  // ノイズバースト
  const bufferSize = ctx.sampleRate * 0.3
  const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate)
  const data = buffer.getChannelData(0)
  for (let i = 0; i < bufferSize; i++) {
    data[i] = (Math.random() * 2 - 1)
  }

  const noise = ctx.createBufferSource()
  noise.buffer = buffer

  const noiseGain = ctx.createGain()
  noiseGain.gain.setValueAtTime(volume * 0.3, now)
  noiseGain.gain.exponentialRampToValueAtTime(0.01, now + 0.3)

  const lpf = ctx.createBiquadFilter()
  lpf.type = 'lowpass'
  lpf.frequency.setValueAtTime(1000, now)
  lpf.frequency.exponentialRampToValueAtTime(100, now + 0.3)

  noise.connect(lpf).connect(noiseGain).connect(ctx.destination)
  noise.start(now)
  noise.stop(now + 0.3)
}

function playSparkle(ctx, volume) {
  const now = ctx.currentTime
  const notes = [1200, 1600, 2000, 2400, 1800, 2200]

  notes.forEach((freq, i) => {
    const osc = ctx.createOscillator()
    osc.type = 'sine'
    osc.frequency.value = freq

    const gain = ctx.createGain()
    const startTime = now + i * 0.06
    gain.gain.setValueAtTime(0, startTime)
    gain.gain.linearRampToValueAtTime(volume * 0.25, startTime + 0.01)
    gain.gain.exponentialRampToValueAtTime(0.01, startTime + 0.4)

    osc.connect(gain).connect(ctx.destination)
    osc.start(startTime)
    osc.stop(startTime + 0.4)
  })
}

function playClick(ctx, volume) {
  const now = ctx.currentTime

  const osc = ctx.createOscillator()
  osc.type = 'square'
  osc.frequency.setValueAtTime(1200, now)
  osc.frequency.exponentialRampToValueAtTime(600, now + 0.03)

  const gain = ctx.createGain()
  gain.gain.setValueAtTime(volume * 0.5, now)
  gain.gain.exponentialRampToValueAtTime(0.01, now + 0.08)

  osc.connect(gain).connect(ctx.destination)
  osc.start(now)
  osc.stop(now + 0.08)
}

const presets = {
  dramatic: playDramatic,
  pop: playPop,
  whoosh: playWhoosh,
  chime: playChime,
  boom: playBoom,
  sparkle: playSparkle,
  click: playClick,
}

// --- カスタムファイル再生 ---

async function playCustomFile(ctx, filePath, volume) {
  try {
    let buffer = bufferCache.get(filePath)
    if (!buffer) {
      const response = await fetch(filePath)
      if (!response.ok) {
        console.warn(`[SoundEffect] Failed to fetch: ${filePath}`)
        return
      }
      const arrayBuffer = await response.arrayBuffer()
      buffer = await ctx.decodeAudioData(arrayBuffer)
      bufferCache.set(filePath, buffer)
    }

    const source = ctx.createBufferSource()
    source.buffer = buffer
    const gain = ctx.createGain()
    gain.gain.value = volume
    source.connect(gain).connect(ctx.destination)
    source.start()
  } catch (e) {
    console.warn(`[SoundEffect] Custom file error: ${e.message}`)
  }
}

// --- Composable ---

export function useSoundEffect() {
  if (typeof window !== 'undefined') {
    ensureUserInteraction()
  }

  async function play(soundName, options = {}) {
    if (typeof window === 'undefined') return
    if (!soundName || soundName === 'none' || soundName === false) return

    const ctx = getAudioContext()
    if (ctx.state === 'suspended') {
      try { await ctx.resume() } catch { return }
    }

    const volume = Math.max(0, Math.min(1, options.volume ?? 0.3))

    if (soundName === 'custom' && options.file) {
      await playCustomFile(ctx, options.file, volume)
      return
    }

    const preset = presets[soundName]
    if (preset) {
      preset(ctx, volume)
    } else {
      console.warn(`[SoundEffect] Unknown preset: ${soundName}`)
    }
  }

  return { play }
}
