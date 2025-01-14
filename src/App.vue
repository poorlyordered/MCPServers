<script setup lang="ts">
import { RouterView } from 'vue-router'
import { provide, ref } from 'vue'
import MainNavigation from './components/layout/MainNavigation.vue'
import ToastManager from './components/feedback/ToastManager.vue'
import { ToastSymbol } from './composables/useToast'

const toastManagerRef = ref()

// Provide toast API to the entire app
provide(ToastSymbol, {
  success: (message: string, duration?: number) => toastManagerRef.value?.success(message, duration),
  error: (message: string, duration?: number) => toastManagerRef.value?.error(message, duration),
  warning: (message: string, duration?: number) => toastManagerRef.value?.warning(message, duration),
  info: (message: string, duration?: number) => toastManagerRef.value?.info(message, duration)
})
</script>

<template>
  <div class="app">
    <MainNavigation />
    <main class="main">
      <RouterView />
    </main>
    <ToastManager ref="toastManagerRef" />
  </div>
</template>

<style scoped>
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main {
  flex: 1;
  width: 100%;
}
</style>
