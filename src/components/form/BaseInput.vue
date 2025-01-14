<script setup lang="ts">
import { computed, ref, watch } from 'vue'

interface Props {
  modelValue: string | number
  label?: string
  type?: string
  placeholder?: string
  required?: boolean
  pattern?: string
  minLength?: number
  maxLength?: number
  min?: number
  max?: number
  validateOnBlur?: boolean
  customValidation?: (value: string | number) => string | null
  name?: string
  disabled?: boolean
  error?: string
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  required: false,
  validateOnBlur: true,
  disabled: false
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number): void
  (e: 'blur'): void
  (e: 'focus'): void
}>()

const touched = ref(false)
const dirty = ref(false)
const focused = ref(false)

const inputId = `input-${Math.random().toString(36).substring(2, 9)}`

const validate = (value: string | number): string | null => {
  if (props.required && !value && value !== 0) {
    return 'This field is required'
  }

  if (props.pattern && typeof value === 'string') {
    const regex = new RegExp(props.pattern)
    if (!regex.test(value)) {
      return 'Please enter a valid value'
    }
  }

  if (props.minLength && typeof value === 'string' && value.length < props.minLength) {
    return `Minimum length is ${props.minLength} characters`
  }

  if (props.maxLength && typeof value === 'string' && value.length > props.maxLength) {
    return `Maximum length is ${props.maxLength} characters`
  }

  if (props.min !== undefined && typeof value === 'number' && value < props.min) {
    return `Minimum value is ${props.min}`
  }

  if (props.max !== undefined && typeof value === 'number' && value > props.max) {
    return `Maximum value is ${props.max}`
  }

  if (props.customValidation) {
    return props.customValidation(value)
  }

  return null
}

const validationError = computed(() => {
  if (props.error) return props.error
  if (!touched.value && !dirty.value) return null
  if (props.validateOnBlur && !touched.value) return null
  return validate(props.modelValue)
})

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  const value = props.type === 'number' ? target.valueAsNumber : target.value
  dirty.value = true
  emit('update:modelValue', value)
}

const handleBlur = () => {
  touched.value = true
  focused.value = false
  emit('blur')
}

const handleFocus = () => {
  focused.value = true
  emit('focus')
}

const inputClasses = computed(() => ({
  'base-input': true,
  'base-input--error': !!validationError.value,
  'base-input--focused': focused.value,
  'base-input--disabled': props.disabled
}))

watch(() => props.modelValue, () => {
  dirty.value = true
})
</script>

<template>
  <div class="input-wrapper">
    <label v-if="label" :for="inputId" class="input-label">
      {{ label }}
      <span v-if="required" class="input-required">*</span>
    </label>

    <input
      :id="inputId"
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      :required="required"
      :pattern="pattern"
      :minlength="minLength"
      :maxlength="maxLength"
      :min="min"
      :max="max"
      :name="name"
      :disabled="disabled"
      :class="inputClasses"
      @input="handleInput"
      @blur="handleBlur"
      @focus="handleFocus"
    >

    <div v-if="validationError" class="input-error" role="alert">
      {{ validationError }}
    </div>
  </div>
</template>

<style scoped>
.input-wrapper {
  margin-bottom: 1rem;
}

.input-label {
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
}

.input-required {
  color: #dc2626;
  margin-left: 0.25rem;
}

.base-input {
  width: 100%;
  padding: 0.625rem 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: #1f2937;
  background-color: #ffffff;
  transition: all 0.2s;
}

.base-input:hover:not(:disabled) {
  border-color: #9ca3af;
}

.base-input:focus {
  outline: none;
  border-color: #2563eb;
  box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.2);
}

.base-input--error {
  border-color: #dc2626;
}

.base-input--error:focus {
  border-color: #dc2626;
  box-shadow: 0 0 0 2px rgba(220, 38, 38, 0.2);
}

.base-input--disabled {
  background-color: #f3f4f6;
  cursor: not-allowed;
}

.input-error {
  margin-top: 0.5rem;
  font-size: 0.75rem;
  color: #dc2626;
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  .input-label {
    color: #d1d5db;
  }

  .base-input {
    background-color: #1f2937;
    border-color: #4b5563;
    color: #f3f4f6;
  }

  .base-input:hover:not(:disabled) {
    border-color: #6b7280;
  }

  .base-input--disabled {
    background-color: #374151;
  }
}
</style>
