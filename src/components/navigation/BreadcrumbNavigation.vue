<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

interface Breadcrumb {
  name: string
  path: string
  active: boolean
}

const breadcrumbs = computed<Breadcrumb[]>(() => {
  const pathArray = route.path.split('/').filter(Boolean)
  return pathArray.map((segment, index) => {
    const path = `/${pathArray.slice(0, index + 1).join('/')}`
    const matchedRoute = router.resolve(path).matched[0]
    const name = matchedRoute?.name?.toString() || segment

    // Capitalize and format the name
    const formattedName = name.charAt(0).toUpperCase() + name.slice(1).replace(/([A-Z])/g, ' $1')

    return {
      name: formattedName,
      path,
      active: index === pathArray.length - 1
    }
  })
})
</script>

<template>
  <nav aria-label="Breadcrumb" class="breadcrumb">
    <ol class="breadcrumb__list">
      <li class="breadcrumb__item">
        <router-link to="/" class="breadcrumb__link">Home</router-link>
      </li>
      <li v-for="crumb in breadcrumbs" :key="crumb.path" class="breadcrumb__item">
        <span class="breadcrumb__separator">/</span>
        <router-link
          v-if="!crumb.active"
          :to="crumb.path"
          class="breadcrumb__link"
        >
          {{ crumb.name }}
        </router-link>
        <span v-else class="breadcrumb__current">{{ crumb.name }}</span>
      </li>
    </ol>
  </nav>
</template>

<style scoped>
.breadcrumb {
  padding: 0.75rem 0;
  background-color: transparent;
}

.breadcrumb__list {
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
  list-style: none;
}

.breadcrumb__item {
  display: flex;
  align-items: center;
  color: #6b7280;
  font-size: 0.875rem;
}

.breadcrumb__separator {
  margin: 0 0.5rem;
  color: #9ca3af;
}

.breadcrumb__link {
  color: #2563eb;
  text-decoration: none;
  transition: color 0.2s;
}

.breadcrumb__link:hover {
  color: #1d4ed8;
  text-decoration: underline;
}

.breadcrumb__current {
  color: #4b5563;
  font-weight: 500;
}

@media (max-width: 640px) {
  .breadcrumb {
    padding: 0.5rem 0;
  }

  .breadcrumb__item {
    font-size: 0.75rem;
  }

  .breadcrumb__separator {
    margin: 0 0.25rem;
  }
}
</style>
