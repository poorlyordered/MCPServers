<script setup lang="ts">
import { ref } from 'vue'
import BaseContainer from './BaseContainer.vue'
import BaseGrid from './BaseGrid.vue'
import BaseGridItem from './BaseGridItem.vue'
import BaseModal from './BaseModal.vue'

const showModal = ref(false)
</script>

<template>
  <BaseContainer>
    <h1 class="demo-title">Layout Components Demo</h1>

    <!-- Grid System Demo -->
    <section class="demo-section">
      <h2>Grid System</h2>
      <BaseGrid cols="3" gap="md">
        <BaseGridItem v-for="i in 3" :key="i" class="demo-grid-item">
          Grid Item {{ i }}
        </BaseGridItem>
      </BaseGrid>

      <BaseGrid cols="12" gap="md" class="mt-4">
        <BaseGridItem :span="8" class="demo-grid-item">
          Span 8
        </BaseGridItem>
        <BaseGridItem :span="4" class="demo-grid-item">
          Span 4
        </BaseGridItem>
      </BaseGrid>
    </section>

    <!-- Container Variations Demo -->
    <section class="demo-section">
      <h2>Container Variations</h2>
      <BaseContainer fluid class="demo-container">
        Fluid Container
      </BaseContainer>
      <BaseContainer narrow class="demo-container mt-4">
        Narrow Container
      </BaseContainer>
    </section>

    <!-- Modal Demo -->
    <section class="demo-section">
      <h2>Modal System</h2>
      <button @click="showModal = true" class="demo-button">
        Open Modal
      </button>

      <BaseModal v-model="showModal" max-width="md">
        <div class="demo-modal-content">
          <h3>Modal Title</h3>
          <p>This is a demo modal with customizable width and built-in features like:</p>
          <ul>
            <li>Click outside to close</li>
            <li>Press ESC to close</li>
            <li>Smooth transitions</li>
            <li>Scrollable content</li>
          </ul>
          <button @click="showModal = false" class="demo-button mt-4">
            Close Modal
          </button>
        </div>
      </BaseModal>
    </section>
  </BaseContainer>
</template>

<style scoped>
.demo-title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
}

.demo-section {
  margin-bottom: 3rem;
}

.demo-section h2 {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.demo-grid-item {
  background-color: #e5e7eb;
  padding: 1rem;
  border-radius: 0.5rem;
  text-align: center;
}

.demo-container {
  background-color: #e5e7eb;
  padding: 1rem;
  border-radius: 0.5rem;
  text-align: center;
}

.demo-button {
  background-color: #3b82f6;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  border: none;
  cursor: pointer;
  font-weight: 500;
}

.demo-button:hover {
  background-color: #2563eb;
}

.demo-modal-content {
  padding: 1.5rem;
}

.demo-modal-content h3 {
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.demo-modal-content ul {
  list-style-type: disc;
  margin-left: 1.5rem;
  margin-top: 0.5rem;
}

.mt-4 {
  margin-top: 1rem;
}
</style>
