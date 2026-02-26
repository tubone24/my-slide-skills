<template>
  <div class="slidev-layout center-layout">
    <div class="center-content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.center-layout {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.center-content {
  max-width: 720px;
}
</style>
