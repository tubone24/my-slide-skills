<script setup>
/**
 * GradientHeading - Animated gradient text heading
 * Usage: <GradientHeading gradient="main" tag="h2">Title</GradientHeading>
 */
defineProps({
  gradient: { type: String, default: 'main' },
  tag: { type: String, default: 'h1' },
  animate: { type: Boolean, default: true },
})

const gradients = {
  main: 'linear-gradient(135deg, #FF6B9D, #FF2D7B, #10B981)',
  warm: 'linear-gradient(135deg, #FFD93D, #FF8A65, #FF6B6B)',
  cool: 'linear-gradient(135deg, #4ECDC4, #10B981)',
  candy: 'linear-gradient(135deg, #FF6B9D, #FFD93D, #4ECDC4)',
  sunset: 'linear-gradient(135deg, #FF6B6B, #FF8A65, #FFD93D)',
  dream: 'linear-gradient(135deg, #6EE7B7, #FFB4D2, #FFF176)',
}
</script>

<template>
  <component
    :is="tag"
    class="gradient-heading"
    :class="{ animated: animate }"
    :style="{
      background: gradients[gradient] || gradients.main,
      backgroundSize: animate ? '200% 200%' : '100% 100%',
    }"
  >
    <slot />
  </component>
</template>

<style scoped>
.gradient-heading {
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: inline-block;
}

.gradient-heading.animated {
  animation: gradient-shift 4s ease infinite;
}

@keyframes gradient-shift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
</style>
