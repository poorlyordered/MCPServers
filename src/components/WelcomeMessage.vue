<template>
  <div class="max-w-4xl mx-auto px-4 py-8 text-center">
    <h2 class="text-h2 font-bold text-neutral-900 dark:text-neutral-50 mb-4">
      Join Our Growing Community
    </h2>
    <p class="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed mb-12 max-w-2xl mx-auto">
      Ready to take your gaming to the next level? Join thousands of players and organizations
      who are already part of our thriving community.
    </p>
    <div class="flex flex-col md:flex-row justify-center gap-8 md:gap-16 mt-8">
      <div class="flex flex-col items-center">
        <span class="text-4xl font-bold text-primary-500 mb-2">10K+</span>
        <span class="text-lg font-medium text-neutral-600 dark:text-neutral-300">Active Players</span>
      </div>
      <div class="flex flex-col items-center">
        <span class="text-4xl font-bold text-primary-500 mb-2">500+</span>
        <span class="text-lg font-medium text-neutral-600 dark:text-neutral-300">Teams</span>
      </div>
      <div class="flex flex-col items-center">
        <span class="text-4xl font-bold text-primary-500 mb-2">100+</span>
        <span class="text-lg font-medium text-neutral-600 dark:text-neutral-300">Events</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'WelcomeMessage',
};
</script>
