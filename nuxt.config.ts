export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  app: {
    baseURL: '/signup-app/'
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/devtools',
    '@nuxtjs/eslint-module',
    '@nuxt/eslint',
    '@vueuse/nuxt'
  ],
  ssr: false,
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag.includes('-')
    }
  }
})
