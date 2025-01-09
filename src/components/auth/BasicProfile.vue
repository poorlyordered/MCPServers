<template>
  <div class="basic-profile-container">
    <h2>Create Your Profile</h2>
    <form @submit.prevent="submitProfile">
      <div class="form-group">
        <label for="username">Username</label>
        <input type="text" id="username" v-model="username" required>
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="email" required>
      </div>
      <div class="form-group">
        <label for="fullName">Full Name (Optional)</label>
        <input type="text" id="fullName" v-model="fullName">
      </div>
      <div class="form-group">
        <label for="avatar">Avatar (Optional)</label>
        <input type="file" id="avatar" @change="handleAvatarChange" accept="image/*">
      </div>
      <button type="submit">Continue to RIOT Account Verification</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, type Ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const username = ref('');
const email = ref('');
const fullName = ref('');
const avatar: Ref<File | null> = ref(null);

const handleAvatarChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  if (target.files && target.files.length > 0) {
    avatar.value = target.files[0];
  }
};

const submitProfile = () => {
  // TODO: Implement profile submission logic
  console.log('Profile submitted:', {
    username: username.value,
    email: email.value,
    fullName: fullName.value,
    avatar: avatar.value,
  });
  router.push('/verify-riot-account');
};
</script>

<style scoped>
.basic-profile-container {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input[type="text"],
input[type="email"],
input[type="file"] {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

button[type="submit"] {
  background-color: #4CAF50;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button[type="submit"]:hover {
  background-color: #45a049;
}
</style>
