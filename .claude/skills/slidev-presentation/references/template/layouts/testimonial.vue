<script setup>
import { ref, onMounted } from 'vue'
const isVisible = ref(false)
onMounted(() => { isVisible.value = true })
</script>

<template>
  <div class="slidev-layout testimonial-layout">
    <OrganicDecorations />
    <div class="testimonial-card" :class="{ visible: isVisible }">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.testimonial-layout {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: 2.5rem;
}

.testimonial-layout::before {
  display: none;
}

.testimonial-card {
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

.testimonial-card.visible {
  opacity: 1;
  transform: translateY(0);
}

.testimonial-layout :deep(h1),
.testimonial-layout :deep(h2) {
  color: var(--pop-rose);
  font-family: var(--pop-font-heading);
  font-size: var(--pop-font-size-3xl);
  margin-bottom: 2rem;
}

.testimonial-layout :deep(p) {
  font-family: var(--pop-font-body);
  font-size: var(--pop-font-size-base);
  color: var(--pop-text-light);
  line-height: 1.8;
  text-align: center;
}

.testimonial-layout :deep(h3) {
  font-family: var(--pop-font-accent);
  font-size: var(--pop-font-size-lg);
  color: var(--pop-text);
  text-align: center;
  margin-bottom: 0.3rem;
  border-bottom: 3px dotted var(--pop-rose-light);
  display: inline-block;
  padding-bottom: 4px;
}

.testimonial-layout :deep(img) {
  border-radius: 50%;
  width: 120px;
  height: 120px;
  object-fit: cover;
  border: 4px solid var(--pop-rose-light);
  box-shadow: 0 4px 15px rgba(212, 145, 143, 0.15);
  display: block;
  margin: 0 auto 1rem;
}
</style>
