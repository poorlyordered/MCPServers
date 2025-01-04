<template>
  <div class="call-to-action">
    <button @click="joinNow">Join Now</button>
    <button @click="learnMore">Learn More</button>
  </div>
</template>

<script lang="ts">
export default {
  name: 'CallToAction',
  methods: {
    joinNow() {
      // Logic for joining the community
      alert('Join Now clicked!');
    },
    learnMore() {
      // Logic for learning more about the community
      alert('Learn More clicked!');
    },
  },
};
</script>

<style scoped>
.call-to-action {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 20px 0;
}
</style>
