// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
      '@nuxtjs/tailwindcss',
      '@nuxtjs/color-mode',
      'nuxt-icon',
      '@nuxt/image',
  ],

  // Meta Data
  app: {
    head: {
      title: 'ORLYPLAZA',
      meta: [

      ],

      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ],

    }
  },
 
  colorMode: {
    classSuffix: '',
    preference: 'dark', // This will set the preference to dark mode
  },

  // For Dark mode
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    config: {},
    injectPosition: 0,
    viewer: true,
  },

  // When Customizing using css
  css: [
    '@/assets/css/main.css'
  ]
})