<template>
  <div class="loading-container">
    <div class="loading-spinner"></div>
    <div v-if="message" class="loading-message">{{ message }}</div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  message?: string
}>()
</script>

<style scoped>
.loading-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.loading-spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #4a5568;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

.loading-message {
  margin-top: 1rem;
  color: #4a5568;
  font-size: 1rem;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
