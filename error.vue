<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps({
  error: Object as () => NuxtError
})
</script>

<template>
  <div class="min-h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="text-center">
      <h1 class="text-9xl font-extrabold text-indigo-600 dark:text-indigo-400 transition-colors duration-200">{{ error.statusCode }}</h1>
      <div class="mt-4">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white transition-colors duration-200">Page not found</h2>
        <p class="mt-2 text-lg text-gray-600 dark:text-gray-400 transition-colors duration-200">
          Sorry, we couldn't find the page you're looking for.
        </p>
      </div>
      <div class="mt-6">
        <NuxtLink
          to="/"
          class="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-900 transition-colors duration-200"
        >
          Go back home
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
