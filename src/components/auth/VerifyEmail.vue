<template>
  <div class="verify-email">
    <div class="verify-email-content">
      <h2>Check Your Email</h2>
      <LoadingSpinner />
      <p class="instructions">
        We've sent a verification link to <strong>{{ email }}</strong>
      </p>
      <p class="sub-text">
        Click the link in the email to complete your registration.
        The link will expire in 24 hours.
      </p>
      <div class="actions">
        <button class="resend-btn" @click="resendEmail" :disabled="isResending">
          {{ isResending ? 'Sending...' : 'Resend Email' }}
        </button>
        <button class="back-btn" @click="router.push('/signup')">
          Use Different Email
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { supabase } from '../../lib/supabaseClient'
import LoadingSpinner from '../common/LoadingSpinner.vue'

const router = useRouter()
const isResending = ref(false)
const email = ref(localStorage.getItem('pendingEmail') || '')

const resendEmail = async () => {
  if (!email.value) {
    router.push('/signup')
    return
  }

  isResending.value = true
  try {
    const { error } = await supabase.auth.signInWithOtp({
      email: email.value,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback`
      }
    })
    if (error) throw error
    alert('Verification email resent successfully!')
  } catch (error) {
    console.error('Error resending verification email:', error)
    alert('Failed to resend verification email. Please try again.')
  } finally {
    isResending.value = false
  }
}
</script>

<style scoped>
.verify-email {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 2rem;
  background-color: #f8f9fa;
}

.verify-email-content {
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
  text-align: center;
}

h2 {
  color: #2d3748;
  margin-bottom: 1.5rem;
}

.instructions {
  margin: 1.5rem 0;
  color: #4a5568;
  font-size: 1.1rem;
}

.sub-text {
  color: #718096;
  margin-bottom: 2rem;
  font-size: 0.9rem;
  line-height: 1.5;
}

.actions {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

button {
  width: 100%;
  padding: 0.75rem;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s;
}

.resend-btn {
  background-color: #4a5568;
  color: white;
  border: none;
}

.resend-btn:hover:not(:disabled) {
  background-color: #2d3748;
}

.resend-btn:disabled {
  background-color: #a0aec0;
  cursor: not-allowed;
}

.back-btn {
  background-color: transparent;
  border: 1px solid #4a5568;
  color: #4a5568;
}

.back-btn:hover {
  background-color: #f7fafc;
}
</style>
