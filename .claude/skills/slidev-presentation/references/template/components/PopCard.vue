<script setup>
/**
 * PopCard - Animated card component with pop styling
 * Usage: <PopCard color="pink" icon="✨">Content</PopCard>
 */
defineProps({
  color: { type: String, default: 'pink' },
  icon: { type: String, default: '' },
  title: { type: String, default: '' },
})

const colorStyles = {
  pink: { bg: '#FFF0F5', border: '#FFB4D2', accent: '#FF6B9D' },
  yellow: { bg: '#FFFDE7', border: '#FFD93D', accent: '#FF8A65' },
  mint: { bg: '#F0FFF4', border: '#6EE7B7', accent: '#4ECDC4' },
  purple: { bg: '#F5F3FF', border: '#D8B4FE', accent: '#A855F7' },
  cyan: { bg: '#ECFEFF', border: '#A8E6CF', accent: '#4ECDC4' },
}
</script>

<template>
  <div
    class="pop-card-component"
    :style="{
      background: (colorStyles[color] || colorStyles.pink).bg,
      borderColor: (colorStyles[color] || colorStyles.pink).border,
    }"
  >
    <div v-if="icon" class="pop-card-icon">{{ icon }}</div>
    <div v-if="title" class="pop-card-title" :style="{ color: (colorStyles[color] || colorStyles.pink).accent }">
      {{ title }}
    </div>
    <div class="pop-card-body">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.pop-card-component {
  border-radius: 20px;
  padding: 1.5rem 2rem;
  border: 2.5px solid;
  position: relative;
  overflow: hidden;
  transition: all 300ms cubic-bezier(0.34, 1.56, 0.64, 1);
}

.pop-card-component:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(255, 107, 157, 0.15);
}

.pop-card-icon {
  font-size: 2rem;
  margin-bottom: 0.5rem;
  animation: float 3s ease-in-out infinite;
}

.pop-card-title {
  font-family: var(--pop-font-heading);
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.pop-card-body {
  font-family: var(--pop-font-body);
  font-size: 0.95rem;
  color: var(--pop-text-light);
  line-height: 1.6;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}
</style>
