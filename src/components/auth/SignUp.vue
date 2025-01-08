<template>
  <div class="auth-container">
    <div class="auth-left">
      <h1 class="brand">Ranking of Legends</h1>
      <!-- Placeholder for decorative images -->
      <div class="image-grid">
        <div class="image-placeholder"></div>
        <div class="image-placeholder"></div>
        <div class="image-placeholder"></div>
        <div class="image-placeholder"></div>
      </div>
    </div>

    <div class="auth-right">
      <div class="auth-form">
        <div class="welcome-message">
          <img src="@/assets/icons/chat.svg" alt="Welcome" class="chat-icon">
          <h2>Nice to see you!</h2>
        </div>

        <!-- Social Sign Up Buttons -->
        <button class="social-btn google" @click="signUpWithGoogle">
          <img src="@/assets/icons/google.svg" alt="Google">
          Sign up with Google
        </button>

        <button class="social-btn facebook" @click="signUpWithFacebook">
          <img src="@/assets/icons/facebook.svg" alt="Facebook">
          Sign up with Facebook
        </button>

        <button class="social-btn microsoft" @click="signUpWithMicrosoft">
          <img src="@/assets/icons/microsoft.svg" alt="Microsoft">
          Sign up with Microsoft
        </button>

        <div class="divider">
          <span>OR</span>
        </div>

        <!-- Email Sign Up Form -->
        <form @submit.prevent="signUpWithEmail" class="email-form">
          <h3>Sign up with your email</h3>
          <input
            type="email"
            v-model="email"
            placeholder="email@gmail.com"
            required
          >
          <div class="terms">
            By continuing, you agree to our
            <a href="/terms" class="link">Terms & Conditions</a>
            and
            <a href="/privacy" class="link">Privacy Policy</a>
          </div>
          <button type="submit" class="submit-btn">Continue</button>
        </form>

        <div class="sign-in-prompt">
          Existing member? <a href="/signin" class="link">Sign in</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { supabase } from '@/lib/supabaseClient'

const router = useRouter()
const email = ref('')

const signUpWithGoogle = async () => {
  try {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/auth/callback`
      }
    })
    if (error) throw error
  } catch (error) {
    console.error('Error signing up with Google:', error)
  }
}

const signUpWithFacebook = async () => {
  try {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'facebook',
      options: {
        redirectTo: `${window.location.origin}/auth/callback`
      }
    })
    if (error) throw error
  } catch (error) {
    console.error('Error signing up with Facebook:', error)
  }
}

const signUpWithMicrosoft = async () => {
  try {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'azure',
      options: {
        redirectTo: `${window.location.origin}/auth/callback`
      }
    })
    if (error) throw error
  } catch (error) {
    console.error('Error signing up with Microsoft:', error)
  }
}

const signUpWithEmail = async () => {
  try {
    const { data, error } = await supabase.auth.signInWithOtp({
      email: email.value,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback`
      }
    })
    if (error) throw error
    // Show success message or redirect
    router.push('/verify-email')
  } catch (error) {
    console.error('Error signing up with email:', error)
  }
}
</script>

<style scoped>
.auth-container {
  display: flex;
  min-height: 100vh;
}

.auth-left {
  flex: 1;
  background-color: #f8f9fa;
  padding: 2rem;
  display: flex;
  flex-direction: column;
}

.brand {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
}

.image-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  flex-grow: 1;
}

.image-placeholder {
  background-color: #e9ecef;
  border-radius: 8px;
  width: 100%;
  padding-bottom: 100%;
}

.auth-right {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.auth-form {
  width: 100%;
  max-width: 400px;
}

.welcome-message {
  text-align: center;
  margin-bottom: 2rem;
}

.chat-icon {
  width: 48px;
  height: 48px;
  margin-bottom: 1rem;
}

.social-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #dee2e6;
  border-radius: 8px;
  background: white;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;
}

.social-btn img {
  width: 24px;
  height: 24px;
  margin-right: 0.5rem;
}

.social-btn:hover {
  background-color: #f8f9fa;
}

.divider {
  text-align: center;
  margin: 1.5rem 0;
  position: relative;
}

.divider::before,
.divider::after {
  content: '';
  position: absolute;
  top: 50%;
  width: 45%;
  height: 1px;
  background-color: #dee2e6;
}

.divider::before {
  left: 0;
}

.divider::after {
  right: 0;
}

.divider span {
  background-color: white;
  padding: 0 1rem;
  color: #6c757d;
}

.email-form {
  margin-top: 1.5rem;
}

.email-form h3 {
  margin-bottom: 1rem;
  font-weight: 500;
}

.email-form input {
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #dee2e6;
  border-radius: 8px;
  font-size: 1rem;
}

.terms {
  font-size: 0.875rem;
  color: #6c757d;
  margin-bottom: 1rem;
}

.submit-btn {
  width: 100%;
  padding: 0.75rem;
  background-color: #4a5568;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;
}

.submit-btn:hover {
  background-color: #2d3748;
}

.sign-in-prompt {
  text-align: center;
  margin-top: 1.5rem;
  font-size: 0.875rem;
}

.link {
  color: #4a5568;
  text-decoration: none;
  font-weight: 500;
}

.link:hover {
  text-decoration: underline;
}
</style>
