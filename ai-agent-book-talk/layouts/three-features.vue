<script setup>
import { ref, onMounted } from 'vue'
const isVisible = ref(false)
onMounted(() => { isVisible.value = true })
</script>

<template>
  <div class="slidev-layout three-features-layout">
    <OrganicDecorations />
    <div class="features-card" :class="{ visible: isVisible }">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.three-features-layout {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: 2.5rem;
}

.three-features-layout::before {
  display: none;
}

.features-card {
  background: white;
  border-radius: 20px;
  padding: 2.5rem 3rem;
  width: 90%;
  max-width: 950px;
  box-shadow: 0 2px 24px rgba(0, 0, 0, 0.04);
  position: relative;
  z-index: 1;
  opacity: 0;
  transform: translateY(20px);
  transition: all 600ms cubic-bezier(0.22, 1, 0.36, 1);
}

.features-card.visible {
  opacity: 1;
  transform: translateY(0);
}

.three-features-layout :deep(h1),
.three-features-layout :deep(h2) {
  color: var(--pop-rose);
  font-family: var(--pop-font-heading);
  font-size: var(--pop-font-size-3xl);
  margin-bottom: 2rem;
}

.three-features-layout :deep(img) {
  border-radius: 50%;
  width: 150px;
  height: 150px;
  object-fit: cover;
  border: 4px solid var(--pop-rose-light);
  box-shadow: 0 4px 15px rgba(212, 145, 143, 0.15);
  display: block;
  margin: 0 auto 1rem;
}

.three-features-layout :deep(h3) {
  font-family: var(--pop-font-accent);
  font-size: var(--pop-font-size-base);
  color: var(--pop-text);
  text-align: center;
  font-weight: 700;
  line-height: 1.6;
}

.three-features-layout :deep(p) {
  font-size: var(--pop-font-size-sm);
  color: var(--pop-text-light);
  text-align: center;
}
</style>
