<script setup>
import { ref, onMounted } from 'vue'

const isVisible = ref(false)

onMounted(() => {
  isVisible.value = true
})
</script>

<template>
  <div class="slidev-layout end-layout">
    <OrganicDecorations />
    <div class="end-gradient-bg" />

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
  background: linear-gradient(135deg, #F5EDE6, #FAF6F2, #EFF8F3);
}

.end-layout::before {
  display: none;
}

.end-gradient-bg {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 50% 50%, rgba(212, 145, 143, 0.08), transparent 70%);
  pointer-events: none;
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
