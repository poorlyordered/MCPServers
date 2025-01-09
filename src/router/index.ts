import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/home',
      name: 'homeRedirect',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../components/auth/SignUp.vue'),
    },
    {
      path: '/auth/callback',
      name: 'authCallback',
      component: () => import('../components/auth/AuthCallback.vue'),
    },
    {
      path: '/verify-email',
      name: 'verifyEmail',
      component: () => import('../components/auth/VerifyEmail.vue'),
    },
    {
      path: '/create-profile',
      name: 'createProfile',
      component: () => import('../components/auth/BasicProfile.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/verify-riot-account',
      name: 'verifyRiotAccount',
      component: () => import('../components/auth/RiotVerification.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/DashboardView.vue'),
      meta: { requiresAuth: true },
    },
  ],
})

// Navigation guard to check authentication
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const isAuthenticated = !!localStorage.getItem('user') // Basic auth check, replace with your auth logic

  if (requiresAuth && !isAuthenticated) {
    next('/signup')
  } else {
    next()
  }
})

export default router
