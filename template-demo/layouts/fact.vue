<script setup>
import { ref, onMounted } from 'vue'

const isVisible = ref(false)
onMounted(() => {
  isVisible.value = true
})
</script>

<template>
  <div class="slidev-layout fact-layout">
    <div class="fact-bg-shape fact-bg-shape-1" />
    <div class="fact-bg-shape fact-bg-shape-2" />

    <div class="fact-content" :class="{ visible: isVisible }">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.fact-layout {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.fact-bg-shape {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}

.fact-bg-shape-1 {
  width: 500px;
  height: 500px;
  background: var(--pop-gradient-dream);
  opacity: 0.15;
  top: -150px;
  right: -150px;
  animation: float 8s ease-in-out infinite;
}

.fact-bg-shape-2 {
  width: 350px;
  height: 350px;
  background: var(--pop-gradient-warm);
  opacity: 0.1;
  bottom: -100px;
  left: -100px;
  animation: float 6s ease-in-out infinite 2s;
}

.fact-content {
  position: relative;
  z-index: 1;
  opacity: 0;
  transform: scale(0.8);
  transition: all 700ms cubic-bezier(0.34, 1.56, 0.64, 1);
}

.fact-content.visible {
  opacity: 1;
  transform: scale(1);
}

.fact-layout :deep(h1) {
  font-family: var(--pop-font-heading);
  font-size: 6rem;
  background: var(--pop-gradient-main);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.5;
  margin-bottom: var(--pop-space-sm);
}

.fact-layout :deep(p) {
  font-size: var(--pop-font-size-xl);
  color: var(--pop-text-light);
  max-width: 500px;
  margin: 0 auto;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}
</style>
