<script setup lang="ts">
import { ref } from 'vue'
import SearchFilters, { type Filter } from '../form/SearchFilters.vue'

type DataValue = string | number | boolean | null
type DataRecord = { [key: string]: DataValue }

interface Column<T = DataValue> {
  key: string
  label: string
  sortable?: boolean
  formatter?: (value: T) => string
}

interface Props {
  columns: Column[]
  data: DataRecord[]
  filters?: Filter[]
  showFilters?: boolean
  showSearch?: boolean
  loading?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  filters: () => [],
  showFilters: true,
  showSearch: true,
  loading: false
})

const emit = defineEmits<{
  (e: 'sort', column: string, direction: 'asc' | 'desc'): void
  (e: 'filter', filters: { [key: string]: DataValue }): void
  (e: 'search', query: string): void
}>()

const sortColumn = ref<string | null>(null)
const sortDirection = ref<'asc' | 'desc'>('asc')

const handleSort = (column: Column) => {
  if (!column.sortable) return

  if (sortColumn.value === column.key) {
    sortDirection.value = sortDirection.value === 'asc' ? 'desc' : 'asc'
  } else {
    sortColumn.value = column.key
    sortDirection.value = 'asc'
  }

  emit('sort', column.key, sortDirection.value)
}

const handleFilter = (filters: { [key: string]: DataValue }) => {
  emit('filter', filters)
}

const handleSearch = (query: string) => {
  emit('search', query)
}

const getSortIcon = (column: Column) => {
  if (!column.sortable) return null
  if (sortColumn.value !== column.key) return '↕'
  return sortDirection.value === 'asc' ? '↑' : '↓'
}

const formatCellValue = (column: Column, value: DataValue): string => {
  if (column.formatter) {
    return column.formatter(value)
  }
  if (value === null) {
    return ''
  }
  return String(value)
}

// Use props in template
const { columns, data, filters, showFilters, showSearch, loading } = props
</script>

<template>
  <div class="data-table-wrapper">
    <!-- Filters -->
    <SearchFilters
      v-if="showFilters && (filters.length > 0 || showSearch)"
      :filters="filters"
      :show-search="showSearch"
      @filter="handleFilter"
      @search="handleSearch"
    />

    <!-- Table -->
    <div class="table-container">
      <table class="data-table">
        <thead>
          <tr>
            <th
              v-for="column in columns"
              :key="column.key"
              :class="{
                'sortable': column.sortable,
                'sorted': sortColumn === column.key
              }"
              @click="handleSort(column)"
            >
              {{ column.label }}
              <span v-if="column.sortable" class="sort-icon">
                {{ getSortIcon(column) }}
              </span>
            </th>
          </tr>
        </thead>

        <tbody>
          <template v-if="loading">
            <tr class="loading-row">
              <td :colspan="columns.length" class="loading-cell">
                <div class="loading-spinner"></div>
                <span>Loading data...</span>
              </td>
            </tr>
          </template>
          <template v-else-if="data.length === 0">
            <tr class="empty-row">
              <td :colspan="columns.length" class="empty-cell">
                No data available
              </td>
            </tr>
          </template>
          <template v-else>
            <tr v-for="(row, index) in data" :key="index">
              <td v-for="column in columns" :key="column.key">
                {{ formatCellValue(column, row[column.key]) }}
              </td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.data-table-wrapper {
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.table-container {
  overflow-x: auto;
  margin-top: 1rem;
}

.data-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.875rem;
}

.data-table th {
  background-color: #f9fafb;
  padding: 0.75rem 1rem;
  text-align: left;
  font-weight: 600;
  color: #374151;
  border-bottom: 1px solid #e5e7eb;
}

.data-table td {
  padding: 0.75rem 1rem;
  border-bottom: 1px solid #e5e7eb;
  color: #1f2937;
}

.sortable {
  cursor: pointer;
  user-select: none;
}

.sortable:hover {
  background-color: #f3f4f6;
}

.sort-icon {
  display: inline-block;
  margin-left: 0.5rem;
  color: #9ca3af;
}

.sorted .sort-icon {
  color: #2563eb;
}

.loading-row,
.empty-row {
  text-align: center;
}

.loading-cell,
.empty-cell {
  padding: 3rem !important;
  color: #6b7280 !important;
}

.loading-spinner {
  display: inline-block;
  width: 2rem;
  height: 2rem;
  border: 3px solid #e5e7eb;
  border-top-color: #2563eb;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-right: 1rem;
  vertical-align: middle;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  .data-table-wrapper {
    background-color: #1f2937;
  }

  .data-table th {
    background-color: #374151;
    color: #f3f4f6;
    border-bottom-color: #4b5563;
  }

  .data-table td {
    color: #f3f4f6;
    border-bottom-color: #4b5563;
  }

  .sortable:hover {
    background-color: #4b5563;
  }

  .loading-cell,
  .empty-cell {
    color: #9ca3af !important;
  }

  .loading-spinner {
    border-color: #4b5563;
    border-top-color: #60a5fa;
  }
}
</style>
