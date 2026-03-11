<script setup>
import { ref, onMounted } from 'vue'

defineProps({
  image: { type: String, default: '' },
  name: { type: String, default: '' },
  nameEn: { type: String, default: '' },
  title: { type: String, default: '' },
  qrcode: { type: String, default: '' },
  qrcodeLabel: { type: String, default: 'Portfolio' },
  bannerImage: { type: String, default: '' },
  bannerLabel: { type: String, default: '' },
})

const leftVisible = ref(false)
const rightVisible = ref(false)

onMounted(() => {
  leftVisible.value = true
  setTimeout(() => {
    rightVisible.value = true
  }, 250)
})
</script>

<template>
  <div class="slidev-layout profile">
    <!-- Decorative dot pattern background -->
    <!-- Decorative blob (sage green, bottom-right) -->
    <div class="profile-blob" />

    <!-- Two-column grid -->
    <div class="profile-grid">
      <!-- Left panel: image + name + title -->
      <div class="profile-left" :class="{ visible: leftVisible }">
        <div v-if="image" class="profile-image-wrapper">
          <img :src="image" alt="Profile" class="profile-image" />
        </div>
        <h2 v-if="name" class="profile-name">{{ name }}</h2>
        <p v-if="nameEn" class="profile-name-en">{{ nameEn }}</p>
        <p v-if="title" class="profile-title">{{ title }}</p>
      </div>

      <!-- Right panel: slot content -->
      <div class="profile-right" :class="{ visible: rightVisible }">
        <slot />
      </div>
    </div>

    <!-- Banner + QR code (bottom-right) -->
    <div v-if="qrcode || bannerImage" class="profile-bottom-bar" :class="{ visible: rightVisible }">
      <div v-if="bannerImage" class="profile-banner">
        <img :src="bannerImage" alt="Banner" class="profile-banner-img" />
        <span v-if="bannerLabel" class="profile-banner-label">{{ bannerLabel }}</span>
      </div>
      <div v-if="qrcode" class="profile-qrcode">
        <img :src="qrcode" alt="QR Code" class="profile-qrcode-img" />
        <span class="profile-qrcode-label">{{ qrcodeLabel }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.profile {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: linear-gradient(135deg, #F5EDE6 0%, #FAF6F2 30%, #FFF8E7 70%, #EFF8F3 100%);
  padding: 2.5rem 3rem;
  height: 100%;
  min-height: 100%;
  box-sizing: border-box;
  overflow: hidden;
}

/* Dot pattern (same as cover.vue) */
.profile::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle, rgba(212, 145, 143, 0.08) 1px, transparent 1px);
  background-size: 20px 20px;
  pointer-events: none;
}

/* Sage green blob decoration */
.profile-blob {
  position: absolute;
  bottom: -60px;
  right: -60px;
  width: 280px;
  height: 280px;
  background: #A8C5B8;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.3;
  pointer-events: none;
}

/* Grid layout */
.profile-grid {
  display: grid;
  grid-template-columns: 35% 65%;
  gap: 2.5rem;
  width: 92%;
  max-width: 960px;
  position: relative;
  z-index: 1;
  align-items: center;
}

/* ========== Left panel ========== */
.profile-left {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  opacity: 0;
  transform: translateX(-40px);
  transition: all 700ms cubic-bezier(0.22, 1, 0.36, 1);
}

.profile-left.visible {
  opacity: 1;
  transform: translateX(0);
}

.profile-image-wrapper {
  margin-bottom: 1.2rem;
}

.profile-image {
  width: 280px;
  height: 280px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #D4918F;
  box-shadow: 0 6px 24px rgba(255, 255, 255, 0.6), 0 4px 16px rgba(212, 145, 143, 0.15);
  display: block;
}

.profile-name {
  font-family: var(--pop-font-heading);
  font-size: var(--pop-font-size-2xl);
  background: var(--pop-gradient-main);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0 0 0.4rem;
  line-height: 1.4;
}

.profile-name-en {
  font-family: var(--pop-font-accent);
  font-size: var(--pop-font-size-sm);
  color: var(--pop-text-light);
  margin: -0.2rem 0 0.4rem;
  line-height: 1.4;
  letter-spacing: 0.03em;
}

.profile-title {
  font-family: var(--pop-font-accent);
  font-size: var(--pop-font-size-sm);
  color: var(--pop-text-light);
  margin: 0;
  line-height: 1.6;
}

/* ========== Right panel ========== */
.profile-right {
  display: flex;
  flex-direction: column;
  opacity: 0;
  transform: translateY(30px);
  transition: all 700ms cubic-bezier(0.22, 1, 0.36, 1);
}

.profile-right.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Slot content styling via :deep() */
.profile-right :deep(h3) {
  font-family: var(--pop-font-heading);
  font-size: var(--pop-font-size-lg);
  color: var(--pop-text);
  border-left: 4px solid #A8C5B8;
  padding-left: 0.75rem;
  margin-top: 0;
  margin-bottom: 0.6rem;
  line-height: 1.5;
}

.profile-right :deep(h3:not(:first-child)) {
  margin-top: 1.2rem;
}

.profile-right :deep(p) {
  font-family: var(--pop-font-body);
  font-size: var(--pop-font-size-base);
  color: var(--pop-text-light);
  line-height: 1.8;
  margin: 0 0 0.5rem;
}

.profile-right :deep(ul) {
  list-style: none;
  padding-left: 1.2rem;
  margin: 0 0 0.5rem;
}

.profile-right :deep(ul li) {
  font-family: var(--pop-font-body);
  font-size: var(--pop-font-size-base);
  color: var(--pop-text-light);
  line-height: 1.8;
  position: relative;
  padding-left: 0.2rem;
}

.profile-right :deep(ul li::before) {
  content: '';
  position: absolute;
  left: -1rem;
  top: 0.65em;
  width: 7px;
  height: 7px;
  background: #D4918F;
  border-radius: 50%;
}

.profile-right :deep(ol) {
  padding-left: 1.4rem;
  margin: 0 0 0.5rem;
}

.profile-right :deep(ol li) {
  font-family: var(--pop-font-body);
  font-size: var(--pop-font-size-base);
  color: var(--pop-text-light);
  line-height: 1.8;
}

.profile-right :deep(ol li::marker) {
  color: #D4918F;
  font-weight: 600;
}

.profile-right :deep(a) {
  color: #D4918F;
  text-decoration: none;
  border-bottom: 1px dashed rgba(212, 145, 143, 0.4);
  transition: border-color 200ms ease;
}

.profile-right :deep(a:hover) {
  border-bottom-color: #D4918F;
}

.profile-right :deep(strong) {
  color: var(--pop-text);
  font-weight: 600;
}

.profile-right :deep(code) {
  background: rgba(168, 197, 184, 0.15);
  color: var(--pop-text);
  padding: 0.1em 0.4em;
  border-radius: 4px;
  font-size: 0.9em;
}

/* ========== Hobby bubble ========== */
.profile-right :deep(.hobby-bubble) {
  display: inline-block;
  position: relative;
  background: rgba(168, 197, 184, 0.13);
  border: 1px solid rgba(168, 197, 184, 0.3);
  border-radius: 16px;
  padding: 0.3rem 0.9rem;
  margin-top: 0.6rem;
  font-size: 0.75rem;
  color: var(--pop-text-light);
  line-height: 1.5;
  width: fit-content;
  max-width: 200px;
}

.profile-right :deep(.hobby-bubble)::before {
  content: '';
  position: absolute;
  top: -6px;
  left: 18px;
  width: 10px;
  height: 10px;
  background: rgba(168, 197, 184, 0.13);
  border-left: 1px solid rgba(168, 197, 184, 0.3);
  border-top: 1px solid rgba(168, 197, 184, 0.3);
  transform: rotate(45deg);
}

/* ========== Bottom bar (banner + QR code) ========== */
.profile-bottom-bar {
  position: absolute;
  bottom: 1.5rem;
  right: 1.8rem;
  display: flex;
  align-items: flex-end;
  gap: 1rem;
  z-index: 2;
  opacity: 0;
  transform: translateY(15px);
  transition: all 800ms cubic-bezier(0.22, 1, 0.36, 1) 400ms;
}

.profile-bottom-bar.visible {
  opacity: 1;
  transform: translateY(0);
}

/* ========== Banner (left of QR code) ========== */
.profile-banner {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.profile-banner-img {
  height: 150px;
  width: auto;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(168, 197, 184, 0.25);
  object-fit: contain;
}

.profile-banner-label {
  font-family: var(--pop-font-accent);
  font-size: 0.6rem;
  color: var(--pop-text-light);
  margin-top: 0.3rem;
  letter-spacing: 0.05em;
  opacity: 0.7;
}

/* ========== QR code ========== */
.profile-qrcode {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.profile-qrcode-img {
  width: 120px;
  height: 120px;
  border-radius: 12px;
  background: white;
  padding: 5px;
  box-shadow: 0 2px 12px rgba(168, 197, 184, 0.25);
}

.profile-qrcode-label {
  font-family: var(--pop-font-accent);
  font-size: 0.6rem;
  color: var(--pop-text-light);
  margin-top: 0.3rem;
  letter-spacing: 0.05em;
  opacity: 0.7;
}
</style>
