<script setup lang="ts">
import { ref } from 'vue'
import BaseInput from './BaseInput.vue'

interface InvitationForm {
  email: string
  role: string
  message: string
}

const form = ref<InvitationForm>({
  email: '',
  role: 'member',
  message: ''
})

const isLoading = ref(false)
const successMessage = ref('')
const errorMessage = ref('')

const roles = [
  { value: 'member', label: 'Team Member' },
  { value: 'admin', label: 'Team Admin' },
  { value: 'manager', label: 'Team Manager' }
]

const validateEmail = (value: string | number): string | null => {
  if (typeof value !== 'string') {
    return 'Email must be a string'
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(value)) {
    return 'Please enter a valid email address'
  }
  return null
}

const handleSubmit = async () => {
  try {
    errorMessage.value = ''
    successMessage.value = ''
    isLoading.value = true

    // TODO: Implement actual invitation logic with Supabase
    await new Promise(resolve => setTimeout(resolve, 1000)) // Simulated API call

    successMessage.value = `Invitation sent to ${form.value.email}`
    form.value = {
      email: '',
      role: 'member',
      message: ''
    }
  } catch (error) {
    errorMessage.value = 'Failed to send invitation. Please try again.'
    console.error('Invitation error:', error)
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <form @submit.prevent="handleSubmit" class="invitation-form">
    <h2 class="form-title">Invite Team Member</h2>

    <div v-if="successMessage" class="alert alert--success" role="alert">
      {{ successMessage }}
    </div>

    <div v-if="errorMessage" class="alert alert--error" role="alert">
      {{ errorMessage }}
    </div>

    <BaseInput
      v-model="form.email"
      label="Email Address"
      type="email"
      placeholder="colleague@example.com"
      required
      :customValidation="validateEmail"
    />

    <div class="form-group">
      <label class="form-label">
        Role
        <span class="required">*</span>
      </label>
      <select
        v-model="form.role"
        class="form-select"
        required
      >
        <option
          v-for="role in roles"
          :key="role.value"
          :value="role.value"
        >
          {{ role.label }}
        </option>
      </select>
    </div>

    <div class="form-group">
      <label class="form-label">Personal Message</label>
      <textarea
        v-model="form.message"
        class="form-textarea"
        placeholder="Add a personal message to your invitation..."
        rows="3"
      ></textarea>
    </div>

    <button
      type="submit"
      class="submit-button"
      :disabled="isLoading"
    >
      {{ isLoading ? 'Sending Invitation...' : 'Send Invitation' }}
    </button>
  </form>
</template>

<style scoped>
.invitation-form {
  max-width: 32rem;
  padding: 1.5rem;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.form-title {
  margin-bottom: 1.5rem;
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
}

.form-group {
  margin-bottom: 1rem;
}

.form-label {
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
}

.required {
  color: #dc2626;
  margin-left: 0.25rem;
}

.form-select {
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

.form-select:focus {
  outline: none;
  border-color: #2563eb;
  box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.2);
}

.form-textarea {
  width: 100%;
  padding: 0.625rem 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: #1f2937;
  background-color: #ffffff;
  transition: all 0.2s;
  resize: vertical;
}

.form-textarea:focus {
  outline: none;
  border-color: #2563eb;
  box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.2);
}

.submit-button {
  width: 100%;
  padding: 0.75rem 1rem;
  background-color: #2563eb;
  color: white;
  font-weight: 500;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: background-color 0.2s;
}

.submit-button:hover:not(:disabled) {
  background-color: #1d4ed8;
}

.submit-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.alert {
  margin-bottom: 1rem;
  padding: 0.75rem 1rem;
  border-radius: 0.375rem;
  font-size: 0.875rem;
}

.alert--success {
  background-color: #ecfdf5;
  color: #065f46;
  border: 1px solid #6ee7b7;
}

.alert--error {
  background-color: #fef2f2;
  color: #991b1b;
  border: 1px solid #fecaca;
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  .invitation-form {
    background-color: #1f2937;
  }

  .form-title {
    color: #f3f4f6;
  }

  .form-label {
    color: #d1d5db;
  }

  .form-select,
  .form-textarea {
    background-color: #374151;
    border-color: #4b5563;
    color: #f3f4f6;
  }

  .alert--success {
    background-color: #064e3b;
    color: #6ee7b7;
    border-color: #065f46;
  }

  .alert--error {
    background-color: #7f1d1d;
    color: #fecaca;
    border-color: #991b1b;
  }
}
</style>
