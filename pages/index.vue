<template>
  <div class="flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
        Create your account
      </h2>
      <p class="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
        Join us to get started with our product
      </p>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white dark:bg-gray-800 py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form @submit.prevent="handleSubmit" class="space-y-6">
          <FormInput
            v-model="form.email"
            label="Email address"
            type="email"
            required
            :error-message="errors.email"
          />

          <FormInput
            v-model="form.password"
            label="Password"
            type="password"
            required
            :error-message="errors.password"
          />

          <div>
            <provet-button type="submit" class="w-full">
              Sign up
            </provet-button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import FormInput from '~/components/Form/Input.vue'

const form = ref({
  email: '',
  password: ''
})

const errors = ref({
  email: '',
  password: ''
})

const handleSubmit = () => {
  // Reset errors
  errors.value = {
    email: '',
    password: ''
  }

  // Basic validation
  if (!form.value.email) {
    errors.value.email = 'Email is required'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.value.email)) {
    errors.value.email = 'Please enter a valid email address'
  }

  if (!form.value.password) {
    errors.value.password = 'Password is required'
  } else if (form.value.password.length < 8) {
    errors.value.password = 'Password must be at least 8 characters long'
  }

  // If no errors, proceed with form submission
  if (!errors.value.email && !errors.value.password) {
    console.log('Form submitted:', form.value)
    // Add your form submission logic here
  }
}
</script>
