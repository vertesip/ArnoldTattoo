<template>
  <main>
    <NavBar />
    <img class="mx-auto mt-20 g-header" src="gallery.webp" alt="Gallery header" />
    <nuxt-link :to="{ path: '/' }" style="border-bottom: none">
      <p class="flex justify-center mt-28 mb-14 text-white text-2xl">
        Vissza a főoldalra
      </p>
    </nuxt-link>
    <div
      class="flex flex-wrap justify-center"
      v-if="this.images.length > 3"
      v-bind="settings"
    >
      <div
        class="px-3 image-wrapper"
        v-for="(image, index) in images"
        :key="index"
      >
        <div class="flex flex-shrink-0 relative w-full sm:w-auto">
          <img
            src="photo.webp"
            class="object-cover object-center w-full z-10"
          />
          <img
            class="instagram-pic object-cover object-center w-full z-0 absolute"
            :src="image"
          />
          <div
            class="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6"
          ></div>
        </div>
      </div>
    </div>
    <FooterElement />
  </main>
</template>

<script>
import { listRef } from "~/plugins/firebase.js";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";

import firebase from "firebase/compat/app";
import "firebase/storage";
import { getApp } from "firebase/app";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";

export default {
  name: "GalleryPage",
  data() {
    return {
      images: [],
    };
  },
  mounted() {
    const firebaseApp = getApp();
    const storage = getStorage(firebaseApp, "gs://arnoldtattoo.appspot.com");

    // Create a reference under which you want to list
    const listRef = ref(storage);
    let array = [];
    // Find all the prefixes and items.
    listAll(listRef)
      .then((res) => {
        res.prefixes.forEach((folderRef) => {
          // All the prefixes under listRef.
          // You may call listAll() recursively on them.
          // console.log(folderRef);
        });

        res.items.forEach((itemRef) => {
          // All the items under listRef.

          getDownloadURL(ref(storage, itemRef._location.path))
            .then((url) => {
              this.images.push(url);
            })
            .catch((error) => {
              // Handle any errors
            });
        });
      })
      .catch((error) => {
        // Uh-oh, an error occurred!
        console.log(error);
      });

    //console.log(typeof this.images)
  },
};
</script>

<style scoped>
html {
  scroll-behavior: smooth;
  background: #0d0d0d;
}
main {
  background: #0d0d0d;
}

body {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
#__nuxt {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
#__layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
#__layout > main {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.image-wrapper {
  max-width: 416px;
  margin-top: 20px;
}

.instagram-pic {
  margin: 26px;
  max-width: 340px;
  max-height: 360px;
  object-fit: fill;
}

@media (min-width: 0px) and (max-width: 420px) {
  .instagram-pic{
    margin: 2.112676056338028vw;
    max-width: 85vw;
    max-height: 90vw;
  }
}

.g-header{
  max-width: 500px;
  max-height: 150px;
  width: 100%;
}
</style>
