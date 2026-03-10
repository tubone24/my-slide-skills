<script setup>
/**
 * CountUp - Animated number counter
 * Usage: <CountUp :to="1500" suffix="+" duration="2000" />
 */
import { ref, onMounted, watch } from 'vue'
import { useSlideContext } from '@slidev/client'

const props = defineProps({
  to: { type: Number, required: true },
  from: { type: Number, default: 0 },
  duration: { type: Number, default: 2000 },
  prefix: { type: String, default: '' },
  suffix: { type: String, default: '' },
  decimals: { type: Number, default: 0 },
  color: { type: String, default: '' },
})

const displayed = ref(props.from)
const { $clicks } = useSlideContext()

function animate() {
  const start = props.from
  const end = props.to
  const dur = props.duration
  const startTime = performance.now()

  function step(currentTime) {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / dur, 1)
    // easeOutExpo
    const eased = 1 - Math.pow(2, -10 * progress)
    displayed.value = start + (end - start) * eased

    if (progress < 1) {
      requestAnimationFrame(step)
    } else {
      displayed.value = end
    }
  }
  requestAnimationFrame(step)
}

onMounted(() => {
  animate()
})

const formattedValue = computed(() => {
  return displayed.value.toFixed(props.decimals)
})

import { computed } from 'vue'
</script>

<template>
  <span
    class="count-up"
    :style="color ? { background: color, '-webkit-background-clip': 'text', '-webkit-text-fill-color': 'transparent', 'background-clip': 'text' } : {}"
  >
    {{ prefix }}{{ formattedValue }}{{ suffix }}
  </span>
</template>

<style scoped>
.count-up {
  font-family: var(--pop-font-heading);
  font-size: inherit;
  font-weight: normal;
  background: var(--pop-gradient-main);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
  display: inline-block;
}
</style>
