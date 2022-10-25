<template>
  <section
    id="gallery"
    class="relative"
    style="
      background-image: linear-gradient(
          to bottom,
          rgba(13, 13, 13, 1),
          rgba(13, 13, 13, 0),
          rgba(13, 13, 13, 1)
        ),
        linear-gradient(
          to top,
          rgba(13, 13, 13, 1),
          rgba(13, 13, 13, 0.8),
          rgba(13, 13, 13, 1)
        ),
        url(background.webp);
    "
  >
    <modal
      ref="listing"
      name="listing"
      :adaptive="true"
      width="90%"
      :maxWidth="900"
      height="auto"
      :scrollable="true"
      @before-open="handleBeforeOpen"
    >
      <img :src="modalImage" />
    </modal>
    <div class="lds-ring">
      <div />
      <div />
      <div />
      <div />
    </div>

    <div class="slider-wrapper max-w-7xl mx-auto">
      <div class="container mx-auto relative">
        <div
          class="
            flex
            items-center
            justify-between
            absolute
            inset-0
            w-full
            h-full
          "
        >
          <button
            id="next"
            role="button"
            aria-label="slide forward"
            class="
              z-30
              ml-10
              focus:outline-none
              focus:bg-gray-400
              focus:ring-2
              focus:ring-offset-2
              focus:ring-gray-400
            "
            @click="showPrev"
          >
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 1L1 7L7 13"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <button
            id="next"
            role="button"
            aria-label="slide forward"
            class="
              z-30
              mr-10
              focus:outline-none
              focus:bg-gray-400
              focus:ring-2
              focus:ring-offset-2
              focus:ring-gray-400
            "
            @click="showNext"
          >
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L7 7L1 13"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
        <div
          class="flex items-center justify-center w-full h-full sm:py-8 px-4"
        >
          <div class="slider">
            <div class="slide-ana">
              <VueSlickCarousel
                v-if="this.images.length > 3"
                v-bind="settings"
                ref="carousel"
              >
                <div
                  class="px-3"
                  @click="showImage(image)"
                  v-for="(image, index) in images"
                  :key="index"
                >
                  <div
                    class="
                      flex flex-shrink-0
                      relative
                      w-full
                      sm:w-auto
                      cursor-pointer
                      overflow-hidden
                    "
                  >
                    <img
                      src="photo.webp"
                      class="object-contain object-center w-full z-10"
                    />
                    <img
                      class="
                        instagram-pic
                        object-cover object-center
                        w-full
                        z-0
                        absolute
                      "
                      :src="image"
                    />
                    <div
                      class="
                        bg-gray-800 bg-opacity-30
                        absolute
                        w-full
                        h-full
                        p-6
                      "
                    ></div>
                  </div>
                </div>
              </VueSlickCarousel>
            </div>
          </div>
        </div>
      </div>
    </div>
    <nuxt-link :to="{ path: '/galleria' }" style="border-bottom: none">
      <button
        class="btn btn-blue flex justify-center text-white text-2xl more-pics"
      >
        Kattints ide a többi képért
      </button>
    </nuxt-link>
  </section>
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
  name: "GallerySection",
  components: { VueSlickCarousel },
  data() {
    return {
      settings: {
        dots: false,
        infinite: true,
        arrows: false,
        autoplay: true,
        mobileFirst: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        touchThreshold: 5,
        responsive: [
          { breakpoint: 2000, settings: { slidesToShow: 3 } },
          { breakpoint: 1000, settings: { arrows: false, slidesToShow: 2 } },
          { breakpoint: 770, settings: { arrows: false, slidesToShow: 1 } },
        ],
      },
      images: [],
      modalImage: "",
      // windowWidth: window.innerWidth
    };
  },
  mounted() {
    document.querySelector(".slider-wrapper").style.opacity = "1";
    document.querySelector(".lds-ring").style.opacity = "0";

    if (typeof window !== "undefined") {
      if (window.innerWidth > 1339) {
        this.settings.slidesToShow = 3;
      } else if (window.innerWidth > 1079) {
        this.settings.slidesToShow = 2;
      } else if (window.innerWidth > 767) {
        this.settings.slidesToShow = 1;
      } else {
        this.settings.slidesToShow = 1;
      }

      this.hide();
    }

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
  computed: {},
  methods: {
    showNext() {
      this.$refs.carousel.next();
    },
    showPrev() {
      this.$refs.carousel.prev();
    },
    show() {
      this.$modal.show("listing");
    },
    hide() {
      this.$modal.hide("listing");
    },
    showImage(image) {
      this.show();
      this.modalImage = image;
    },
    handleBeforeOpen() {
      this.$refs.listing.modal.renderedHeight = "";
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;0,900;1,400&display=swap");
@import url("https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css");

#gallery {
  padding-bottom: 40px;
}
.vm--container .vm--modal {
  max-width: 90vh !important;
  margin: 10px auto !important;
}

section {
  background: #0d0d0d;
  background-size: cover;
}
.slider-wrapper {
  display: flex;
  opacity: 0;
  flex-direction: column;
}
.gallery-background {
  height: 100vh;
  width: 100%;
  object-fit: cover;

  /*-webkit-mask-image: linear-gradient(to bottom, black 50%, transparent 100%);*/
  /*mask-image: linear-gradient(to bottom, black 50%, transparent 100%);*/
}
.slider {
  width: 100%;
  height: 600px;
  position: relative;
  overflow: hidden;
}
.slide-ana {
  height: 600px;
}
.slide-ana > div {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  position: absolute;
  transition: all 1s;
}
.instagram-pic {
  margin: 26px;
  max-width: 340px;
  max-height: 360px;
  object-fit: cover;
  transition: 0.4s;
}
.slick-slide:hover .instagram-pic {
  transform: scale(1.2);
}
@media (min-width: 0px) and (max-width: 339px) {
  .slider {
    height: 490px;
  }
  .instagram-pic {
    margin: 5vw;
    max-width: 74vw;
    max-height: 77vw;
  }
}

@media (min-width: 340px) and (max-width: 580px) {
  .slider {
    height: 600px;
  }
  .instagram-pic {
    margin: 2.112676056338028vw;
    max-width: 82vw;
    max-height: 85vw;
  }
}

@media (min-width: 581px) and (max-width: 766px) {
  .slider {
    height: 800px;
  }
  .instagram-pic {
    margin: 35px;
    max-width: 518px;
    max-height: 525px;
  }
}
@media (min-width: 767px) and (max-width: 770px) {
  .slider {
    height: 800px;
  }
  .instagram-pic {
    margin: 35px;
    max-width: 636px;
    max-height: 642px;
  }
}
@media (min-width: 771px) and (max-width: 999px) {
  .slider {
    height: 581px;
  }
  .instagram-pic {
    margin: 24px;
    max-width: 297px;
    max-height: 307px;
  }
}
@media (min-width: 1000px) and (max-width: 1023px) {
  .slider {
    height: 581px;
  }
  .instagram-pic {
    margin: 15px;
    max-width: 192px;
    max-height: 199px;
  }
}
@media (min-width: 1024px) and (max-width: 1280px) {
  .slider {
    height: 379px;
  }
  .instagram-pic {
    margin: 20px;
    max-width: 272px;
    max-height: 282px;
  }
}

@media only screen and (max-width: 649px) {
  .more-pics {
    margin-bottom: 60px !important;
  }
  #gallery {
    padding-bottom: 0;
  }
}
.slider2 {
  width: 100%;
  height: 395px;
  position: relative;
  overflow: hidden;
}
.slide-ana2 {
  height: 100%;
}
.slide-ana2 > div {
  width: 100%;
  height: 100%;
  position: absolute;
  transition: all 1s;
}
@media (min-width: 300px) and (max-width: 1023px) {
  .slider2 {
    height: 378px;
  }
}

.lds-ring {
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  top: 50%;
  opacity: 1;
  margin: 0 auto;
  width: 80px;
  height: 80px;
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 8px solid #fff;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #fff transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.btn {
  @apply font-bold py-2 px-4 rounded;
}
.btn-blue {
  background-color: white;
  color: #0d0d0d;
  margin: 0 auto;
  transition: 0.4s;
  font-weight: 500;
  padding: 10px 45px;
  font-weight: 400;
  font-size: 20px;
}
.btn-blue:hover {
  background-color: #c3c3bf;
}
</style>
