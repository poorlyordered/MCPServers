import { createRouter, createWebHistory } from 'vue-router'
import type { RouteComponent } from 'vue-router'

// For debugging
const loadComponent = async (
  importFn: () => Promise<{ default: RouteComponent }>,
  name?: string
) => {
  try {
    console.log(`Loading component${name ? `: ${name}` : ''}`)
    const component = await importFn()
    console.log(`Successfully loaded component${name ? `: ${name}` : ''}`)
    return component
  } catch (error) {
    console.error(`Failed to load component${name ? ` ${name}` : ''}:`, error)
    throw error
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/layout-demo',
      name: 'layoutDemo',
      component: () => loadComponent(() => import('@/components/layout/LayoutDemo.vue'), 'LayoutDemo')
    },
    {
      path: '/',
      name: 'home',
      component: () => loadComponent(() => import('@/views/HomeView.vue'), 'HomeView'),
    },
    {
      path: '/home',
      name: 'homeRedirect',
      component: () => loadComponent(() => import('@/views/HomeView.vue'), 'HomeView'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => loadComponent(() => import('@/views/AboutView.vue'), 'AboutView'),
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => loadComponent(() => import('@/components/auth/SignUp.vue'), 'SignUp'),
    },
    {
      path: '/auth/callback',
      name: 'authCallback',
      component: () => loadComponent(() => import('@/components/auth/AuthCallback.vue'), 'AuthCallback'),
    },
    {
      path: '/verify-email',
      name: 'verifyEmail',
      component: () => loadComponent(() => import('@/components/auth/VerifyEmail.vue'), 'VerifyEmail'),
    },
    {
      path: '/create-profile',
      name: 'createProfile',
      component: () => loadComponent(() => import('@/components/auth/BasicProfile.vue'), 'BasicProfile'),
      meta: { requiresAuth: true },
    },
    {
      path: '/verify-riot-account',
      name: 'verifyRiotAccount',
      component: () => loadComponent(() => import('@/components/auth/RiotVerification.vue'), 'RiotVerification'),
      meta: { requiresAuth: true },
    },
    // Authenticated routes with sidebar layout
    {
      path: '/dashboard',
      component: () => loadComponent(() => import('@/components/layout/AuthenticatedLayout.vue'), 'AuthenticatedLayout'),
      meta: { requiresAuth: true },
      children: [
        {
          path: '',
          name: 'dashboard',
          component: () => loadComponent(() => import('@/views/DashboardView.vue'), 'DashboardView'),
        }
      ]
    },
    {
      path: '/teams',
      component: () => loadComponent(() => import('@/components/layout/AuthenticatedLayout.vue'), 'AuthenticatedLayout'),
      meta: { requiresAuth: true },
      children: [
        {
          path: '',
          name: 'teams',
          component: () => loadComponent(() => import('@/views/TeamsView.vue'), 'TeamsView'),
        }
      ]
    },
    {
      path: '/events',
      component: () => loadComponent(() => import('@/components/layout/AuthenticatedLayout.vue'), 'AuthenticatedLayout'),
      meta: { requiresAuth: true },
      children: [
        {
          path: '',
          name: 'events',
          component: () => loadComponent(() => import('@/views/EventsView.vue'), 'EventsView'),
        }
      ]
    },
    {
      path: '/rankings',
      component: () => loadComponent(() => import('@/components/layout/AuthenticatedLayout.vue'), 'AuthenticatedLayout'),
      meta: { requiresAuth: true },
      children: [
        {
          path: '',
          name: 'rankings',
          component: () => loadComponent(() => import('@/views/RankingsView.vue'), 'RankingsView'),
        }
      ]
    },
    {
      path: '/settings',
      component: () => loadComponent(() => import('@/components/layout/AuthenticatedLayout.vue'), 'AuthenticatedLayout'),
      meta: { requiresAuth: true },
      children: [
        {
          path: '',
          name: 'settings',
          component: () => loadComponent(() => import('@/views/SettingsView.vue'), 'SettingsView'),
        }
      ]
    },
  ],
})

import { useAuth } from '@/composables/useAuth'

// Navigation guard to check authentication
router.beforeEach((to, from, next) => {
  const { checkAuth } = useAuth()
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const isAuthenticated = checkAuth()

  if (requiresAuth && !isAuthenticated) {
    next('/signup')
  } else {
    next()
  }
})

// Error handling
router.onError((error) => {
  console.error('Router error:', error)
})

export default router
