<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

defineProps({
  image: { type: String, required: true },
  title: { type: String, default: '' },
})

const isOpen = ref(false)

function open() {
  isOpen.value = true
}

function close() {
  isOpen.value = false
}

function onKeydown(e) {
  if (e.key === 'Escape' && isOpen.value) {
    close()
  }
}

onMounted(() => {
  document.addEventListener('keydown', onKeydown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', onKeydown)
})
</script>

<template>
  <span class="book-trigger" @click.stop="open">
    <slot />
  </span>
  <Teleport to="body">
    <Transition name="lightbox">
      <div v-if="isOpen" class="book-lightbox-overlay" @click="close">
        <div class="book-lightbox-content" @click.stop>
          <button class="book-lightbox-close" @click="close" aria-label="Close">
            &times;
          </button>
          <div class="book-lightbox-body">
            <div class="book-lightbox-image-area">
              <img :src="image" :alt="title || 'Book cover'" class="book-lightbox-img" />
            </div>
            <div class="book-lightbox-detail">
              <h3 v-if="title" class="book-lightbox-title">{{ title }}</h3>
              <div class="book-lightbox-description">
                <slot name="detail" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.book-trigger {
  cursor: pointer;
  border-bottom: 2px dashed rgba(212, 145, 143, 0.5);
  transition: all 200ms ease;
}

.book-trigger:hover {
  border-bottom-color: #D4918F;
  color: #D4918F;
}

/* ========== Lightbox overlay ========== */
.book-lightbox-overlay {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
}

.book-lightbox-content {
  position: relative;
  background: #FFFBF8;
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  max-width: 680px;
  width: 90vw;
  max-height: 80vh;
  overflow: hidden;
}

.book-lightbox-close {
  position: absolute;
  top: 12px;
  right: 16px;
  background: none;
  border: none;
  font-size: 1.8rem;
  color: #8B8585;
  cursor: pointer;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 200ms ease;
  z-index: 1;
  line-height: 1;
}

.book-lightbox-close:hover {
  background: rgba(212, 145, 143, 0.15);
  color: #D4918F;
}

/* ========== Body layout ========== */
.book-lightbox-body {
  display: flex;
  gap: 2rem;
  padding: 2rem;
  align-items: flex-start;
}

.book-lightbox-image-area {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.book-lightbox-img {
  width: auto;
  height: 320px;
  max-width: 240px;
  border-radius: 12px;
  object-fit: contain;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
}

/* ========== Detail area ========== */
.book-lightbox-detail {
  flex: 1;
  min-width: 0;
  overflow-y: auto;
  max-height: 60vh;
}

.book-lightbox-title {
  font-family: 'Zen Maru Gothic', var(--pop-font-heading, sans-serif);
  font-size: 1.4rem;
  font-weight: 700;
  color: #3D3D3D;
  margin: 0 0 1rem;
  line-height: 1.5;
  background: linear-gradient(135deg, #D4918F, #C58FC4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.book-lightbox-description {
  font-family: 'Zen Maru Gothic', var(--pop-font-body, sans-serif);
  font-size: 0.95rem;
  color: #5A5A5A;
  line-height: 1.8;
}

.book-lightbox-description :deep(p) {
  margin: 0 0 0.8rem;
}

.book-lightbox-description :deep(ul) {
  list-style: none;
  padding-left: 1rem;
  margin: 0 0 0.8rem;
}

.book-lightbox-description :deep(ul li) {
  position: relative;
  padding-left: 0.2rem;
  line-height: 1.8;
}

.book-lightbox-description :deep(ul li::before) {
  content: '';
  position: absolute;
  left: -0.8rem;
  top: 0.7em;
  width: 6px;
  height: 6px;
  background: #A8C5B8;
  border-radius: 50%;
}

.book-lightbox-description :deep(a) {
  color: #D4918F;
  text-decoration: none;
  border-bottom: 1px solid rgba(212, 145, 143, 0.3);
}

.book-lightbox-description :deep(a:hover) {
  border-bottom-color: #D4918F;
}

.book-lightbox-description :deep(strong) {
  color: #3D3D3D;
  font-weight: 600;
}

/* ========== Transition ========== */
.lightbox-enter-active {
  transition: all 300ms cubic-bezier(0.22, 1, 0.36, 1);
}

.lightbox-leave-active {
  transition: all 200ms ease-in;
}

.lightbox-enter-from {
  opacity: 0;
}

.lightbox-enter-from .book-lightbox-content {
  transform: scale(0.9);
  opacity: 0;
}

.lightbox-leave-to {
  opacity: 0;
}

.lightbox-leave-to .book-lightbox-content {
  transform: scale(0.95);
  opacity: 0;
}
</style>
