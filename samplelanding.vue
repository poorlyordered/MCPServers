<template>
  <div class="landing">
    <!-- Hero Section -->
    <header class="hero">
      <nav class="nav-container">
        <div class="logo">
          <h2>ESports<span class="highlight-text">Pro</span></h2>
        </div>
        <div class="auth-buttons">
          <button class="cta-button login-btn">Sign In</button>
          <button class="cta-button signup-btn">Sign Up</button>
        </div>
      </nav>

      <div class="hero-content">
        <h1 class="title"><span class="highlight-text">Championship</span> 2025</h1>
        <p class="subtitle">Join the biggest esports event of the year</p>

        <div class="event-details">
          <div class="detail-item">
            <span class="detail-icon">🏆</span>
            <span class="detail-text">$1M Prize Pool</span>
          </div>
          <div class="detail-item">
            <span class="detail-icon">👥</span>
            <span class="detail-text">32 Pro Teams</span>
          </div>
          <div class="detail-item">
            <span class="detail-icon">📅</span>
            <span class="detail-text">March 15-20</span>
          </div>
        </div>

        <div class="cta-buttons">
          <button class="cta-button primary">Register Now</button>
          <button class="cta-button secondary">Watch Trailer</button>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'LandingPage',
  data() {
    return {
      // Add reactive data here if needed
    }
  },
}
</script>

<style scoped>
:root {
  /* Main colors */
  --primary-bg: var(--night);
  --primary-text: var(--nyanza);
  --accent-primary: var(--keppel);
  --accent-secondary: var(--orange-peel);
  --highlight: var(--bright-pink);
}

.landing {
  text-align: center;
  padding: 0;
  background-color: var(--primary-bg);
  color: var(--primary-text);
  min-height: 100vh;
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
}

.logo h2 {
  font-size: 1.8rem;
  margin: 0;
}

.highlight-text {
  color: var(--highlight);
}

.auth-buttons {
  display: flex;
  gap: 1rem;
}

.login-btn {
  background-color: transparent;
  border: 2px solid var(--accent-secondary);
}

.signup-btn {
  background-color: var(--accent-secondary);
}

.hero-content {
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.title {
  font-size: 4rem;
  margin: 0;
  line-height: 1.2;
}

.subtitle {
  font-size: 1.5rem;
  color: var(--accent-primary);
  margin: 0;
}

.event-details {
  display: flex;
  gap: 3rem;
  margin: 2rem 0;
}

.detail-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.detail-icon {
  font-size: 2rem;
}

.detail-text {
  font-size: 1.1rem;
  font-weight: bold;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
}

.cta-button {
  font-size: 1.1rem;
  padding: 0.8rem 1.8rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.cta-button.primary {
  background-color: var(--accent-secondary);
  color: var(--primary-bg);
}

.cta-button.secondary {
  background-color: transparent;
  border: 2px solid var(--accent-secondary);
  color: var(--primary-text);
}

.cta-button:hover {
  background-color: var(--accent-primary);
  transform: translateY(-2px);
}

/* Responsive Design */
@media (max-width: 768px) {
  .title {
    font-size: 3rem;
  }

  .event-details {
    flex-direction: column;
    gap: 1.5rem;
  }

  .nav-container {
    flex-direction: column;
    gap: 1rem;
  }

  .cta-buttons {
    flex-direction: column;
    width: 100%;
    max-width: 300px;
  }
}
</style>
