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
          <h2>Nice to see you!</h2>
        </div>

        <!-- Social Sign Up Buttons -->
        <button class="social-btn google" @click="signUpWithGoogle" :disabled="isLoading">
          Sign up with Google
        </button>

        <button class="social-btn facebook" @click="signUpWithFacebook" :disabled="isLoading">
          Sign up with Facebook
        </button>

        <button class="social-btn microsoft" @click="signUpWithMicrosoft" :disabled="isLoading">
          Sign up with Microsoft
        </button>

        <button class="social-btn discord" @click="signUpWithDiscord" :disabled="isLoading">
          Sign up with Discord
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
            :disabled="isLoading"
          >
          <div class="terms">
            By continuing, you agree to our
            <a href="/terms" class="link">Terms & Conditions</a>
            and
            <a href="/privacy" class="link">Privacy Policy</a>
          </div>
          <button type="submit" class="submit-btn" :disabled="isLoading">
            {{ isLoading ? 'Sending...' : 'Continue' }}
          </button>
        </form>

        <div class="sign-in-prompt">
          Existing member? <a href="/signin" class="link">Sign in</a>
        </div>

        <LoadingSpinner v-if="isLoading" message="Please wait..." />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { supabase, type Session, type Provider } from '@/lib/supabaseClient'
import LoadingSpinner from '@/components/common/LoadingSpinner.vue'
import { useAuth } from '@/composables/useAuth'

const router = useRouter()
const { signIn } = useAuth()
const email = ref('')
const isLoading = ref(false)

const handleAuthSuccess = (session: Session) => {
  signIn({
    id: session.user.id,
    email: session.user.email as string,
    name: session.user.user_metadata?.full_name,
    avatar: session.user.user_metadata?.avatar_url
  })
  router.push('/create-profile')
}

const signUpWithProvider = async (provider: Provider) => {
  isLoading.value = true
  try {
    const { error } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
        scopes: provider === 'discord' ? 'identify email' : undefined
      }
    })
    if (error) throw error
    // The session will be available after the OAuth redirect
  } catch (error) {
    console.error(`Error signing up with ${provider}:`, error)
    alert(`Failed to sign up with ${provider}. Please try again.`)
  } finally {
    isLoading.value = false
  }
}

const signUpWithGoogle = () => signUpWithProvider('google')
const signUpWithFacebook = () => signUpWithProvider('facebook')
const signUpWithMicrosoft = () => signUpWithProvider('azure')
const signUpWithDiscord = () => signUpWithProvider('discord')

const signUpWithEmail = async () => {
  isLoading.value = true
  try {
    const { data, error } = await supabase.auth.signInWithOtp({
      email: email.value,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback`
      }
    })
    if (error) throw error
    if (data?.session) {
      handleAuthSuccess(data.session)
    } else {
      localStorage.setItem('pendingEmail', email.value)
      router.push('/verify-email')
    }
  } catch (error) {
    console.error('Error signing up with email:', error)
    alert('Failed to send verification email. Please try again.')
  } finally {
    isLoading.value = false
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
  position: relative;
}

.welcome-message {
  text-align: center;
  margin-bottom: 2rem;
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

.social-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.social-btn:hover:not(:disabled) {
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

.email-form input:disabled {
  background-color: #f8f9fa;
  cursor: not-allowed;
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

.submit-btn:hover:not(:disabled) {
  background-color: #2d3748;
}

.submit-btn:disabled {
  background-color: #a0aec0;
  cursor: not-allowed;
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

.google { background-color: #4285f4; color: white; }
.facebook { background-color: #3b5998; color: white; }
.microsoft { background-color: #2f2f2f; color: white; }
.discord { background-color: #7289da; color: white; }

.social-btn:hover:not(:disabled) {
  opacity: 0.9;
}
</style>
