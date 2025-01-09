<template>
  <div class="riot-verification-container">
    <h2>Verify Your RIOT Account</h2>
    <form @submit.prevent="verifyAccount">
      <div class="form-group">
        <label for="summonerName">Summoner Name</label>
        <input
          type="text"
          id="summonerName"
          v-model="summonerName"
          required
          placeholder="Enter your summoner name"
        >
      </div>
      <div class="form-group">
        <label for="region">Region</label>
        <select id="region" v-model="region" required>
          <option value="">Select your region</option>
          <option value="na">North America</option>
          <option value="euw">Europe West</option>
          <option value="eune">Europe Nordic & East</option>
          <option value="kr">Korea</option>
          <option value="br">Brazil</option>
          <option value="lan">Latin America North</option>
          <option value="las">Latin America South</option>
          <option value="oce">Oceania</option>
          <option value="tr">Turkey</option>
          <option value="ru">Russia</option>
          <option value="jp">Japan</option>
        </select>
      </div>
      <div class="verification-status" v-if="verificationStatus">
        {{ verificationStatus }}
      </div>
      <button type="submit" :disabled="isVerifying">
        {{ isVerifying ? 'Verifying...' : 'Verify Account' }}
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const summonerName = ref('');
const region = ref('');
const verificationStatus = ref('');
const isVerifying = ref(false);

const verifyAccount = async () => {
  isVerifying.value = true;
  verificationStatus.value = 'Verifying your account...';

  try {
    // TODO: Implement actual RIOT API verification logic
    await new Promise(resolve => setTimeout(resolve, 2000)); // Simulated API call

    // Simulated success for now
    const success = true;

    if (success) {
      verificationStatus.value = 'Account verified successfully!';
      // Redirect to dashboard or next step
      router.push('/dashboard');
    } else {
      verificationStatus.value = 'Verification failed. Please check your summoner name and region.';
    }
  } catch (error) {
    verificationStatus.value = 'An error occurred during verification. Please try again.';
    console.error('Verification error:', error);
  } finally {
    isVerifying.value = false;
  }
};
</script>

<style scoped>
.riot-verification-container {
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

input,
select {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

select {
  background-color: white;
}

.verification-status {
  margin: 15px 0;
  padding: 10px;
  border-radius: 4px;
  background-color: #f8f9fa;
  text-align: center;
}

button {
  width: 100%;
  padding: 10px 15px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
}

button:hover:not(:disabled) {
  background-color: #45a049;
}

button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}
</style>
