<script setup>
/**
 * Global top component - Sound effects on slide transitions
 * Watches page changes and plays sound effects based on frontmatter settings
 */
import { watch, ref } from 'vue'
import { useNav, configs } from '@slidev/client'
import { useSoundEffect } from './composables/useSoundEffect.js'

const { currentSlideNo, slides } = useNav()
const { play } = useSoundEffect()

const initialized = ref(false)

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
