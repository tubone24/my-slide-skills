<template>
  <div class="slidev-layout two-cols-layout">
    <div class="col-left">
      <slot name="default" />
    </div>
    <div class="col-right">
      <slot name="right" />
    </div>
  </div>
</template>

<style scoped>
.two-cols-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  padding: 2.5rem 3.5rem;
  align-items: start;
}

.col-left,
.col-right {
  display: flex;
  flex-direction: column;
}

.col-right {
  padding-left: 1rem;
  border-left: 3px solid var(--pop-pink-light);
}
</style>
