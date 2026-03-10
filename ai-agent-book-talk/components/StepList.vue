<script setup>
/**
 * StepList - Numbered step list with pop styling
 * Usage:
 *   <StepList :steps="['First step', 'Second step', 'Third step']" />
 */
defineProps({
  steps: { type: Array, required: true },
  color: { type: String, default: 'pink' },
})

const colors = {
  pink: { num: '#FF6B9D', bg: '#FFF0F5', border: '#FFB4D2' },
  yellow: { num: '#FF8A65', bg: '#FFFDE7', border: '#FFD93D' },
  cyan: { num: '#4ECDC4', bg: '#F0FFF4', border: '#A8E6CF' },
  green: { num: '#10B981', bg: '#ECFDF5', border: '#A7F3D0' },
}
</script>

<template>
  <div class="step-list">
    <div
      v-for="(step, i) in steps"
      :key="i"
      v-click
      class="step-item"
      :style="{
        '--step-bg': (colors[color] || colors.pink).bg,
        '--step-border': (colors[color] || colors.pink).border,
        '--step-num': (colors[color] || colors.pink).num,
      }"
    >
      <div class="step-number">{{ i + 1 }}</div>
      <div class="step-text">{{ step }}</div>
    </div>
  </div>
</template>

<style scoped>
.step-list {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.step-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.8rem 1.2rem;
  background: var(--step-bg);
  border: 2px solid var(--step-border);
  border-radius: 16px;
  transition: all 500ms cubic-bezier(0.34, 1.56, 0.64, 1);
}

.step-item.slidev-vclick-hidden {
  opacity: 0;
  transform: translateX(-30px) scale(0.9);
}

.step-number {
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: var(--step-num);
  color: white;
  font-family: var(--pop-font-heading);
  font-size: 0.85rem;
  font-weight: normal;
}

.step-text {
  font-family: var(--pop-font-body);
  font-size: 1rem;
  font-weight: 500;
  color: var(--pop-text);
  line-height: 1.4;
}
</style>
