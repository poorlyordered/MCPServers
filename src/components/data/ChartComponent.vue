<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import { Chart } from 'chart.js/auto'
import type { ChartOptions, ChartTypeRegistry } from 'chart.js'

interface Props {
  type: 'line' | 'bar' | 'pie' | 'doughnut'
  data: {
    labels: string[]
    datasets: {
      label: string
      data: number[]
      backgroundColor?: string | string[]
      borderColor?: string | string[]
      borderWidth?: number
    }[]
  }
  options?: Partial<ChartOptions<keyof ChartTypeRegistry>>
  height?: number
  width?: number
}

const props = withDefaults(defineProps<Props>(), {
  height: 300,
  width: 500,
  options: () => ({
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const
      }
    }
  })
})

const chartCanvas = ref<HTMLCanvasElement | null>(null)
let chart: Chart | null = null

const createChart = () => {
  if (!chartCanvas.value) return

  // Destroy existing chart if it exists
  if (chart) {
    chart.destroy()
  }

  const ctx = chartCanvas.value.getContext('2d')
  if (!ctx) return

  chart = new Chart(ctx, {
    type: props.type,
    data: props.data,
    options: {
      ...props.options,
      // Dark mode support
      plugins: {
        ...props.options.plugins,
        legend: {
          ...props.options.plugins?.legend,
          labels: {
            color: isDarkMode() ? '#f3f4f6' : '#374151'
          }
        }
      },
      scales: props.type !== 'pie' && props.type !== 'doughnut' ? {
        x: {
          grid: {
            color: isDarkMode() ? '#4b5563' : '#e5e7eb'
          },
          ticks: {
            color: isDarkMode() ? '#f3f4f6' : '#374151'
          }
        },
        y: {
          grid: {
            color: isDarkMode() ? '#4b5563' : '#e5e7eb'
          },
          ticks: {
            color: isDarkMode() ? '#f3f4f6' : '#374151'
          }
        }
      } : undefined
    }
  })
}

const isDarkMode = () => {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

// Watch for data changes and recreate chart
watch(() => props.data, createChart, { deep: true })

// Watch for theme changes
onMounted(() => {
  createChart()

  // Update chart when system theme changes
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
  mediaQuery.addEventListener('change', createChart)

  // Cleanup
  onBeforeUnmount(() => {
    mediaQuery.removeEventListener('change', createChart)
    if (chart) {
      chart.destroy()
    }
  })
})
</script>

<template>
  <div
    class="chart-container"
    :style="{
      height: `${height}px`,
      width: `${width}px`
    }"
  >
    <canvas ref="chartCanvas"></canvas>
  </div>
</template>

<style scoped>
.chart-container {
  background-color: white;
  border-radius: 0.5rem;
  padding: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

/* Dark mode */
@media (prefers-color-scheme: dark) {
  .chart-container {
    background-color: #1f2937;
  }
}
</style>
