<script setup>
import { ref, onMounted } from 'vue'
const isVisible = ref(false)
onMounted(() => { isVisible.value = true })
</script>

<template>
  <div class="slidev-layout grid-icons-layout">
    <OrganicDecorations />
    <div class="grid-card" :class="{ visible: isVisible }">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.grid-icons-layout {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: 2.5rem;
}

.grid-icons-layout::before {
  display: none;
}

.grid-card {
  background: white;
  border-radius: 20px;
  padding: 2.5rem 3.5rem;
  width: 88%;
  max-width: 900px;
  box-shadow: 0 2px 24px rgba(0, 0, 0, 0.04);
  position: relative;
  z-index: 1;
  opacity: 0;
  transform: translateY(20px);
  transition: all 600ms cubic-bezier(0.22, 1, 0.36, 1);
}

.grid-card.visible {
  opacity: 1;
  transform: translateY(0);
}

.grid-icons-layout :deep(h1),
.grid-icons-layout :deep(h2) {
  color: var(--pop-rose);
  font-family: var(--pop-font-heading);
  font-size: var(--pop-font-size-3xl);
  margin-bottom: 2rem;
}

.grid-icons-layout :deep(h3) {
  color: var(--pop-text);
  font-family: var(--pop-font-heading);
  font-size: var(--pop-font-size-lg);
  margin-bottom: 0.3rem;
}

.grid-icons-layout :deep(p) {
  font-size: var(--pop-font-size-sm);
  color: var(--pop-text-light);
}
</style>
