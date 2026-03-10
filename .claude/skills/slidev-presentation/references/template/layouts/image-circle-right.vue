<script setup>
defineProps({
  image: { type: String, required: true },
})
</script>

<template>
  <div class="slidev-layout image-circle-right-layout">
    <OrganicDecorations />
    <div class="content-side">
      <slot />
    </div>
    <div class="image-side">
      <div class="circle-frame">
        <img :src="image" alt="" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.image-circle-right-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;
  padding: 2.5rem 3.5rem;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.image-circle-right-layout::before {
  display: none;
}

.content-side {
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
}

.image-side {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
}

.circle-frame {
  width: 340px;
  height: 340px;
  border-radius: 50%;
  overflow: hidden;
  border: 5px solid var(--pop-rose-light);
  box-shadow: 0 8px 30px rgba(212, 145, 143, 0.15);
  position: relative;
}

.circle-frame img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.image-circle-right-layout :deep(h1),
.image-circle-right-layout :deep(h2) {
  color: var(--pop-rose);
  font-family: var(--pop-font-heading);
  margin-bottom: 1rem;
}

.image-circle-right-layout :deep(p) {
  font-family: var(--pop-font-body);
  font-size: var(--pop-font-size-lg);
  color: var(--pop-text-light);
  line-height: 1.8;
}

.image-circle-right-layout :deep(ul),
.image-circle-right-layout :deep(ol) {
  font-size: var(--pop-font-size-lg);
  color: var(--pop-text-light);
}

.image-circle-right-layout :deep(li::marker) {
  color: var(--pop-rose);
}
</style>
