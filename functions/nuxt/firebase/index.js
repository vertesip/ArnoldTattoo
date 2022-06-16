import createApp from './app.js'

import authService from './service.auth.js'
import firestoreService from './service.firestore.js'

const appConfig = {"apiKey":"AIzaSyCAi1U-S3YNGcG-YitKZh_5FVV6GaaQOE4","authDomain":"arnoldtattoo.firebaseapp.com","databaseURL":"https:\u002F\u002Farnoldtattoo-default-rtdb.europe-west1.firebasedatabase.app","projectId":"arnoldtattoo","storageBucket":"arnoldtattoo.appspot.com","messagingSenderId":"825404803784","appId":"1:825404803784:web:adf329278e1e410e3833fd","measurementId":"G-31P3BJ2ZPT"}

export default async (ctx, inject) => {
  const { firebase, session } = await createApp(appConfig, ctx)

  let servicePromises = []

  if (process.server) {
    servicePromises = [
      authService(session, firebase, ctx, inject),
    firestoreService(session, firebase, ctx, inject),

    ]
  }

  if (process.client) {
    servicePromises = [
      authService(session, firebase, ctx, inject),
      firestoreService(session, firebase, ctx, inject),

    ]
  }

  const [
    auth,
    firestore
  ] = await Promise.all(servicePromises)

  const fire = {
    auth: auth,
    firestore: firestore
  }

    inject('fireModule', firebase)
    ctx.$fireModule = firebase

  inject('fire', fire)
  ctx.$fire = fire
}

function forceInject (ctx, inject, key, value) {
  inject(key, value)
  const injectKey = '$' + key
  ctx[injectKey] = value
  if (typeof window !== "undefined" && window.$nuxt) {
  // If clause makes sure it's only run when ready() is called in a component, not in a plugin.
    window.$nuxt.$options[injectKey] = value
  }
}