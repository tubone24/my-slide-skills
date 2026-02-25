<script setup>
/**
 * ProgressBar - Animated progress/stat bar
 * Usage: <ProgressBar label="React" :value="85" color="pink" />
 */
import { ref, onMounted } from 'vue'

const props = defineProps({
  label: { type: String, default: '' },
  value: { type: Number, default: 0, validator: v => v >= 0 && v <= 100 },
  color: { type: String, default: 'main' },
  showValue: { type: Boolean, default: true },
})

const animatedWidth = ref(0)

const gradients = {
  main: 'linear-gradient(90deg, #FF6B9D, #A855F7)',
  warm: 'linear-gradient(90deg, #FFD93D, #FF8A65)',
  cool: 'linear-gradient(90deg, #4ECDC4, #38B2AC)',
  pink: 'linear-gradient(90deg, #FFB4D2, #FF6B9D)',
  purple: 'linear-gradient(90deg, #D8B4FE, #A855F7)',
  candy: 'linear-gradient(90deg, #FF6B9D, #FFD93D, #4ECDC4)',
}

onMounted(() => {
  setTimeout(() => {
    animatedWidth.value = props.value
  }, 300)
})
</script>

<template>
  <div class="progress-bar-container">
    <div v-if="label" class="progress-label">
      <span class="progress-name">{{ label }}</span>
      <span v-if="showValue" class="progress-value">{{ value }}%</span>
    </div>
    <div class="progress-track">
      <div
        class="progress-fill"
        :style="{
          width: animatedWidth + '%',
          background: gradients[color] || gradients.main,
        }"
      />
    </div>
  </div>
</template>

<style scoped>
.progress-bar-container {
  width: 100%;
  margin: 0.5rem 0;
}

.progress-label {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.4rem;
}

.progress-name {
  font-family: var(--pop-font-accent);
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--pop-text);
}

.progress-value {
  font-family: var(--pop-font-heading);
  font-size: 0.85rem;
  color: var(--pop-pink);
}

.progress-track {
  width: 100%;
  height: 10px;
  background: var(--pop-bg-alt);
  border-radius: 100px;
  overflow: hidden;
  border: 1.5px solid var(--pop-pink-light);
}

.progress-fill {
  height: 100%;
  border-radius: 100px;
  transition: width 1.2s cubic-bezier(0.22, 1, 0.36, 1);
  position: relative;
}

.progress-fill::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  animation: shimmer 2s ease-in-out infinite;
}

@keyframes shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}
</style>
