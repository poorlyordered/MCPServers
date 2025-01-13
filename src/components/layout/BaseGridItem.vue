<script setup lang="ts">
defineProps({
  span: {
    type: [Number, String],
    default: 1,
    validator: (value: number | string) => {
      const num = Number(value)
      return !isNaN(num) && num > 0 && num <= 12
    }
  },
  fullWidth: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div
    :class="[
      'grid-item',
      `grid-item--span-${span}`,
      { 'grid-item--full-width': fullWidth }
    ]"
  >
    <slot></slot>
  </div>
</template>

<style scoped>
.grid-item {
  min-width: 0;
}

.grid-item--full-width {
  width: 100%;
}

.grid-item--span-1 { grid-column: span 1 / span 1; }
.grid-item--span-2 { grid-column: span 2 / span 2; }
.grid-item--span-3 { grid-column: span 3 / span 3; }
.grid-item--span-4 { grid-column: span 4 / span 4; }
.grid-item--span-5 { grid-column: span 5 / span 5; }
.grid-item--span-6 { grid-column: span 6 / span 6; }
.grid-item--span-7 { grid-column: span 7 / span 7; }
.grid-item--span-8 { grid-column: span 8 / span 8; }
.grid-item--span-9 { grid-column: span 9 / span 9; }
.grid-item--span-10 { grid-column: span 10 / span 10; }
.grid-item--span-11 { grid-column: span 11 / span 11; }
.grid-item--span-12 { grid-column: span 12 / span 12; }

@media (max-width: 768px) {
  .grid-item {
    grid-column: 1 / -1;
  }
}
</style>
