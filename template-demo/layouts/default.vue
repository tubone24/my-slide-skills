<template>
  <div class="slidev-layout default-layout">
    <slot />
  </div>
</template>

<style scoped>
.default-layout {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 2.5rem 3.5rem;
}
</style>
