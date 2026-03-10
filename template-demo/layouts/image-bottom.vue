<script setup>
defineProps({
  image: { type: String, required: true },
})
</script>

<template>
  <div class="slidev-layout image-bottom-layout">
    <OrganicDecorations />
    <div class="content-area">
      <slot />
    </div>
    <div class="image-accent">
      <div class="image-frame">
        <img :src="image" alt="" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.image-bottom-layout {
  display: flex;
  flex-direction: column;
  padding: 2rem 3rem;
  position: relative;
  overflow: hidden;
}

.image-bottom-layout::before {
  display: none;
}

.content-area {
  flex: 1;
  position: relative;
  z-index: 1;
}

.image-accent {
  position: absolute;
  bottom: 1.2rem;
  right: 2rem;
  z-index: 1;
}

.image-frame {
  width: 220px;
  height: 160px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(212, 145, 143, 0.15);
  border: 3px solid #E8B4B8;
}

.image-frame img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.image-bottom-layout :deep(h1),
.image-bottom-layout :deep(h2) {
  color: var(--pop-rose, #D4918F);
  font-family: var(--pop-font-heading);
  margin-bottom: 0.5rem;
  font-size: var(--pop-font-size-3xl, 2.75rem);
}

.image-bottom-layout :deep(p) {
  font-size: var(--pop-font-size-lg, 1.2rem);
  color: var(--pop-text-light, #5A5A5A);
  line-height: 1.7;
  max-width: 65%;
}

.image-bottom-layout :deep(ul),
.image-bottom-layout :deep(ol) {
  max-width: 65%;
}
</style>
