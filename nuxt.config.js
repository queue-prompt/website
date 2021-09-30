export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  googleAnalytics: {
    id: process.env.GOOGLE_ANALYTIC_ID,
    debug: true
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'www.คิวพร้อม.com',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },

      { property: "og:title", content: "www.คิวพร้อม.com" },
      { property: "og:description", content: "Platform ระบบลงทะเบียนจองคิว Free !!" },
      { property: "og:image", content: "https://i.ibb.co/TbwThsb/Transparent.png" },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "stylesheet", href: "https://use.fontawesome.com/releases/v5.11.2/css/all.css" }
    ],
    script: [
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/global.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/gtm'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-analytics',
    '@nuxtjs/dotenv'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/gtm',
  ],
  gtm: {
    enabled: true, /* see below */
    id: process.env.GOOGLE_TAG_MANAGER_ID
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
