<script setup lang="ts">
import { ref, watch } from 'vue'
import BaseInput from './BaseInput.vue'

export type TextFilterValue = string | number
export type FilterValue = TextFilterValue | boolean | null

export interface BaseFilter {
  id: string
  label: string
  value: FilterValue
}

export interface TextFilter extends BaseFilter {
  type: 'text' | 'select' | 'date'
  value: TextFilterValue
  options?: { value: string; label: string }[]
}

export interface CheckboxFilter extends BaseFilter {
  type: 'checkbox'
  value: boolean
}

export type Filter = TextFilter | CheckboxFilter

interface Props {
  filters: Filter[]
  showSearch?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  showSearch: true
})

const emit = defineEmits<{
  (e: 'filter', filters: { [key: string]: FilterValue }): void
  (e: 'search', query: string): void
}>()

const searchQuery = ref('')
const activeFilters = ref<{ [key: string]: FilterValue }>({})

// Initialize activeFilters with default values
props.filters.forEach(filter => {
  activeFilters.value[filter.id] = filter.value
})

const handleSearch = () => {
  emit('search', searchQuery.value)
}

const handleFilterChange = () => {
  emit('filter', activeFilters.value)
}

// Watch for changes in filters and emit updates
watch(activeFilters, () => {
  handleFilterChange()
}, { deep: true })

const clearFilters = () => {
  props.filters.forEach(filter => {
    activeFilters.value[filter.id] = null
  })
  searchQuery.value = ''
  handleSearch()
  handleFilterChange()
}

const hasActiveFilters = () => {
  return Object.values(activeFilters.value).some(value => value !== null && value !== '') ||
         searchQuery.value !== ''
}
</script>

<template>
  <div class="search-filters">
    <!-- Search Bar -->
    <div v-if="showSearch" class="search-bar">
      <BaseInput
        v-model="searchQuery"
        placeholder="Search..."
        type="search"
        @input="handleSearch"
      >
        <template #append>
          <button
            type="button"
            class="search-button"
            @click="handleSearch"
          >
            Search
          </button>
        </template>
      </BaseInput>
    </div>

    <!-- Filters -->
    <div class="filters">
      <div
        v-for="filter in filters"
        :key="filter.id"
        class="filter-item"
      >
        <label :for="filter.id" class="filter-label">{{ filter.label }}</label>

        <!-- Select Filter -->
        <select
          v-if="filter.type === 'select'"
          :id="filter.id"
          v-model="activeFilters[filter.id]"
          class="filter-select"
        >
          <option value="">All</option>
          <option
            v-for="option in filter.options"
            :key="option.value"
            :value="option.value"
          >
            {{ option.label }}
          </option>
        </select>

        <!-- Date Filter -->
        <input
          v-else-if="filter.type === 'date'"
          :id="filter.id"
          type="date"
          v-model="activeFilters[filter.id]"
          class="filter-input"
        >

        <!-- Checkbox Filter -->
        <div
          v-else-if="filter.type === 'checkbox'"
          class="filter-checkbox"
        >
          <input
            :id="filter.id"
            type="checkbox"
            v-model="activeFilters[filter.id]"
          >
          <span class="checkbox-label">{{ filter.label }}</span>
        </div>

        <!-- Text Filter -->
        <BaseInput
          v-else
          :id="filter.id"
          v-model="(activeFilters[filter.id] as TextFilterValue)"
          :placeholder="`Filter by ${filter.label.toLowerCase()}`"
        />
      </div>

      <!-- Clear Filters Button -->
      <button
        v-if="hasActiveFilters()"
        type="button"
        class="clear-filters"
        @click="clearFilters"
      >
        Clear Filters
      </button>
    </div>
  </div>
</template>

<style scoped>
.search-filters {
  background-color: white;
  border-radius: 0.5rem;
  padding: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.search-bar {
  margin-bottom: 1rem;
}

.search-button {
  padding: 0.5rem 1rem;
  background-color: #2563eb;
  color: white;
  border: none;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  cursor: pointer;
  transition: background-color 0.2s;
}

.search-button:hover {
  background-color: #1d4ed8;
}

.filters {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
}

.filter-item {
  display: flex;
  flex-direction: column;
}

.filter-label {
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
  margin-bottom: 0.5rem;
}

.filter-select,
.filter-input {
  padding: 0.5rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  color: #1f2937;
  background-color: white;
  transition: all 0.2s;
}

.filter-select:focus,
.filter-input:focus {
  outline: none;
  border-color: #2563eb;
  box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.2);
}

.filter-checkbox {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.checkbox-label {
  font-size: 0.875rem;
  color: #374151;
}

.clear-filters {
  grid-column: 1 / -1;
  padding: 0.5rem 1rem;
  background-color: #ef4444;
  color: white;
  border: none;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  cursor: pointer;
  transition: background-color 0.2s;
}

.clear-filters:hover {
  background-color: #dc2626;
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  .search-filters {
    background-color: #1f2937;
  }

  .filter-label {
    color: #d1d5db;
  }

  .filter-select,
  .filter-input {
    background-color: #374151;
    border-color: #4b5563;
    color: #f3f4f6;
  }

  .checkbox-label {
    color: #d1d5db;
  }
}
</style>
