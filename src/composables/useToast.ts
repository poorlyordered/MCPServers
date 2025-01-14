import { inject } from 'vue'

export interface ToastApi {
  success: (message: string, duration?: number) => void
  error: (message: string, duration?: number) => void
  warning: (message: string, duration?: number) => void
  info: (message: string, duration?: number) => void
}

const ToastSymbol = Symbol('Toast')

export function useToast(): ToastApi {
  const toast = inject<ToastApi>(ToastSymbol)

  if (!toast) {
    throw new Error(
      'Toast API not found. Make sure ToastManager is provided in your app.'
    )
  }

  return toast
}

export { ToastSymbol }
