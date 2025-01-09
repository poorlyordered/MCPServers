<template>
  <div class="dashboard">
    <header class="dashboard-header">
      <h1>Welcome to Ranking of Legends</h1>
      <div class="user-info" v-if="user">
        <span>{{ user.email }}</span>
        <button @click="signOut" class="sign-out-btn">Sign Out</button>
      </div>
    </header>

    <div class="dashboard-content">
      <div class="welcome-message">
        <h2>Your Account is Ready!</h2>
        <p>You can now create or join a team, participate in tournaments, and more.</p>
      </div>

      <div class="action-cards">
        <div class="card">
          <h3>Create a Team</h3>
          <p>Start your own competitive team and recruit players.</p>
          <button class="action-btn" @click="router.push('/create-team')">Create Team</button>
        </div>

        <div class="card">
          <h3>Join a Team</h3>
          <p>Browse existing teams and submit applications.</p>
          <button class="action-btn" @click="router.push('/browse-teams')">Browse Teams</button>
        </div>

        <div class="card">
          <h3>Tournaments</h3>
          <p>View upcoming tournaments and register your team.</p>
          <button class="action-btn" @click="router.push('/tournaments')">View Tournaments</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { supabase, type User } from '../lib/supabaseClient'

const router = useRouter()
const user = ref<User | null>(null)

onMounted(async () => {
  const { data: { session } } = await supabase.auth.getSession()
  user.value = session?.user ?? null
})

const signOut = async () => {
  try {
    await supabase.auth.signOut()
    localStorage.removeItem('user')
    router.push('/signup')
  } catch (error) {
    console.error('Error signing out:', error)
  }
}
</script>

<style scoped>
.dashboard {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.dashboard-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e2e8f0;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.sign-out-btn {
  padding: 0.5rem 1rem;
  background-color: transparent;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  color: #4a5568;
  cursor: pointer;
  transition: all 0.2s;
}

.sign-out-btn:hover {
  background-color: #f7fafc;
}

.welcome-message {
  text-align: center;
  margin-bottom: 3rem;
}

.welcome-message h2 {
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.welcome-message p {
  color: #718096;
}

.action-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.card {
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.card h3 {
  color: #2d3748;
  margin-bottom: 1rem;
}

.card p {
  color: #718096;
  margin-bottom: 1.5rem;
}

.action-btn {
  padding: 0.75rem 1.5rem;
  background-color: #4a5568;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.action-btn:hover {
  background-color: #2d3748;
}
</style>
