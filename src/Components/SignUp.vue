<script setup>
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const password = ref('')
const passwordConfirmation = ref('')
const showPassword = ref(false)
const showConfirmPassword = ref(false)
const errorMessage = ref('')
const successMessage = ref('')

function signUp() {
  errorMessage.value = ''
  successMessage.value = ''

  if (!name.value.trim() || !email.value.trim() || !password.value || !passwordConfirmation.value) {
    errorMessage.value = 'Please complete all fields.'
    return
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
    errorMessage.value = 'Please enter a valid email address.'
    return
  }

  if (password.value.length < 8) {
    errorMessage.value = 'Password must be at least 8 characters.'
    return
  }

  if (password.value !== passwordConfirmation.value) {
    errorMessage.value = 'Passwords do not match.'
    return
  }

  successMessage.value = 'Your form is complete. Account creation and email verification will be available later.'
}
</script>

<template>
  <v-container fluid class="fill-height d-flex align-center justify-center bg-white pa-3">
    <v-card width="460" max-width="100%" color="black" elevation="2" rounded="xl" class="pa-5 pa-sm-7">
      <img src="/logo1.png" alt="MoodBridge" width="180" class="d-block mb-4 mx-auto" />

      <p class="text-subtitle-2 text-grey-lighten-1 mb-2">GET STARTED</p>
      <h2 class="text-h5 font-weight-bold text-white mb-2">Create your account</h2>
      <p class="text-body-2 text-grey-lighten-1 mb-4">Join MoodBridge and take the next step in your mental health journey.</p>

      <v-alert v-if="errorMessage" type="error" variant="tonal" density="compact" class="mb-4">{{ errorMessage }}</v-alert>
      <v-alert v-if="successMessage" type="info" variant="tonal" density="compact" class="mb-4">{{ successMessage }}</v-alert>

      <v-form @submit.prevent="signUp">
        <label for="name" class="text-body-2 font-weight-medium text-white">Full name</label>
        <v-text-field id="name" v-model="name" placeholder="Enter your full name" variant="outlined" rounded="lg" density="comfortable" bg-color="white" color="black" autocomplete="name" :rules="[value => !!value?.trim() || 'Full name is required.']" class="mt-1 mb-2" hide-details="auto" required />

        <label for="email" class="text-body-2 font-weight-medium text-white">Email address</label>
        <v-text-field id="email" v-model="email" type="email" placeholder="you@example.com" variant="outlined" rounded="lg" density="comfortable" bg-color="white" color="black" autocomplete="email" :rules="[value => !!value?.trim() || 'Email is required.', value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value?.trim() || '') || 'Enter a valid email address.']" class="mt-1 mb-2" hide-details="auto" required />

        <label for="password" class="text-body-2 font-weight-medium text-white">Password</label>
        <v-text-field id="password" v-model="password" :type="showPassword ? 'text' : 'password'" placeholder="At least 8 characters" variant="outlined" rounded="lg" density="comfortable" bg-color="white" color="black" autocomplete="new-password" :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'" @click:append-inner="showPassword = !showPassword" :rules="[value => (value?.length || 0) >= 8 || 'Password must be at least 8 characters.']" class="mt-1 mb-2" hide-details="auto" required />

        <label for="confirm-password" class="text-body-2 font-weight-medium text-white">Confirm password</label>
        <v-text-field id="confirm-password" v-model="passwordConfirmation" :type="showConfirmPassword ? 'text' : 'password'" placeholder="Re-enter your password" variant="outlined" rounded="lg" density="comfortable" bg-color="white" color="black" autocomplete="new-password" :append-inner-icon="showConfirmPassword ? 'mdi-eye-off' : 'mdi-eye'" @click:append-inner="showConfirmPassword = !showConfirmPassword" :rules="[value => !!value || 'Please confirm your password.', value => value === password || 'Passwords do not match.']" class="mt-1 mb-1" hide-details="auto" required />

        <v-btn type="submit" block size="large" rounded="lg" color="buttons" class="text-white font-weight-bold mt-3">Create Account</v-btn>
      </v-form>

      <div class="text-center mt-4">
        <span class="text-body-2 text-grey-lighten-1">Already have an account?</span>
        <router-link to="/login" class="text-body-2 font-weight-bold text-decoration-none ml-1 text-buttons">Log in</router-link>
      </div>
    </v-card>
  </v-container>
</template>
