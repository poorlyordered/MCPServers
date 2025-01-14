import { ref } from 'vue'

interface UserData {
  id: string
  email: string
  name?: string
  avatar?: string
  preferences?: {
    theme?: 'light' | 'dark'
    notifications?: boolean
  }
}

const isAuthenticated = ref(false)

export function useAuth() {
  const checkAuth = () => {
    isAuthenticated.value = !!localStorage.getItem('user')
    return isAuthenticated.value
  }

  const signIn = (userData: UserData) => {
    localStorage.setItem('user', JSON.stringify(userData))
    isAuthenticated.value = true
  }

  const signOut = () => {
    localStorage.removeItem('user')
    isAuthenticated.value = false
  }

  // Initialize auth state
  checkAuth()

  return {
    isAuthenticated,
    checkAuth,
    signIn,
    signOut
  }
}
