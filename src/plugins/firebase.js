import firebase from 'firebase/compat/app'
import 'firebase/storage';
import { getApp } from "firebase/app";
import { getStorage, ref, listAll  } from "firebase/storage";

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

const firebaseApp = getApp();
const storage = getStorage(firebaseApp, "gs://arnoldtattoo.appspot.com");

// Create a reference under which you want to list
const listRef = ref(storage);

// Find all the prefixes and items.
listAll(listRef)
  .then((res) => {
    res.prefixes.forEach((folderRef) => {
      // All the prefixes under listRef.
      // You may call listAll() recursively on them.
      console.log(folderRef)
    });
    res.items.forEach((itemRef) => {
      // All the items under listRef.
      console.log(itemRef);
    });
  }).catch((error) => {
    // Uh-oh, an error occurred!
    console.log(error)
  });

