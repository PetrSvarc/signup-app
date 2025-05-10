export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/devtools',
    '@nuxtjs/eslint-module',
    '@nuxt/eslint'
  ],
  ssr: false,
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag.includes('-')
    }
  }
})
