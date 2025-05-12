<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps({
  error: Object as () => NuxtError
})

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <div class="min-h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="text-center">
      <h1 class="text-9xl font-extrabold text-indigo-600 dark:text-indigo-400 transition-colors duration-200">{{ error?.statusCode }}</h1>
      <div class="mt-4">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white transition-colors duration-200">Page not found</h2>
        <p class="mt-2 text-lg text-gray-600 dark:text-gray-400 transition-colors duration-200">
          Sorry, we couldn't find the page you're looking for.
        </p>
      </div>
      <div class="mt-6">
        <provet-button
          variant="primary"
          @click="handleError"
        >
          Go back home
        </provet-button>
      </div>
    </div>
  </div>
</template>
