<script setup>
import { ref, onMounted } from 'vue'

defineProps({
  color: { type: String, default: 'pink' },
})

const isVisible = ref(false)
onMounted(() => {
  isVisible.value = true
})

const colorMap = {
  pink: { bg: 'linear-gradient(135deg, #FF6B9D, #FF2D7B)', orb: '#FFB4D2' },
  yellow: { bg: 'linear-gradient(135deg, #FFD93D, #FF8A65)', orb: '#FFF176' },
  cyan: { bg: 'linear-gradient(135deg, #4ECDC4, #38B2AC)', orb: '#A8E6CF' },
  purple: { bg: 'linear-gradient(135deg, #A855F7, #7C3AED)', orb: '#D8B4FE' },
  candy: { bg: 'linear-gradient(135deg, #FF6B9D, #FFD93D, #4ECDC4)', orb: '#FFB4D2' },
}
</script>

<template>
  <div class="slidev-layout section-layout" :style="{ background: (colorMap[color] || colorMap.pink).bg }">
    <!-- Decorative circles -->
    <div class="section-circle section-circle-1" :style="{ background: (colorMap[color] || colorMap.pink).orb }" />
    <div class="section-circle section-circle-2" :style="{ background: (colorMap[color] || colorMap.pink).orb }" />
    <div class="section-circle section-circle-3" :style="{ background: (colorMap[color] || colorMap.pink).orb }" />

    <!-- Dot pattern overlay -->
    <div class="section-dots" />

    <div class="section-content" :class="{ visible: isVisible }">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.section-layout {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.section-layout::before {
  display: none;
}

.section-dots {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle, rgba(255, 255, 255, 0.15) 1.5px, transparent 1.5px);
  background-size: 28px 28px;
  pointer-events: none;
}

.section-circle {
  position: absolute;
  border-radius: 50%;
  opacity: 0.2;
  pointer-events: none;
}

.section-circle-1 {
  width: 400px;
  height: 400px;
  top: -100px;
  right: -100px;
  animation: float 6s ease-in-out infinite;
}

.section-circle-2 {
  width: 300px;
  height: 300px;
  bottom: -80px;
  left: -60px;
  animation: float 5s ease-in-out infinite 1.5s;
}

.section-circle-3 {
  width: 150px;
  height: 150px;
  top: 60%;
  left: 70%;
  animation: float 4s ease-in-out infinite 0.5s;
}

.section-content {
  position: relative;
  z-index: 1;
  max-width: 700px;
  opacity: 0;
  transform: scale(0.85);
  transition: all 700ms cubic-bezier(0.34, 1.56, 0.64, 1);
}

.section-content.visible {
  opacity: 1;
  transform: scale(1);
}

.section-layout :deep(h1),
.section-layout :deep(h2) {
  color: white;
  text-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  -webkit-text-fill-color: white;
}

.section-layout :deep(h1) {
  font-size: var(--pop-font-size-5xl);
}

.section-layout :deep(p) {
  color: rgba(255, 255, 255, 0.85);
  font-size: var(--pop-font-size-xl);
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
}
</style>
