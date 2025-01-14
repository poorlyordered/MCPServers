<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

export type ToastType = 'success' | 'error' | 'info' | 'warning'

interface Props {
  type?: ToastType
  message: string
  duration?: number
  autoClose?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  type: 'info',
  duration: 5000,
  autoClose: true
})

const emit = defineEmits<{
  (e: 'close'): void
}>()

const isVisible = ref(true)
let timeoutId: number | null = null

const close = () => {
  isVisible.value = false
  emit('close')
}

const getIcon = (type: ToastType): string => {
  switch (type) {
    case 'success':
      return '✓'
    case 'error':
      return '✕'
    case 'warning':
      return '⚠'
    default:
      return 'ℹ'
  }
}

onMounted(() => {
  if (props.autoClose) {
    timeoutId = window.setTimeout(close, props.duration)
  }
})

onBeforeUnmount(() => {
  if (timeoutId) {
    clearTimeout(timeoutId)
  }
})
</script>

<template>
  <Transition name="toast">
    <div
      v-if="isVisible"
      :class="['toast', `toast--${type}`]"
      role="alert"
    >
      <div class="toast__icon">{{ getIcon(type) }}</div>
      <div class="toast__content">{{ message }}</div>
      <button
        type="button"
        class="toast__close"
        @click="close"
        aria-label="Close notification"
      >
        ✕
      </button>
    </div>
  </Transition>
</template>

<style scoped>
.toast {
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  display: flex;
  align-items: center;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: white;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  max-width: 24rem;
  z-index: 50;
}

.toast__icon {
  flex-shrink: 0;
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  margin-right: 0.75rem;
  font-size: 1rem;
}

.toast__content {
  flex: 1;
  font-size: 0.875rem;
  line-height: 1.25rem;
  padding-right: 0.5rem;
}

.toast__close {
  flex-shrink: 0;
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: none;
  border-radius: 9999px;
  color: currentColor;
  opacity: 0.5;
  cursor: pointer;
  transition: opacity 0.2s;
}

.toast__close:hover {
  opacity: 0.75;
}

/* Toast types */
.toast--success {
  background-color: #ecfdf5;
  color: #065f46;
}

.toast--success .toast__icon {
  background-color: #34d399;
  color: white;
}

.toast--error {
  background-color: #fef2f2;
  color: #991b1b;
}

.toast--error .toast__icon {
  background-color: #f87171;
  color: white;
}

.toast--warning {
  background-color: #fffbeb;
  color: #92400e;
}

.toast--warning .toast__icon {
  background-color: #fbbf24;
  color: white;
}

.toast--info {
  background-color: #eff6ff;
  color: #1e40af;
}

.toast--info .toast__icon {
  background-color: #60a5fa;
  color: white;
}

/* Toast animations */
.toast-enter-active,
.toast-leave-active {
  transition: all 0.3s ease;
}

.toast-enter-from {
  opacity: 0;
  transform: translateX(100%);
}

.toast-leave-to {
  opacity: 0;
  transform: translateY(100%);
}

/* Dark mode */
@media (prefers-color-scheme: dark) {
  .toast {
    background-color: #1f2937;
  }

  .toast--success {
    background-color: #064e3b;
    color: #6ee7b7;
  }

  .toast--error {
    background-color: #7f1d1d;
    color: #fecaca;
  }

  .toast--warning {
    background-color: #78350f;
    color: #fcd34d;
  }

  .toast--info {
    background-color: #1e3a8a;
    color: #93c5fd;
  }
}
</style>
