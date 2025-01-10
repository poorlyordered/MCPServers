<template>
  <div class="call-to-action">
    <button @click="joinNow" class="cta-button primary">Get Started</button>
    <button @click="learnMore" class="cta-button secondary">Learn More</button>
  </div>
</template>

<script lang="ts">
export default {
  name: 'CallToAction',
  methods: {
    joinNow() {
      // Navigate to sign up page
      window.location.href = '/signup';
    },
    learnMore() {
      // Smooth scroll to features section
      document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
    },
  },
};
</script>

<style scoped>
.call-to-action {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin: 2rem 0;
}

.cta-button {
  padding: 0.875rem 2rem;
  font-size: 1.125rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.cta-button.primary {
  background-color: hsla(160, 100%, 37%, 1);
  color: white;
  border: none;
  box-shadow: 0 4px 6px rgba(0, 150, 100, 0.2);
}

.cta-button.primary:hover {
  background-color: hsla(160, 100%, 32%, 1);
  transform: translateY(-2px);
  box-shadow: 0 6px 8px rgba(0, 150, 100, 0.3);
}

.cta-button.secondary {
  background-color: transparent;
  color: hsla(160, 100%, 37%, 1);
  border: 2px solid hsla(160, 100%, 37%, 1);
}

.cta-button.secondary:hover {
  background-color: hsla(160, 100%, 37%, 0.1);
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .call-to-action {
    flex-direction: column;
    gap: 1rem;
  }

  .cta-button {
    width: 100%;
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
  }
}
</style>
