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
            id="email"
            v-model="email"
            label="Email address"
            type="email"
            required
            :error-message="emailError"
          />

          <FormInput
            id="password"
            v-model="password"
            label="Password"
            type="password"
            required
            :error-message="passwordError"
          />

          <FormCheckbox
            id="wants-updates"
            v-model="wantsUpdates"
            label="I want to receive updates about new features"
          />

          <div>
            <provet-button id="submit-button" type="submit" class="w-full" :disabled="isSubmitting">
              {{ isSubmitting ? 'Signing up...' : 'Sign up' }}
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
import FormCheckbox from '~/components/Form/Checkbox.vue'
import { useFormSignup } from '~/composables/useFormSignup'

const {
  email,
  password,
  wantsUpdates,
  emailError,
  passwordError,
  validateForm,
  submit
} = useFormSignup()

const isSubmitting = ref(false)

const handleSubmit = async () => {
  if (!validateForm()) return

  isSubmitting.value = true
  try {
    const success = await submit()
    if (success) {
      // Handle successful signup
      console.log('Signup successful!')
    }
  } finally {
    isSubmitting.value = false
  }
}
</script>
