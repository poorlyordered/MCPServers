<template>
  <div class="welcome-message">
    <h2 class="welcome-title">Join Our Growing Community</h2>
    <p class="welcome-subtitle">
      Ready to take your gaming to the next level? Join thousands of players and organizations
      who are already part of our thriving community.
    </p>
    <div class="stats">
      <div class="stat-item">
        <span class="stat-number">10K+</span>
        <span class="stat-label">Active Players</span>
      </div>
      <div class="stat-item">
        <span class="stat-number">500+</span>
        <span class="stat-label">Teams</span>
      </div>
      <div class="stat-item">
        <span class="stat-number">100+</span>
        <span class="stat-label">Events</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'WelcomeMessage',
};
</script>

<style scoped>
.welcome-message {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.welcome-title {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1rem;
  font-weight: 700;
}

.welcome-subtitle {
  font-size: 1.25rem;
  color: #666;
  line-height: 1.6;
  margin-bottom: 3rem;
}

.stats {
  display: flex;
  justify-content: center;
  gap: 4rem;
  margin-top: 2rem;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: hsla(160, 100%, 37%, 1);
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 1.125rem;
  color: #666;
  font-weight: 500;
}

@media (max-width: 768px) {
  .welcome-title {
    font-size: 2rem;
  }

  .welcome-subtitle {
    font-size: 1.125rem;
  }

  .stats {
    flex-direction: column;
    gap: 2rem;
  }

  .stat-number {
    font-size: 2rem;
  }
}
</style>
