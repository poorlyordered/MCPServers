<script setup lang="ts">
import { ref } from 'vue'
import ToastNotification, { type ToastType } from './ToastNotification.vue'

interface Toast {
  id: number
  type: ToastType
  message: string
  duration?: number
  autoClose?: boolean
}

const toasts = ref<Toast[]>([])
let nextId = 0

const addToast = (
  message: string,
  type: ToastType = 'info',
  duration = 5000,
  autoClose = true
) => {
  const toast: Toast = {
    id: nextId++,
    type,
    message,
    duration,
    autoClose
  }
  toasts.value.push(toast)
}

const removeToast = (id: number) => {
  const index = toasts.value.findIndex(toast => toast.id === id)
  if (index !== -1) {
    toasts.value.splice(index, 1)
  }
}

// Expose methods to global app instance
defineExpose({
  success: (message: string, duration?: number) => addToast(message, 'success', duration),
  error: (message: string, duration?: number) => addToast(message, 'error', duration),
  warning: (message: string, duration?: number) => addToast(message, 'warning', duration),
  info: (message: string, duration?: number) => addToast(message, 'info', duration)
})
</script>

<template>
  <div class="toast-container">
    <TransitionGroup name="toast-list">
      <ToastNotification
        v-for="toast in toasts"
        :key="toast.id"
        :type="toast.type"
        :message="toast.message"
        :duration="toast.duration"
        :auto-close="toast.autoClose"
        @close="removeToast(toast.id)"
      />
    </TransitionGroup>
  </div>
</template>

<style scoped>
.toast-container {
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  z-index: 50;
}

/* Toast list animations */
.toast-list-enter-active,
.toast-list-leave-active {
  transition: all 0.3s ease;
}

.toast-list-enter-from {
  opacity: 0;
  transform: translateX(100%);
}

.toast-list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

/* Ensure proper stacking of toasts */
.toast-list-move {
  transition: transform 0.3s ease;
}
</style>
