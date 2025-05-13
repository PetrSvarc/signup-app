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
        <div class="space-y-6">
          <Form
            ref="formRef"
            :fields="formFields"
            progressive-validation
            @submit="handleSubmit"
          />
          <div>
            <provet-button
              id="submit-button"
              @click="handleFormSubmit"
            >
              Submit
            </provet-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { FormField } from '~/composables/useForm'

const formRef = ref()
const { signupFormFields : formFields } = useSignupForm()

const handleFormSubmit = () => {
  formRef.value?.submit()
}

const handleSubmit = (data: Record<string, FormField['value']>) => {
  console.log('Form data:', data)
}
</script>
