<script setup>
import { ref, onMounted } from 'vue'
const isVisible = ref(false)
onMounted(() => { isVisible.value = true })
</script>

<template>
  <div class="slidev-layout contact-layout">
    <OrganicDecorations />
    <div class="contact-card" :class="{ visible: isVisible }">
      <div class="contact-left">
        <slot name="default" />
      </div>
      <div class="contact-divider" />
      <div class="contact-right">
        <slot name="right" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact-layout {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: 2.5rem;
}

.contact-layout::before {
  display: none;
}

.contact-card {
  background: white;
  border-radius: 20px;
  padding: 3rem 3.5rem;
  width: 88%;
  max-width: 900px;
  box-shadow: 0 2px 24px rgba(0, 0, 0, 0.04);
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 2rem;
  align-items: center;
  opacity: 0;
  transform: translateY(20px);
  transition: all 600ms cubic-bezier(0.22, 1, 0.36, 1);
}

.contact-card.visible {
  opacity: 1;
  transform: translateY(0);
}

.contact-divider {
  width: 2px;
  height: 80%;
  min-height: 200px;
  border-left: 2px dotted var(--pop-rose-light);
}

.contact-left,
.contact-right {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.contact-layout :deep(h1),
.contact-layout :deep(h2) {
  color: var(--pop-rose);
  font-family: var(--pop-font-heading);
  font-size: var(--pop-font-size-2xl);
  margin-bottom: 1.5rem;
}

.contact-layout :deep(h3) {
  color: var(--pop-rose);
  font-family: var(--pop-font-heading);
  font-size: var(--pop-font-size-xl);
  margin-bottom: 1rem;
}

.contact-layout :deep(p) {
  font-family: var(--pop-font-body);
  font-size: var(--pop-font-size-base);
  color: var(--pop-text-light);
  line-height: 1.8;
}
</style>
