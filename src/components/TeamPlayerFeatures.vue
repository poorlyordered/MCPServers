<template>
  <div class="team-player-features">
    <h2 class="features-title">For Teams & Players</h2>
    <div class="features-grid">
      <div class="feature-item">
        <div class="feature-icon">📚</div>
        <h3>Training Resources</h3>
        <p>Access exclusive guides, tutorials, and training materials to improve your skills</p>
      </div>
      <div class="feature-item">
        <div class="feature-icon">🤝</div>
        <h3>Networking</h3>
        <p>Connect with other players, form teams, and build your gaming network</p>
      </div>
      <div class="feature-item">
        <div class="feature-icon">🎮</div>
        <h3>Community Events</h3>
        <p>Participate in tournaments, scrims, and special community events</p>
      </div>
      <div class="feature-item">
        <div class="feature-icon">👨‍🏫</div>
        <h3>Coaching Support</h3>
        <p>Get guidance and feedback from experienced coaches in the community</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'TeamPlayerFeatures',
};
</script>

<style scoped>
.team-player-features {
  padding: 1rem;
}

.features-title {
  font-size: 1.75rem;
  color: #333;
  margin-bottom: 2rem;
  text-align: center;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.feature-item {
  padding: 1.5rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}

.feature-item:hover {
  transform: translateY(-2px);
}

.feature-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.feature-item h3 {
  font-size: 1.25rem;
  color: #333;
  margin-bottom: 0.5rem;
}

.feature-item p {
  color: #666;
  line-height: 1.5;
}

@media (max-width: 768px) {
  .features-grid {
    grid-template-columns: 1fr;
  }
}
</style>
