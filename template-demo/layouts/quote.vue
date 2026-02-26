<script setup>
import { ref, onMounted } from 'vue'

defineProps({
  author: { type: String, default: '' },
})

const isVisible = ref(false)
onMounted(() => {
  isVisible.value = true
})
</script>

<template>
  <div class="slidev-layout quote-layout">
    <!-- Big decorative quote mark -->
    <div class="quote-mark" :class="{ visible: isVisible }">&#x201C;</div>

    <div class="quote-content" :class="{ visible: isVisible }">
      <slot />
      <div v-if="author" class="quote-author">
        <div class="quote-author-line" />
        <span>{{ author }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.quote-layout {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: var(--pop-bg-alt);
  position: relative;
}

.quote-mark {
  position: absolute;
  top: 1rem;
  left: 2rem;
  font-family: var(--pop-font-heading);
  font-size: 12rem;
  line-height: 1;
  background: var(--pop-gradient-main);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  opacity: 0;
  transform: scale(0.5) translateY(20px);
  transition: all 800ms cubic-bezier(0.34, 1.56, 0.64, 1);
  pointer-events: none;
}

.quote-mark.visible {
  opacity: 0.15;
  transform: scale(1) translateY(0);
}

.quote-content {
  position: relative;
  z-index: 1;
  max-width: 650px;
  opacity: 0;
  transform: translateY(20px);
  transition: all 600ms cubic-bezier(0.22, 1, 0.36, 1) 200ms;
}

.quote-content.visible {
  opacity: 1;
  transform: translateY(0);
}

.quote-layout :deep(p) {
  font-family: var(--pop-font-accent);
  font-size: var(--pop-font-size-2xl);
  font-weight: 500;
  color: var(--pop-text);
  line-height: 1.6;
  font-style: italic;
}

.quote-author {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: var(--pop-space-lg);
}

.quote-author-line {
  width: 40px;
  height: 3px;
  background: var(--pop-gradient-main);
  border-radius: 2px;
}

.quote-author span {
  font-family: var(--pop-font-accent);
  font-size: var(--pop-font-size-base);
  font-weight: 700;
  color: var(--pop-pink);
  letter-spacing: 0.05em;
}
</style>
