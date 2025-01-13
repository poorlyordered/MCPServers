<script setup lang="ts">
defineProps({
  fluid: {
    type: Boolean,
    default: false
  },
  narrow: {
    type: Boolean,
    default: false
  },
  padding: {
    type: String,
    default: 'md',
    validator: (value: string) => ['none', 'sm', 'md', 'lg'].includes(value)
  }
})
</script>

<template>
  <div
    :class="[
      'container',
      {
        'container--fluid': fluid,
        'container--narrow': narrow,
        [`container--padding-${padding}`]: padding
      }
    ]"
  >
    <slot></slot>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  max-width: 1280px;
}

.container--fluid {
  max-width: none;
}

.container--narrow {
  max-width: 768px;
}

.container--padding-none {
  padding: 0;
}

.container--padding-sm {
  padding: 1rem;
}

.container--padding-md {
  padding: 1.5rem;
}

.container--padding-lg {
  padding: 2rem;
}

@media (min-width: 640px) {
  .container {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
}
</style>
