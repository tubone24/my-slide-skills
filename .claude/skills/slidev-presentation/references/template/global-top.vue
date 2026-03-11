<script setup>
/**
 * Global top component - Sound effects on slide transitions
 * Watches page changes and plays sound effects based on frontmatter settings
 * Also prefetches titleEffectSound audio files for instant playback
 */
import { watch, ref, onMounted } from 'vue'
import { useNav, configs } from '@slidev/client'
import { useSoundEffect } from './composables/useSoundEffect.js'

const { currentSlideNo, slides } = useNav()
const { play } = useSoundEffect()

const initialized = ref(false)

// --- Audio prefetch cache ---
// titleEffectSound で指定された音声ファイルを先読みしてキャッシュ
if (typeof window !== 'undefined' && !window.__slidevAudioCache) {
  window.__slidevAudioCache = new Map()
}

function prefetchAudioFiles() {
  if (typeof window === 'undefined' || !slides.value) return
  for (const slide of slides.value) {
    const fm = slide.meta?.slide?.frontmatter || {}
    const soundFile = fm.titleEffectSound
    if (soundFile && !window.__slidevAudioCache.has(soundFile)) {
      const audio = new Audio()
      audio.preload = 'auto'
      audio.src = soundFile
      // 読み込み開始を促す
      audio.load()
      window.__slidevAudioCache.set(soundFile, audio)
    }
  }
}

onMounted(() => {
  prefetchAudioFiles()
})

// headmatter からグローバル設定を取得
function getGlobalConfig() {
  return {
    enabled: configs.soundEffects === true,
    volume: typeof configs.soundVolume === 'number' ? configs.soundVolume : 0.3,
    defaultSound: configs.soundDefault || null,
  }
}

// 特定スライドのフロントマターから効果音設定を取得
function getSlideConfig(pageNumber) {
  if (!slides.value || pageNumber < 1 || pageNumber > slides.value.length) return null
  const slide = slides.value[pageNumber - 1]
  if (!slide) return null
  const fm = slide.meta?.slide?.frontmatter || {}
  return {
    sound: fm.sound,
    volume: fm.soundVolume,
    file: fm.soundFile,
  }
}

watch(currentSlideNo, (newPage, oldPage) => {
  if (typeof window === 'undefined') return

  // 初回ロード時はスキップ
  if (!initialized.value) {
    initialized.value = true
    return
  }
  if (newPage === oldPage) return

  const global = getGlobalConfig()
  if (!global.enabled) return

  const slideConfig = getSlideConfig(newPage)

  // sound: false で個別無効化
  if (slideConfig?.sound === false) return

  const soundName = slideConfig?.sound || global.defaultSound
  if (!soundName || soundName === 'none') return

  const volume = slideConfig?.volume ?? global.volume
  const file = slideConfig?.file

  play(soundName, { volume, file })
})
</script>

<template>
  <!-- Sound effect trigger only, no visual output -->
</template>
