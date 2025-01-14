<script setup lang="ts">
import SideNavigation from './SideNavigation.vue'
import BaseContainer from './BaseContainer.vue'
import BreadcrumbNavigation from '@/components/navigation/BreadcrumbNavigation.vue'
</script>

<template>
  <div class="layout">
    <SideNavigation />
    <div class="layout__content">
      <BaseContainer>
        <BreadcrumbNavigation />
        <router-view v-slot="{ Component }">
          <component :is="Component" />
        </router-view>
      </BaseContainer>
    </div>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  min-height: calc(100vh - 60px); /* Subtract main nav height */
}

.layout__content {
  flex: 1;
  margin-left: 240px; /* Width of expanded sidebar */
  transition: margin-left 0.3s ease;
}

/* Adjust content margin when sidebar is collapsed */
:deep(.sidebar--collapsed) + .layout__content {
  margin-left: 60px;
}
</style>
