<script setup>
/**
 * PopTimeline - Animated timeline component
 * Usage:
 *   <PopTimeline :items="[
 *     { year: '2023', title: 'Started', desc: 'Description' },
 *     { year: '2024', title: 'Grew', desc: 'Description' },
 *   ]" />
 */
defineProps({
  items: { type: Array, required: true },
})

const colors = ['#FF6B9D', '#FFD93D', '#4ECDC4', '#10B981', '#FF8A65', '#6EE7B7']
</script>

<template>
  <div class="pop-timeline">
    <div class="timeline-line" />
    <div
      v-for="(item, i) in items"
      :key="i"
      v-click
      class="timeline-item"
      :class="{ 'timeline-right': i % 2 === 1 }"
    >
      <div class="timeline-dot" :style="{ background: colors[i % colors.length] }" />
      <div class="timeline-card" :style="{ borderColor: colors[i % colors.length] }">
        <div class="timeline-year" :style="{ color: colors[i % colors.length] }">{{ item.year }}</div>
        <div class="timeline-title">{{ item.title }}</div>
        <div v-if="item.desc" class="timeline-desc">{{ item.desc }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.pop-timeline {
  position: relative;
  padding: 1rem 0;
}

.timeline-line {
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 3px;
  background: linear-gradient(to bottom, #FFB4D2, #A7F3D0, #A8E6CF);
  border-radius: 2px;
  transform: translateX(-50%);
}

.timeline-item {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  position: relative;
  transition: all 500ms cubic-bezier(0.34, 1.56, 0.64, 1);
}

.timeline-item.slidev-vclick-hidden {
  opacity: 0;
  transform: translateY(20px) scale(0.9);
}

.timeline-item:not(.timeline-right) {
  padding-right: 52%;
  justify-content: flex-end;
}

.timeline-item.timeline-right {
  padding-left: 52%;
}

.timeline-dot {
  position: absolute;
  left: 50%;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  transform: translateX(-50%);
  z-index: 1;
  box-shadow: 0 0 0 4px white, 0 0 12px rgba(255, 107, 157, 0.3);
}

.timeline-card {
  background: white;
  border: 2px solid;
  border-radius: 16px;
  padding: 0.8rem 1.2rem;
  max-width: 280px;
}

.timeline-year {
  font-family: var(--pop-font-heading);
  font-size: 0.8rem;
  font-weight: normal;
  margin-bottom: 0.2rem;
}

.timeline-title {
  font-family: var(--pop-font-accent);
  font-size: 1rem;
  font-weight: 700;
  color: var(--pop-text);
}

.timeline-desc {
  font-family: var(--pop-font-body);
  font-size: 0.8rem;
  color: var(--pop-text-light);
  margin-top: 0.2rem;
  line-height: 1.4;
}
</style>
