<script setup lang="ts">
import WelcomeMessage from '@/components/WelcomeMessage.vue';
import CallToAction from '@/components/CallToAction.vue';
import TeamPlayerFeatures from '@/components/TeamPlayerFeatures.vue';
import OrganizationFeatures from '@/components/OrganizationFeatures.vue';
</script>

<template>
  <main class="min-h-screen">
    <!-- Navigation -->
    <nav class="fixed top-0 left-0 right-0 bg-white/95 dark:bg-neutral-900/95 py-4 shadow-sm z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div class="flex items-center gap-2">
          <img
            src="../assets/design_t.png"
            alt="Ranking of Legends Logo"
            class="w-8 h-8"
          />
          <h2 class="text-xl font-semibold text-primary-500">
            Ranking of <span class="text-primary-900 dark:text-primary-50">Legends</span>
          </h2>
        </div>

        <div class="hidden md:flex gap-8">
          <a href="#features" class="text-neutral-600 dark:text-neutral-300 font-medium hover:text-primary-500">Features</a>
          <a href="#about" class="text-neutral-600 dark:text-neutral-300 font-medium hover:text-primary-500">About</a>
          <a href="#testimonials" class="text-neutral-600 dark:text-neutral-300 font-medium hover:text-primary-500">Testimonials</a>
        </div>

        <div class="flex gap-4">
          <button class="px-4 py-2 rounded-lg border-2 border-primary-500 text-primary-500 font-medium hover:bg-primary-50/20">Sign In</button>
          <button class="px-4 py-2 rounded-lg bg-primary-500 text-white font-medium hover:bg-primary-600">Sign Up</button>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="pt-40 pb-28 bg-hero">
      <div class="max-w-4xl mx-auto px-4 text-center space-y-8">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 dark:text-neutral-50 mb-6">Elevate Your Gaming Journey</h1>
        <p class="text-lg md:text-xl text-neutral-600 dark:text-neutral-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          Join the ultimate platform for competitive gamers and teams to track progress, analyze performance, and climb the ranks.
        </p>
        <div class="mt-8">
          <CallToAction />
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="py-24 bg-white dark:bg-neutral-900">
      <h2 class="text-3xl font-bold text-center text-neutral-900 dark:text-neutral-50 mb-12">Why Choose Us</h2>
      <div class="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8">
        <div class="bg-neutral-50 dark:bg-neutral-800 p-8 rounded-xl shadow-sm">
          <TeamPlayerFeatures />
        </div>
        <div class="bg-neutral-50 dark:bg-neutral-800 p-8 rounded-xl shadow-sm">
          <OrganizationFeatures />
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section id="testimonials" class="py-16 bg-neutral-50 dark:bg-neutral-800">
      <h2 class="text-3xl font-bold text-center text-neutral-900 dark:text-neutral-50 mb-8">What Our Users Say</h2>
      <div class="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8">
        <div class="bg-white dark:bg-neutral-900 p-8 rounded-xl shadow-sm text-center">
          <img src="../assets/design_t.png" alt="User" class="w-16 h-16 rounded-full mx-auto mb-4" />
          <p class="text-neutral-600 dark:text-neutral-300 italic mb-4">"This platform has transformed how our team tracks progress and improves performance."</p>
          <p class="font-medium text-neutral-900 dark:text-neutral-50">- Alex Chen, Team Captain</p>
        </div>
        <div class="bg-white dark:bg-neutral-900 p-8 rounded-xl shadow-sm text-center">
          <img src="../assets/design_t.png" alt="User" class="w-16 h-16 rounded-full mx-auto mb-4" />
          <p class="text-neutral-600 dark:text-neutral-300 italic mb-4">"The analytics and insights have helped us identify areas for improvement we never noticed before."</p>
          <p class="font-medium text-neutral-900 dark:text-neutral-50">- Sarah Johnson, Coach</p>
        </div>
      </div>
    </section>

    <!-- Final CTA Section -->
    <section class="py-16 bg-cta">
      <WelcomeMessage />
      <CallToAction />
    </section>
  </main>
</template>

<style>
/* Custom gradient backgrounds */
.bg-hero {
  @apply bg-gradient-to-r from-neutral-50 via-neutral-100 to-neutral-50 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900;
}

.bg-cta {
  @apply bg-gradient-to-r from-primary-500/5 via-primary-500/10 to-primary-500/5;
}
</style>
