module.exports = {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Arnold Tattoo',
    htmlAttrs: {
      lang: 'hu'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/calendly.js', ssr: false },
    { src: '~plugins/firebase.js' },
    { src: '~plugins/googlemaps.js' },
    { src: '~plugins/modal.js', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/tailwindcss'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/firebase',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/axios'],
  firebase: {
    config: {
      apiKey: 'AIzaSyCAi1U-S3YNGcG-YitKZh_5FVV6GaaQOE4',
      authDomain: 'arnoldtattoo.firebaseapp.com',
      databaseURL: 'https://arnoldtattoo-default-rtdb.europe-west1.firebasedatabase.app',
      projectId: 'arnoldtattoo',
      storageBucket: 'arnoldtattoo.appspot.com',
      messagingSenderId: '825404803784',
      appId: '1:825404803784:web:adf329278e1e410e3833fd',
      measurementId: 'G-31P3BJ2ZPT'
    },
    services: {
      auth: true,
      firestore: true,
      realtimeDb: true,
      analytics: true
    }
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^vue2-google-maps($|\/)/],
    loaders: {
      vue: {
        prettify: false
      }
    }
  }
}
