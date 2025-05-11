<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
    <header class="bg-white dark:bg-gray-800 shadow transition-colors duration-200">
      <nav class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 items-center justify-between">
          <div class="flex-shrink-0">
            <NuxtLink to="/" class="text-xl font-bold text-gray-900 dark:text-white transition-colors duration-200">
              SignUp App
            </NuxtLink>
          </div>
        </div>
      </nav>
    </header>

    <main>
      <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        <slot />
      </div>
    </main>
  </div>
</template>
