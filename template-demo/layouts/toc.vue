<script setup>
import { ref, onMounted } from 'vue'
const isVisible = ref(false)
onMounted(() => { isVisible.value = true })
</script>

<template>
  <div class="slidev-layout toc-layout">
    <OrganicDecorations />
    <div class="toc-card" :class="{ visible: isVisible }">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.toc-layout {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: 2.5rem;
}

.toc-layout::before {
  display: none;
}

.toc-card {
  background: white;
  border-radius: 20px;
  padding: 3rem 4rem;
  width: 88%;
  max-width: 900px;
  box-shadow: 0 2px 24px rgba(0, 0, 0, 0.04);
  position: relative;
  z-index: 1;
  opacity: 0;
  transform: translateY(20px);
  transition: all 600ms cubic-bezier(0.22, 1, 0.36, 1);
}

.toc-card.visible {
  opacity: 1;
  transform: translateY(0);
}

.toc-layout :deep(h1),
.toc-layout :deep(h2) {
  color: var(--pop-rose);
  font-family: var(--pop-font-heading);
  font-size: var(--pop-font-size-3xl);
  margin-bottom: 2rem;
}

.toc-layout :deep(ol),
.toc-layout :deep(ul) {
  columns: 2;
  column-gap: 4rem;
  list-style: none;
  padding-left: 0;
  font-size: var(--pop-font-size-lg);
}

.toc-layout :deep(li) {
  break-inside: avoid;
  padding: 0.6rem 0;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: var(--pop-text);
  font-family: var(--pop-font-body);
  font-weight: 500;
}

.toc-layout :deep(li::before) {
  content: counter(list-item);
  counter-increment: list-item;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 2em;
  color: var(--pop-rose);
  font-family: var(--pop-font-heading);
  font-weight: 700;
  font-size: 1.2em;
}

.toc-layout :deep(ol) {
  counter-reset: list-item;
}
</style>
