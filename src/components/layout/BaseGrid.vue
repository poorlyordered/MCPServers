<script setup lang="ts">
defineProps({
  cols: {
    type: [Number, String],
    default: 12,
    validator: (value: number | string) => {
      const num = Number(value)
      return !isNaN(num) && num > 0 && num <= 12
    }
  },
  gap: {
    type: String,
    default: 'md',
    validator: (value: string) => ['none', 'sm', 'md', 'lg'].includes(value)
  }
})
</script>

<template>
  <div
    :class="[
      'grid',
      `grid--cols-${cols}`,
      `grid--gap-${gap}`
    ]"
  >
    <slot></slot>
  </div>
</template>

<style scoped>
.grid {
  display: grid;
  width: 100%;
}

.grid--gap-none {
  gap: 0;
}

.grid--gap-sm {
  gap: 1rem;
}

.grid--gap-md {
  gap: 1.5rem;
}

.grid--gap-lg {
  gap: 2rem;
}

.grid--cols-1 { grid-template-columns: repeat(1, minmax(0, 1fr)); }
.grid--cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
.grid--cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
.grid--cols-4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }
.grid--cols-5 { grid-template-columns: repeat(5, minmax(0, 1fr)); }
.grid--cols-6 { grid-template-columns: repeat(6, minmax(0, 1fr)); }
.grid--cols-7 { grid-template-columns: repeat(7, minmax(0, 1fr)); }
.grid--cols-8 { grid-template-columns: repeat(8, minmax(0, 1fr)); }
.grid--cols-9 { grid-template-columns: repeat(9, minmax(0, 1fr)); }
.grid--cols-10 { grid-template-columns: repeat(10, minmax(0, 1fr)); }
.grid--cols-11 { grid-template-columns: repeat(11, minmax(0, 1fr)); }
.grid--cols-12 { grid-template-columns: repeat(12, minmax(0, 1fr)); }

@media (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
