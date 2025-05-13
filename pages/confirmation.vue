<template>
  <div class="flex flex-col items-center justify-center py-12 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <div class="flex justify-center">
        <div class="rounded-full bg-green-100 dark:bg-green-900 p-3 w-12 h-12 flex items-center justify-center">
          <provet-icon name="interface-checked" class="text-green-600 dark:text-green-400">
          </provet-icon>
        </div>
      </div>
      <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
        Sign up successful!
      </h2>
      <p class="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
        Thank you for joining us. We're excited to have you on board!
      </p>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white dark:bg-gray-800 py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <div class="space-y-6">
          <p class="text-center text-gray-600 dark:text-gray-400">
            We've sent a confirmation email to your inbox. Please check it to verify your account.
          </p>
          <div class="flex justify-center">
            <provet-button
              variant="primary"
              @click="navigateTo('/')"
            >
              Return to Home
            </provet-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SvgCheck from '~/components/Icon/Check.vue'
</script>
