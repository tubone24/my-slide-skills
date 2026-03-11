<script setup>
import { ref, onMounted } from 'vue'

defineProps({
  background: { type: String, default: '' },
  subtitle: { type: String, default: '' },
})

const isVisible = ref(false)

onMounted(() => {
  isVisible.value = true
})
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
</style>
