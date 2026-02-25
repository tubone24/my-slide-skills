<script setup>
import { ref, onMounted } from 'vue'

const isVisible = ref(false)
const hearts = ref([])

onMounted(() => {
  isVisible.value = true
  hearts.value = Array.from({ length: 20 }, () => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 14 + 6,
    delay: Math.random() * 4,
    duration: Math.random() * 3 + 2,
    opacity: Math.random() * 0.3 + 0.1,
  }))
})
</script>

<template>
  <div class="slidev-layout end-layout">
    <div class="end-gradient-bg" />

    <!-- Floating hearts -->
    <div
      v-for="(h, i) in hearts"
      :key="i"
      class="end-heart"
      :style="{
        left: h.x + '%',
        top: h.y + '%',
        fontSize: h.size + 'px',
        animationDelay: h.delay + 's',
        animationDuration: h.duration + 's',
        opacity: h.opacity,
      }"
    >&#x2665;</div>

    <div class="end-content" :class="{ visible: isVisible }">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.end-layout {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #FFF0F5, #FFFDE7, #F0FFF4);
}

.end-layout::before {
  display: none;
}

.end-gradient-bg {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 50% 50%, rgba(255, 107, 157, 0.1), transparent 70%);
  pointer-events: none;
}

.end-heart {
  position: absolute;
  color: var(--pop-pink-light);
  pointer-events: none;
  animation: heart-float 3s ease-in-out infinite;
}

@keyframes heart-float {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  25% { transform: translateY(-8px) rotate(5deg); }
  75% { transform: translateY(5px) rotate(-5deg); }
}

.end-content {
  position: relative;
  z-index: 1;
  opacity: 0;
  transform: translateY(30px) scale(0.9);
  transition: all 800ms cubic-bezier(0.34, 1.56, 0.64, 1);
}

.end-content.visible {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.end-layout :deep(h1) {
  font-family: var(--pop-font-heading);
  font-size: var(--pop-font-size-5xl);
  background: var(--pop-gradient-main);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.end-layout :deep(p) {
  font-family: var(--pop-font-accent);
  font-size: var(--pop-font-size-xl);
  color: var(--pop-text-light);
}
</style>
