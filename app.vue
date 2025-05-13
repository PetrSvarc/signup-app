<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
useHead({
  title: 'SignUp App - Easy Registration Platform',
  meta: [
    { name: 'description', content: 'A modern and secure platform for user registration and account management. Streamline your signup process with our intuitive interface.' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'keywords', content: 'signup, registration, user management, account creation' },
    { name: 'author', content: 'SignUp App Team' },
    { property: 'og:title', content: 'SignUp App - Easy Registration Platform' },
    { property: 'og:description', content: 'A modern and secure platform for user registration and account management.' },
    { property: 'og:type', content: 'website' }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
  ]
})
</script>

<style>
:root {
  color-scheme: light dark;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
