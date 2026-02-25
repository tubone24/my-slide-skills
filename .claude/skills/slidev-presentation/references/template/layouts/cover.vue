<script setup>
import { ref, onMounted } from 'vue'

defineProps({
  background: { type: String, default: '' },
  subtitle: { type: String, default: '' },
})

const isVisible = ref(false)
const sparkles = ref([])

onMounted(() => {
  isVisible.value = true
  // Generate random sparkle positions
  sparkles.value = Array.from({ length: 12 }, () => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 16 + 8,
    delay: Math.random() * 3,
    duration: Math.random() * 2 + 2,
  }))
})
</script>

<template>
  <div class="slidev-layout cover" :style="background ? { backgroundImage: `url(${background})`, backgroundSize: 'cover' } : {}">
    <!-- Decorative gradient orbs -->
    <div class="cover-orb cover-orb-1" />
    <div class="cover-orb cover-orb-2" />
    <div class="cover-orb cover-orb-3" />

    <!-- Sparkles -->
    <div
      v-for="(s, i) in sparkles"
      :key="i"
      class="cover-sparkle"
      :style="{
        left: s.x + '%',
        top: s.y + '%',
        width: s.size + 'px',
        height: s.size + 'px',
        animationDelay: s.delay + 's',
        animationDuration: s.duration + 's',
      }"
    />

    <!-- Content -->
    <div class="cover-content" :class="{ 'cover-visible': isVisible }">
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
  background: linear-gradient(135deg, #FFF0F5 0%, #FFF8F9 30%, #FFFDE7 70%, #F0FFF4 100%);
  padding: 3rem;
}

.cover::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle, rgba(255, 107, 157, 0.15) 1px, transparent 1px);
  background-size: 20px 20px;
  pointer-events: none;
}

/* Gradient orbs */
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
  background: var(--pop-pink);
  top: -50px;
  right: -50px;
  animation: float 6s ease-in-out infinite;
}

.cover-orb-2 {
  width: 250px;
  height: 250px;
  background: var(--pop-yellow);
  bottom: -30px;
  left: -30px;
  animation: float 5s ease-in-out infinite 1s;
}

.cover-orb-3 {
  width: 200px;
  height: 200px;
  background: var(--pop-cyan);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: float 7s ease-in-out infinite 2s;
}

/* Sparkles */
.cover-sparkle {
  position: absolute;
  background: var(--pop-yellow);
  border-radius: 50%;
  pointer-events: none;
  animation: sparkle 3s ease-in-out infinite;
}

.cover-sparkle:nth-child(odd) {
  background: var(--pop-pink-light);
}

.cover-sparkle:nth-child(3n) {
  background: var(--pop-cyan-light);
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
  background: var(--pop-gradient-main);
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
  line-height: 1.15;
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

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
}

@keyframes sparkle {
  0%, 100% { opacity: 0; transform: scale(0) rotate(0deg); }
  50% { opacity: 0.8; transform: scale(1) rotate(180deg); }
}

@keyframes gradient-shift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
</style>
