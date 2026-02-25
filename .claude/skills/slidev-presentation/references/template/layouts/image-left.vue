<script setup>
defineProps({
  image: { type: String, required: true },
})
</script>

<template>
  <div class="slidev-layout image-left-layout">
    <div class="image-side">
      <div class="image-frame">
        <img :src="image" alt="" />
      </div>
    </div>
    <div class="content-side">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.image-left-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  padding: 2.5rem 3.5rem;
  align-items: center;
}

.content-side {
  display: flex;
  flex-direction: column;
}

.image-side {
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-frame {
  position: relative;
  border-radius: var(--pop-radius-lg);
  overflow: hidden;
  box-shadow: var(--pop-shadow-lg);
  border: 3px solid var(--pop-cyan-light);
  max-width: 100%;
}

.image-frame img {
  width: 100%;
  height: auto;
  display: block;
}
</style>
