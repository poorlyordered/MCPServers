<template>
  <div class="flex flex-col md:flex-row justify-center gap-4 md:gap-6 my-8">
    <button
      @click="joinNow"
      class="px-8 py-3.5 text-lg font-semibold uppercase tracking-wide rounded-lg bg-primary-500 text-white shadow-lg shadow-primary-500/20 hover:bg-primary-600 hover:-translate-y-0.5 transition-all duration-300"
    >
      Get Started
    </button>
    <button
      @click="learnMore"
      class="px-8 py-3.5 text-lg font-semibold uppercase tracking-wide rounded-lg border-2 border-primary-500 text-primary-500 dark:text-primary-400 hover:bg-primary-50/20 dark:hover:bg-primary-500/10 hover:-translate-y-0.5 transition-all duration-300"
    >
      Learn More
    </button>
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
