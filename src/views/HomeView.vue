<script setup lang="ts">
import WelcomeMessage from '@/components/WelcomeMessage.vue';
import CallToAction from '@/components/CallToAction.vue';
import TeamPlayerFeatures from '@/components/TeamPlayerFeatures.vue';
import OrganizationFeatures from '@/components/OrganizationFeatures.vue';
</script>

<template>
  <main style="color: hsla(160, 100%, 37%, 1);">
    <div class="landing">
      <!-- Hero Section -->
      <header class="hero">
        <nav class="nav-container">
          <div class="logo" style="display: flex; align-items: center">
            <img
              src="../assets/design_t.png"
              alt="Design"
              class="design-image"
              width="32"
              height="32"
            />
            <h2 style="color: hsla(160, 100%, 37%, 1);">Ranking of <span class="highlight-text">Legends</span></h2>
            <div class="auth-buttons">
              <button class="cta-button login-btn" style="background-color: transparent; border: 2px solid hsla(160, 100%, 37%, 1);">Sign In</button>
              <button class="cta-button signup-btn" style="background-color: hsla(160, 100%, 37%, 1);">Sign Up</button>
            </div> <!-- Closing the auth-buttons div -->
          </div> <!-- Closing the logo div -->
        </nav> <!-- Closing the nav-container div -->
      </header> <!-- Closing the hero section -->
    </div> <!-- Closing the landing div -->
    <WelcomeMessage />
    <CallToAction />
    <TeamPlayerFeatures />
    <OrganizationFeatures />
  </main>
</template>
