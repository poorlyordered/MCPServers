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
import { useAuth } from '@/composables/useAuth'

const router = useRouter()
const { signIn } = useAuth()

onMounted(async () => {
  try {
    const { data: { session }, error } = await supabase.auth.getSession()

    if (error) throw error

    if (session) {
      signIn({
        id: session.user.id,
        email: session.user.email as string,
        name: session.user.user_metadata?.full_name,
        avatar: session.user.user_metadata?.avatar_url
      })
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
