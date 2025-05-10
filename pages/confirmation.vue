<template>
  <div class="flex flex-col items-center justify-center py-12 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <div class="flex justify-center">
        <div class="rounded-full bg-green-100 dark:bg-green-900 p-3">
          <SvgCheck class="text-green-600 dark:text-green-400" />
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
            <NuxtLink
              to="/"
              class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
            >
              Return to Home
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SvgCheck from '~/components/Icon/Check.vue'
</script>
