<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isExpanded = ref(true)

const navigationItems = [
  {
    label: 'Overview',
    path: '/dashboard',
    icon: '📊'
  },
  {
    label: 'Teams',
    path: '/teams',
    icon: '👥'
  },
  {
    label: 'Events',
    path: '/events',
    icon: '🎮'
  },
  {
    label: 'Rankings',
    path: '/rankings',
    icon: '🏆'
  },
  {
    label: 'Settings',
    path: '/settings',
    icon: '⚙️'
  }
]

const toggleSidebar = () => {
  isExpanded.value = !isExpanded.value
}
</script>

<template>
  <aside :class="['sidebar', { 'sidebar--collapsed': !isExpanded }]">
    <button class="sidebar__toggle" @click="toggleSidebar">
      {{ isExpanded ? '◀' : '▶' }}
    </button>

    <nav class="sidebar__nav">
      <ul class="sidebar__list">
        <li v-for="item in navigationItems" :key="item.path" class="sidebar__item">
          <router-link
            :to="item.path"
            class="sidebar__link"
            :class="{ 'sidebar__link--active': route.path === item.path }"
          >
            <span class="sidebar__icon">{{ item.icon }}</span>
            <span v-if="isExpanded" class="sidebar__label">{{ item.label }}</span>
          </router-link>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<style scoped>
.sidebar {
  background-color: #1f2937;
  color: #f3f4f6;
  width: 240px;
  height: 100%;
  position: fixed;
  left: 0;
  top: 60px; /* Height of main navigation */
  transition: width 0.3s ease;
  z-index: 40;
}

.sidebar--collapsed {
  width: 60px;
}

.sidebar__toggle {
  position: absolute;
  right: -12px;
  top: 20px;
  width: 24px;
  height: 24px;
  background: #2563eb;
  border: none;
  border-radius: 50%;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  z-index: 2;
}

.sidebar__nav {
  padding: 1rem;
}

.sidebar__list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar__item {
  margin-bottom: 0.5rem;
}

.sidebar__link {
  display: flex;
  align-items: center;
  padding: 0.75rem;
  text-decoration: none;
  color: #f3f4f6;
  border-radius: 0.375rem;
  transition: background-color 0.2s;
}

.sidebar__link:hover {
  background-color: #374151;
}

.sidebar__link--active {
  background-color: #2563eb;
}

.sidebar__icon {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
}

.sidebar__label {
  margin-left: 0.75rem;
  white-space: nowrap;
}
</style>
