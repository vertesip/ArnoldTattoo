import firebase from 'firebase/compat/app'
import 'firebase/storage';

if (!firebase.apps.length) {
  firebase.initializeApp(
    {
      apiKey: 'AIzaSyCAi1U-S3YNGcG-YitKZh_5FVV6GaaQOE4',
      authDomain: 'arnoldtattoo.firebaseapp.com',
      databaseURL: 'https://arnoldtattoo-default-rtdb.europe-west1.firebasedatabase.app',
      projectId: 'arnoldtattoo',
      storageBucket: 'arnoldtattoo.appspot.com',
      messagingSenderId: '825404803784',
      appId: '1:825404803784:web:adf329278e1e410e3833fd',
      measurementId: 'G-31P3BJ2ZPT'
    }
  )
}