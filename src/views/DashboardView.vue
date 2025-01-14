<script setup lang="ts">
import { ref } from 'vue'
import ChartComponent from '@/components/data/ChartComponent.vue'

const stats = ref({
  teams: 3,
  events: 2,
  rank: 'Gold'
})

const monthlyStats = ref({
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Team Performance',
      data: [65, 72, 68, 75, 82, 78],
      borderColor: '#2563eb',
      backgroundColor: 'rgba(37, 99, 235, 0.1)',
      borderWidth: 2
    }
  ]
})

const eventDistribution = ref({
  labels: ['League', 'Tournament', 'Scrimmage', 'Practice'],
  datasets: [
    {
      label: 'Event Types',
      data: [4, 2, 6, 8],
      backgroundColor: [
        '#2563eb',
        '#7c3aed',
        '#db2777',
        '#dc2626'
      ]
    }
  ]
})
</script>

<template>
  <div class="dashboard">
    <h1>Dashboard</h1>
    <p>Welcome to your dashboard! Here you can manage your teams, events, and rankings.</p>

    <div class="dashboard__stats">
      <div class="stat-card">
        <h3>Your Teams</h3>
        <p class="stat-number">{{ stats.teams }}</p>
      </div>

      <div class="stat-card">
        <h3>Upcoming Events</h3>
        <p class="stat-number">{{ stats.events }}</p>
      </div>

      <div class="stat-card">
        <h3>Current Rank</h3>
        <p class="stat-number">{{ stats.rank }}</p>
      </div>
    </div>

    <div class="dashboard__charts">
      <div class="chart-wrapper">
        <h3>Performance Trend</h3>
        <ChartComponent
          type="line"
          :data="monthlyStats"
          :height="300"
        />
      </div>

      <div class="chart-wrapper">
        <h3>Event Distribution</h3>
        <ChartComponent
          type="doughnut"
          :data="eventDistribution"
          :height="300"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.dashboard {
  padding: 1rem;
}

h1 {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #1f2937;
}

.dashboard__stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.stat-card {
  background-color: white;
  border-radius: 0.5rem;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.stat-card h3 {
  font-size: 1rem;
  color: #4b5563;
  margin-bottom: 0.5rem;
}

.stat-number {
  font-size: 2rem;
  font-weight: 600;
  color: #2563eb;
}

.dashboard__charts {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 1.5rem;
}

.chart-wrapper {
  background-color: white;
  border-radius: 0.5rem;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.chart-wrapper h3 {
  font-size: 1.25rem;
  color: #1f2937;
  margin-bottom: 1rem;
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  h1 {
    color: #f3f4f6;
  }

  .stat-card {
    background-color: #1f2937;
  }

  .stat-card h3 {
    color: #d1d5db;
  }

  .stat-number {
    color: #60a5fa;
  }

  .chart-wrapper {
    background-color: #1f2937;
  }

  .chart-wrapper h3 {
    color: #f3f4f6;
  }
}
</style>
