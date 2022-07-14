const webpack = require('webpack')

module.exports = {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ArnoldTattoo',
    htmlAttrs: {
      lang: 'en'
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
    "~/node_modules/bootstrap/dist/css/bootstrap.min.css"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js", mode: "client" },

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
      realtimeDb: true
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    plugins: [
      new webpack.ProvidePlugin({
        jQuery: 'jQuery',
        $: 'jQuery',
        'window.jQuery': 'jQuery'
      })
    ]
  }
}
