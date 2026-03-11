<script setup>
import { ref, watch, onMounted, onUnmounted, getCurrentInstance } from 'vue'
import { useNav } from '@slidev/client'

const props = defineProps({
  background: { type: String, default: '' },
  subtitle: { type: String, default: '' },
  titleEffect: { type: String, default: '' },
  titleEffectSound: { type: String, default: '' },
  titleEffectVolume: { type: Number, default: 0.5 },
})

const isVisible = ref(false)
const contentRef = ref(null)

const { currentSlideNo } = useNav()

// タイプライター演出の元HTML（初回取得時に保存）
let originalHTML = ''
let twRunning = false
let cleanupTimers = []
let myPage = -1

function cleanup() {
  twRunning = false
  cleanupTimers.forEach(id => clearTimeout(id))
  cleanupTimers = []
}

// DOMからこのスライドのページ番号を取得（slidev-page-N クラスから）
function detectMyPage() {
  if (myPage > 0) return myPage
  // $page グローバルプロパティを試す
  const instance = getCurrentInstance()
  const injectedPage = instance?.proxy?.$page
  if (typeof injectedPage === 'number' && injectedPage > 0) {
    myPage = injectedPage
    return myPage
  }
  // フォールバック: DOMクラスから取得
  const el = contentRef.value?.closest('[class*="slidev-page-"]')
  if (el) {
    for (const cls of el.classList) {
      const match = cls.match(/^slidev-page-(\d+)$/)
      if (match) {
        myPage = parseInt(match[1])
        return myPage
      }
    }
  }
  return -1
}

onMounted(() => {
  isVisible.value = true
})

onUnmounted(cleanup)

// currentSlideNo がこのスライドのページ番号になった瞬間にトリガー
if (props.titleEffect === 'typewriter') {
  watch(currentSlideNo, (pageNo) => {
    const page = detectMyPage()
    if (page > 0 && pageNo === page) {
      waitForH1AndStart()
    }
  }, { immediate: true })
}

// h1 がDOMに現れるまでリトライ（最大15回 x 50ms = 750ms）
function waitForH1AndStart(retries = 15) {
  const h1 = contentRef.value?.querySelector('h1')
  if (h1) {
    startTypewriterEffect(h1)
  } else if (retries > 0) {
    const tid = setTimeout(() => waitForH1AndStart(retries - 1), 50)
    cleanupTimers.push(tid)
  }
}

function startTypewriterEffect(h1) {
  // 前回の演出が残っていたらクリーンアップ
  cleanup()
  twRunning = true

  // 初回のみ元HTMLを保存。再実行時は保存済みを使う
  if (!originalHTML) {
    originalHTML = h1.innerHTML
  }

  const fullHTML = originalHTML
  const tempDiv = document.createElement('div')
  tempDiv.innerHTML = fullHTML
  const fullText = tempDiv.textContent.trim()

  h1.innerHTML = ''
  h1.classList.remove('tw-jingle-reveal')
  h1.classList.add('tw-typing')

  // Play sound（プリフェッチ済みキャッシュを優先使用）
  if (props.titleEffectSound) {
    const cached = typeof window !== 'undefined' && window.__slidevAudioCache?.get(props.titleEffectSound)
    const audio = cached || new Audio(props.titleEffectSound)
    audio.currentTime = 0
    audio.volume = props.titleEffectVolume
    audio.play().catch(() => {})
  }

  const chars = [...fullText]
  const TYPEWRITER_DURATION = 2000
  const INITIAL_DELAY = 400
  const charDelay = Math.floor(TYPEWRITER_DURATION / Math.max(chars.length, 1))
  let charIndex = 0
  let completed = false

  const finish = (withJingle) => {
    if (completed) return
    completed = true
    twRunning = false
    h1.innerHTML = fullHTML
    h1.classList.remove('tw-typing')
    if (withJingle) {
      h1.classList.add('tw-jingle-reveal')
      const tid = setTimeout(() => h1.classList.remove('tw-jingle-reveal'), 600)
      cleanupTimers.push(tid)
    }
  }

  const typeNext = () => {
    if (completed) return
    if (charIndex < chars.length) {
      charIndex++
      h1.textContent = fullText.slice(0, charIndex)
      if (charIndex < chars.length) {
        const tid = setTimeout(typeNext, charDelay)
        cleanupTimers.push(tid)
      } else {
        finish(false)
      }
    }
  }

  // cover fade-in 後にタイピング開始
  const t1 = setTimeout(typeNext, INITIAL_DELAY)
  cleanupTimers.push(t1)

  // 2秒後（ジングル突入）に残り全表示＋インパクト演出
  const t2 = setTimeout(() => finish(true), TYPEWRITER_DURATION + INITIAL_DELAY)
  cleanupTimers.push(t2)
}
</script>

<template>
  <div class="slidev-layout cover" :style="background ? { backgroundImage: `url(${background})`, backgroundSize: 'cover' } : {}">
    <!-- Decorative gradient orbs (static) -->
    <div class="cover-orb cover-orb-1" />
    <div class="cover-orb cover-orb-2" />
    <div class="cover-orb cover-orb-3" />

    <!-- Static corner decorations -->
    <div class="corner-deco corner-deco-tl" />
    <div class="corner-deco corner-deco-br" />

    <!-- Content -->
    <div ref="contentRef" class="cover-content" :class="{ 'cover-visible': isVisible }">
      <div class="cover-accent-bar" />
      <slot />
      <div v-if="subtitle" class="cover-subtitle">{{ subtitle }}</div>
    </div>
  </div>
</template>

<style scoped>
.cover {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  background: linear-gradient(135deg, #F5EDE6 0%, #FAF6F2 30%, #FFF8E7 70%, #EFF8F3 100%);
  padding: 3rem;
  height: 100%;
  min-height: 100%;
  box-sizing: border-box;
  overflow: hidden;
}

.cover::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle, rgba(212, 145, 143, 0.08) 1px, transparent 1px);
  background-size: 20px 20px;
  pointer-events: none;
}

/* Static dots in bottom-left corner (::after) */
.cover::after {
  content: '';
  position: absolute;
  bottom: 40px;
  left: 30px;
  width: 60px;
  height: 50px;
  pointer-events: none;
  background:
    radial-gradient(circle, #D4918F 3px, transparent 3px) 0px 0px,
    radial-gradient(circle, #A8C5B8 2.5px, transparent 2.5px) 25px 10px,
    radial-gradient(circle, #E8A68C 2px, transparent 2px) 10px 30px,
    radial-gradient(circle, #D4918F 1.5px, transparent 1.5px) 45px 35px;
  background-repeat: no-repeat;
  opacity: 0.5;
}

/* Gradient orbs (static, no animation) */
.cover-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.4;
  pointer-events: none;
}

.cover-orb-1 {
  width: 300px;
  height: 300px;
  background: #D4918F;
  top: -50px;
  right: -50px;
}

.cover-orb-2 {
  width: 250px;
  height: 250px;
  background: #E8A68C;
  bottom: -30px;
  left: -30px;
}

.cover-orb-3 {
  width: 200px;
  height: 200px;
  background: #A8C5B8;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/* Static corner decoration: top-left sage green semicircle */
.corner-deco-tl {
  position: absolute;
  top: 0;
  left: 0;
  width: 80px;
  height: 40px;
  background: #A8C5B8;
  border-radius: 0 0 80px 80px;
  opacity: 0.7;
  pointer-events: none;
}

/* Static corner decoration: bottom-right coral pink blob */
.corner-deco-br {
  position: absolute;
  bottom: 20px;
  right: 20px;
  width: 100px;
  height: 70px;
  background: #D4918F;
  border-radius: 60% 40% 50% 45% / 50% 60% 40% 55%;
  opacity: 0.5;
  pointer-events: none;
}

/* Content */
.cover-content {
  position: relative;
  z-index: 1;
  max-width: 800px;
  opacity: 0;
  transform: translateY(30px) scale(0.95);
  transition: all 800ms cubic-bezier(0.34, 1.56, 0.64, 1);
}

.cover-content.cover-visible {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.cover-accent-bar {
  width: 80px;
  height: 5px;
  background: var(--pop-gradient-cool);
  border-radius: 3px;
  margin: 0 auto var(--pop-space-lg);
  animation: gradient-shift 3s ease infinite;
  background-size: 200% 200%;
}

.cover :deep(h1) {
  font-family: var(--pop-font-heading);
  font-size: var(--pop-font-size-5xl);
  background: var(--pop-gradient-main);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: var(--pop-space-md);
  line-height: 1.6;
}

.cover :deep(p) {
  font-family: var(--pop-font-accent);
  font-size: var(--pop-font-size-xl);
  color: var(--pop-text-light);
  margin: 0 auto;
}

.cover-subtitle {
  font-family: var(--pop-font-accent);
  font-size: var(--pop-font-size-lg);
  color: var(--pop-text-muted);
  margin-top: var(--pop-space-sm);
}

@keyframes gradient-shift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/* Typewriter effect styles */
.cover :deep(h1.tw-typing) {
  border-right: 3px solid var(--pop-rose, #D4918F);
  padding-right: 6px;
  animation: tw-cursor-blink 0.6s step-end infinite;
  min-height: 1.2em;
}

.cover :deep(h1.tw-jingle-reveal) {
  animation: tw-jingle-pop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
  border-right: none;
}

@keyframes tw-cursor-blink {
  0%, 100% { border-color: var(--pop-rose, #D4918F); }
  50% { border-color: transparent; }
}

@keyframes tw-jingle-pop {
  0% {
    transform: scale(1);
    filter: brightness(1);
  }
  40% {
    transform: scale(1.12);
    filter: brightness(1.3);
  }
  100% {
    transform: scale(1);
    filter: brightness(1);
  }
}
</style>
