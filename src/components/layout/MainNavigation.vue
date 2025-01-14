<script setup lang="ts">
import { useRouter } from 'vue-router'
import BaseContainer from './BaseContainer.vue'
import { useAuth } from '@/composables/useAuth'

const router = useRouter()
const { isAuthenticated, signOut } = useAuth()

const handleSignOut = () => {
  signOut()
  router.push('/')
}
</script>

<template>
  <nav class="nav">
    <BaseContainer class="nav__container">
      <div class="nav__content">
        <div class="nav__logo">
          <router-link to="/" class="nav__logo-link">
            <img src="@/assets/fulllogo_transparent_nobuffer.png" alt="Logo" class="nav__logo-image" />
          </router-link>
        </div>

        <div class="nav__links">
          <router-link to="/" class="nav__link" active-class="nav__link--active">Home</router-link>
          <router-link to="/about" class="nav__link" active-class="nav__link--active">About</router-link>
          <template v-if="isAuthenticated">
            <router-link to="/dashboard" class="nav__link" active-class="nav__link--active">Dashboard</router-link>
            <button @click="handleSignOut" class="nav__link nav__button">Sign Out</button>
          </template>
          <template v-else>
            <router-link to="/signup" class="nav__link nav__link--primary">Sign Up</router-link>
          </template>
        </div>
      </div>
    </BaseContainer>
  </nav>
</template>

<style scoped>
.nav {
  background-color: #ffffff;
  border-bottom: 1px solid #e5e7eb;
  position: sticky;
  top: 0;
  z-index: 50;
}

.nav__container {
  padding-top: 0.75rem !important;
  padding-bottom: 0.75rem !important;
}

.nav__content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav__logo {
  flex-shrink: 0;
}

.nav__logo-image {
  height: 2.5rem;
  width: auto;
}

.nav__links {
  display: flex;
  gap: 1.5rem;
  align-items: center;
}

.nav__link {
  text-decoration: none;
  color: #4b5563;
  font-weight: 500;
  padding: 0.5rem 0.75rem;
  border-radius: 0.375rem;
  transition: all 0.2s;
}

.nav__link:hover {
  color: #1f2937;
  background-color: #f3f4f6;
}

.nav__link--active {
  color: #1f2937;
  background-color: #f3f4f6;
}

.nav__link--primary {
  background-color: #2563eb;
  color: white;
}

.nav__link--primary:hover {
  background-color: #1d4ed8;
  color: white;
}

.nav__button {
  border: none;
  background: none;
  cursor: pointer;
  font: inherit;
}

@media (max-width: 640px) {
  .nav__logo-image {
    height: 2rem;
  }

  .nav__links {
    gap: 0.75rem;
  }

  .nav__link {
    padding: 0.375rem 0.5rem;
    font-size: 0.875rem;
  }
}
</style>
