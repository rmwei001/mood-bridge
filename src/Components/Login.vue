<script setup>
import { ref } from 'vue'

const email = ref('')
const password = ref('')
const showPassword = ref(false)
const errorMessage = ref('')
const successMessage = ref('')

const emailRules = [
  (value) => !!value || 'Email is required.',
  (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value || '') || 'Enter a valid email address.',
]

const passwordRules = [(value) => !!value || 'Password is required.']

function login() {
  errorMessage.value = ''
  successMessage.value = ''

  if (!email.value || !password.value) {
    errorMessage.value = 'Please enter your email and password.'
    return
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    errorMessage.value = 'Please enter a valid email address.'
    return
  }

  successMessage.value = 'Your form is ready. Login authentication will be connected later.'
}
</script>

<template>
  <v-container fluid class="fill-height d-flex align-center justify-center bg-white pa-6">
    <v-card width="440" max-width="100%" color="black" elevation="2" rounded="xl" class="pa-6 pa-sm-10">
      <img src="/logo1.png" alt="MoodBridge" class="login-logo mb-8 mx-auto" />

      <p class="text-subtitle-2 text-grey-lighten-1 mb-3">WELCOME BACK</p>
      <h2 class="text-h4 font-weight-bold text-white mb-3">Log in to your account</h2>
      <p class="text-body-2 text-grey-lighten-1 mb-8">Enter your details to access your account.</p>

      <v-alert v-if="errorMessage" type="error" variant="tonal" density="comfortable" class="mb-5">{{ errorMessage }}</v-alert>
      <v-alert v-if="successMessage" type="info" variant="tonal" density="comfortable" class="mb-5">{{ successMessage }}</v-alert>

      <v-form @submit.prevent="login">
        <label for="email" class="text-body-2 font-weight-medium text-white">Email address</label>
        <v-text-field id="email" v-model="email" type="email" placeholder="you@example.com" variant="outlined" rounded="lg" density="comfortable" bg-color="white" color="black" :rules="emailRules" autocomplete="email" class="mt-2 mb-4" required />

        <label for="password" class="text-body-2 font-weight-medium text-white">Password</label>
        <v-text-field id="password" v-model="password" :type="showPassword ? 'text' : 'password'" placeholder="Enter your password" variant="outlined" rounded="lg" density="comfortable" bg-color="white" color="black" :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'" @click:append-inner="showPassword = !showPassword" :rules="passwordRules" autocomplete="current-password" class="mt-2 mb-2" required />

        <v-btn type="submit" block size="large" rounded="lg" color="buttons" class="text-white font-weight-bold mt-4">Log In</v-btn>
      </v-form>

      <div class="text-center mt-7">
        <span class="text-body-2 text-grey-lighten-1">Don't have an account?</span>
        <router-link to="/signup" class="text-body-2 font-weight-bold text-decoration-none ml-1 text-buttons">Create account</router-link>
      </div>
    </v-card>
  </v-container>
</template>

<style scoped>
.login-logo {
  display: block;
  width: 260px;
  max-width: 100%;
  height: auto;
}
</style>
