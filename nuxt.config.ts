// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  modules: ['@nuxt/image', '@nuxtjs/i18n'],
  devtools: { enabled: true },
  ssr: false,
  spaLoadingTemplate: false,
  css: ['assets/styles/scss/reset.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:
            '@use "sass:map"; @import "assets/styles/scss/variables.scss"; @import "assets/styles/scss/mixin.scss";',
        },
      },
    },
  },
  i18n: {
    langDir: 'internationalization',
    defaultLocale: 'es',
    locales: [
      {
        code: 'es',
        iso: 'es-ES',
        file: 'es.json',
      },
    ],
  },
})
