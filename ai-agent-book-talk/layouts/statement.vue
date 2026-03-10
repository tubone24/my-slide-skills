<script setup>
import { ref, onMounted } from 'vue'

defineProps({
  color: { type: String, default: 'dark' },
})

const isVisible = ref(false)
onMounted(() => {
  isVisible.value = true
})

const colorMap = {
  dark: { bg: '#1E293B', text: '#FFFFFF', accent: '#10B981' },
  green: { bg: '#059669', text: '#FFFFFF', accent: '#A7F3D0' },
  pink: { bg: '#FF2D7B', text: '#FFFFFF', accent: '#FFB4D2' },
  coral: { bg: '#FF6B6B', text: '#FFFFFF', accent: '#FFF176' },
  cyan: { bg: '#0D9488', text: '#FFFFFF', accent: '#A8E6CF' },
  warm: { bg: '#FF8A65', text: '#FFFFFF', accent: '#FFFDE7' },
  light: { bg: '#F0FFF4', text: '#1E3A34', accent: '#10B981' },
}
</script>

<template>
  <div
    class="slidev-layout statement-layout"
    :style="{
      background: (colorMap[color] || colorMap.dark).bg,
      color: (colorMap[color] || colorMap.dark).text,
    }"
  >
    <div class="statement-accent-dot" :style="{ background: (colorMap[color] || colorMap.dark).accent }" />
    <div class="statement-content" :class="{ visible: isVisible }">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.statement-layout {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  overflow: hidden;
  height: 100%;
  min-height: 100%;
  box-sizing: border-box;
}

.statement-layout::before {
  display: none;
}

.statement-accent-dot {
  position: absolute;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  opacity: 0.07;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
}

.statement-content {
  position: relative;
  z-index: 1;
  max-width: 80%;
  opacity: 0;
  transform: scale(0.9);
  transition: all 700ms cubic-bezier(0.34, 1.56, 0.64, 1);
}

.statement-content.visible {
  opacity: 1;
  transform: scale(1);
}

.statement-layout :deep(h1) {
  font-family: var(--pop-font-heading);
  font-size: var(--pop-font-size-4xl);
  color: inherit !important;
  -webkit-text-fill-color: inherit !important;
  line-height: 1.6;
  letter-spacing: 0.02em;
}

.statement-layout :deep(p) {
  font-family: var(--pop-font-accent);
  font-size: var(--pop-font-size-lg);
  opacity: 0.7;
  margin-top: 1rem;
  color: inherit !important;
}
</style>
