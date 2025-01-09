<template>
  <div class="auth-callback">
    <LoadingSpinner message="Completing sign in..." />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { supabase } from '../../lib/supabaseClient'
import LoadingSpinner from '../common/LoadingSpinner.vue'

const router = useRouter()

onMounted(async () => {
  try {
    const { data: { session }, error } = await supabase.auth.getSession()

    if (error) throw error

    if (session) {
      localStorage.setItem('user', JSON.stringify(session))
      router.push('/create-profile')
    } else {
      router.push('/signup')
    }
  } catch (error) {
    console.error('Error in auth callback:', error)
    router.push('/signup')
  }
})
</script>

<style scoped>
.auth-callback {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  text-align: center;
}
</style>
