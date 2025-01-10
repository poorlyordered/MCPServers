<script setup lang="ts">
import WelcomeMessage from '@/components/WelcomeMessage.vue';
import CallToAction from '@/components/CallToAction.vue';
import TeamPlayerFeatures from '@/components/TeamPlayerFeatures.vue';
import OrganizationFeatures from '@/components/OrganizationFeatures.vue';
</script>

<template>
  <main>
    <!-- Navigation -->
    <nav class="nav-container">
      <div class="nav-content">
        <div class="nav-logo">
          <img
            src="../assets/design_t.png"
            alt="Ranking of Legends Logo"
            class="logo-image"
            width="32"
            height="32"
          />
          <h2 class="logo-text">Ranking of <span class="highlight">Legends</span></h2>
        </div>

        <div class="nav-links">
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <a href="#testimonials">Testimonials</a>
        </div>

        <div class="nav-auth">
          <button class="btn btn-outline">Sign In</button>
          <button class="btn btn-primary">Sign Up</button>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1 class="hero-title">Elevate Your Gaming Journey</h1>
        <p class="hero-subtitle">Join the ultimate platform for competitive gamers and teams to track progress, analyze performance, and climb the ranks.</p>
        <div class="hero-cta">
          <CallToAction />
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="features">
      <h2 class="section-title">Why Choose Us</h2>
      <div class="features-grid">
        <div class="feature-card">
          <TeamPlayerFeatures />
        </div>
        <div class="feature-card">
          <OrganizationFeatures />
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section id="testimonials" class="testimonials">
      <h2 class="section-title">What Our Users Say</h2>
      <div class="testimonials-grid">
        <div class="testimonial-card">
          <img src="../assets/design_t.png" alt="User" class="testimonial-avatar" />
          <p class="testimonial-text">"This platform has transformed how our team tracks progress and improves performance."</p>
          <p class="testimonial-author">- Alex Chen, Team Captain</p>
        </div>
        <div class="testimonial-card">
          <img src="../assets/design_t.png" alt="User" class="testimonial-avatar" />
          <p class="testimonial-text">"The analytics and insights have helped us identify areas for improvement we never noticed before."</p>
          <p class="testimonial-author">- Sarah Johnson, Coach</p>
        </div>
      </div>
    </section>

    <!-- Final CTA Section -->
    <section class="final-cta">
      <WelcomeMessage />
      <CallToAction />
    </section>
  </main>
</template>

<style scoped>
.nav-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.95);
  padding: 1rem 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.nav-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.logo-text {
  color: hsla(160, 100%, 37%, 1);
  font-size: 1.5rem;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-links a {
  color: #333;
  text-decoration: none;
  font-weight: 500;
}

.nav-links a:hover {
  color: hsla(160, 100%, 37%, 1);
}

.nav-auth {
  display: flex;
  gap: 1rem;
}

.btn {
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-outline {
  background-color: transparent;
  border: 2px solid hsla(160, 100%, 37%, 1);
  color: hsla(160, 100%, 37%, 1);
}

.btn-primary {
  background-color: hsla(160, 100%, 37%, 1);
  border: none;
  color: white;
}

.hero {
  padding: 8rem 2rem 4rem;
  background: linear-gradient(to right, #f8f9fa, #e9ecef);
  text-align: center;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.hero-title {
  font-size: 3rem;
  color: #333;
  margin-bottom: 1rem;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: #666;
  margin-bottom: 2rem;
}

.features {
  padding: 4rem 2rem;
  background: white;
}

.section-title {
  text-align: center;
  font-size: 2rem;
  color: #333;
  margin-bottom: 2rem;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.feature-card {
  padding: 2rem;
  background: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.testimonials {
  padding: 4rem 2rem;
  background: #f8f9fa;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.testimonial-card {
  padding: 2rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.testimonial-avatar {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  margin-bottom: 1rem;
}

.testimonial-text {
  font-style: italic;
  color: #666;
  margin-bottom: 1rem;
}

.testimonial-author {
  font-weight: 500;
  color: #333;
}

.final-cta {
  padding: 4rem 2rem;
  background: linear-gradient(to right, hsla(160, 100%, 37%, 0.1), hsla(160, 100%, 37%, 0.2));
  text-align: center;
}

@media (max-width: 768px) {
  .nav-links {
    display: none;
  }

  .hero-title {
    font-size: 2rem;
  }

  .hero-subtitle {
    font-size: 1rem;
  }
}
</style>
