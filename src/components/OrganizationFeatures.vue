<template>
  <div class="organization-features">
    <h2 class="features-title">For Organizations</h2>
    <div class="features-grid">
      <div class="feature-item">
        <div class="feature-icon">🤝</div>
        <h3>Partnerships</h3>
        <p>Build valuable partnerships within our thriving gaming community</p>
      </div>
      <div class="feature-item">
        <div class="feature-icon">🎯</div>
        <h3>Event Promotion</h3>
        <p>Showcase your brand at community events and tournaments</p>
      </div>
      <div class="feature-item">
        <div class="feature-icon">🌐</div>
        <h3>Network Growth</h3>
        <p>Connect with other organizations and expand your reach</p>
      </div>
      <div class="feature-item">
        <div class="feature-icon">🚀</div>
        <h3>Community Support</h3>
        <p>Launch and support initiatives that matter to gamers</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'OrganizationFeatures',
};
</script>

<style scoped>
.organization-features {
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
