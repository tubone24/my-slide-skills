<script setup>
/**
 * Global bottom component - progress bar and page number
 * Shown on all slides except cover/end
 */
import { useSlideContext, useNav } from '@slidev/client'
import { computed } from 'vue'

const { $page } = useSlideContext()
const { total } = useNav()

const progress = computed(() => {
  return ((($page.value - 1) / (total.value - 1)) * 100).toFixed(1)
})
</script>

<template>
  <div v-if="$page > 1" class="global-bottom">
    <div class="progress-track">
      <div class="progress-fill" :style="{ width: progress + '%' }" />
    </div>
    <div class="page-info">
      <span class="page-current">{{ $page }}</span>
      <span class="page-sep">/</span>
      <span class="page-total">{{ total }}</span>
    </div>
  </div>
</template>

<style scoped>
.global-bottom {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  padding: 0 1rem 0.5rem;
  gap: 0.75rem;
  pointer-events: none;
}

.progress-track {
  flex: 1;
  height: 3px;
  background: rgba(255, 180, 210, 0.2);
  border-radius: 2px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #FF6B9D, #10B981);
  border-radius: 2px;
  transition: width 400ms cubic-bezier(0.22, 1, 0.36, 1);
}

.page-info {
  font-family: 'Poppins', sans-serif;
  font-size: 0.7rem;
  font-weight: 600;
  color: rgba(30, 58, 52, 0.35);
  flex-shrink: 0;
}

.page-current {
  color: #FF6B9D;
}

.page-sep {
  margin: 0 0.15rem;
}
</style>
