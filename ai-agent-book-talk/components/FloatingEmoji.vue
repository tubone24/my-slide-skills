<script setup>
/**
 * FloatingEmoji - Decorative floating emoji background
 * Usage: <FloatingEmoji emojis="✨🌸💖🎀" :count="8" />
 */
import { ref, onMounted } from 'vue'

const props = defineProps({
  emojis: { type: String, default: '✨🌸💖🎀⭐' },
  count: { type: Number, default: 8 },
})

const items = ref([])

onMounted(() => {
  const emojiList = [...props.emojis]
  items.value = Array.from({ length: props.count }, () => ({
    emoji: emojiList[Math.floor(Math.random() * emojiList.length)],
    x: Math.random() * 90 + 5,
    y: Math.random() * 80 + 10,
    size: Math.random() * 20 + 14,
    delay: Math.random() * 4,
    duration: Math.random() * 3 + 3,
    rotation: Math.random() * 30 - 15,
    opacity: Math.random() * 0.25 + 0.1,
  }))
})
</script>

<template>
  <div class="floating-emoji-container">
    <span
      v-for="(item, i) in items"
      :key="i"
      class="floating-emoji"
      :style="{
        left: item.x + '%',
        top: item.y + '%',
        fontSize: item.size + 'px',
        animationDelay: item.delay + 's',
        animationDuration: item.duration + 's',
        transform: `rotate(${item.rotation}deg)`,
        opacity: item.opacity,
      }"
    >{{ item.emoji }}</span>
  </div>
</template>

<style scoped>
.floating-emoji-container {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}

.floating-emoji {
  position: absolute;
  animation: emoji-float ease-in-out infinite;
  user-select: none;
}

@keyframes emoji-float {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  25% { transform: translateY(-12px) rotate(5deg); }
  75% { transform: translateY(8px) rotate(-5deg); }
}
</style>
