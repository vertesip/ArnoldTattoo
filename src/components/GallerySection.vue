<template>
  <section class="relative" style="background-image: url('background.jpg')">
    <img class="mx-auto my-20" src="gallery.png" alt="Gallery header">

    <div class="lds-ring">
      <div />
      <div />
      <div />
      <div />
    </div>

    <div class="slider-wrapper">
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
          class="
            flex
            items-center
            justify-center
            w-full
            h-full
            py-24
            sm:py-8
            px-4
          "
        >
          <div class="slider">
            <div class="slide-ana">
              <VueSlickCarousel v-bind="settings" ref="carousel">
                <div class="px-3">
                  <div class="flex flex-shrink-0 relative w-full sm:w-auto">
                    <img
                      src="photo.png"
                      alt="black chair and white table"
                      class="object-cover object-center w-full z-10"
                    >
                    <img
                      src="https://images.unsplash.com/photo-1568515045052-f9a854d70bfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                      alt="black chair and white table"
                      class="
                        instagram-pic
                        object-cover object-center
                        w-full
                        z-0
                        absolute
                      "
                    >
                    <div
                      class="
                        bg-gray-800 bg-opacity-30
                        absolute
                        w-full
                        h-full
                        p-6
                      "
                    >
                      <!--   <h2
                      class="
                        lg:text-xl
                        leading-4
                        text-base
                        lg:leading-5
                        text-white
                      "
                    >
                      Catalog 1
                    </h2>
                    <div class="flex h-full items-end pb-6">
                      <h3
                        class="
                          text-xl
                          lg:text-2xl
                          font-semibold
                          leading-5
                          lg:leading-6
                          text-white
                        "
                      >
                        Minimal Interior
                      </h3>
                    </div> -->
                    </div>
                  </div>
                </div>
                <div class="px-3">
                  <div class="flex flex-shrink-0 relative w-full sm:w-auto">
                    <img
                      src="photo.png"
                      alt="black chair and white table"
                      class="object-cover object-center w-full z-10"
                    >
                    <img
                      src="https://images.unsplash.com/photo-1605647533135-51b5906087d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                      alt="black chair and white table"
                      class="
                        instagram-pic
                        object-cover object-center
                        w-full
                        z-0
                        absolute
                      "
                    >
                    <div
                      class="
                        bg-gray-800 bg-opacity-30
                        absolute
                        w-full
                        h-full
                        p-6
                      "
                    >
                      <!--   <h2
                      class="
                        lg:text-xl
                        leading-4
                        text-base
                        lg:leading-5
                        text-white
                      "
                    >
                      Catalog 1
                    </h2>
                    <div class="flex h-full items-end pb-6">
                      <h3
                        class="
                          text-xl
                          lg:text-2xl
                          font-semibold
                          leading-5
                          lg:leading-6
                          text-white
                        "
                      >
                        Minimal Interior
                      </h3>
                    </div> -->
                    </div>
                  </div>
                </div>
                <div class="px-3">
                  <div class="flex flex-shrink-0 relative w-full sm:w-auto">
                    <img
                      src="photo.png"
                      alt="black chair and white table"
                      class="object-cover object-center w-full z-10"
                    >
                    <img
                      src="https://images.unsplash.com/photo-1579035478707-49db569751d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=733&q=80"
                      alt="black chair and white table"
                      class="
                        instagram-pic
                        object-cover object-center
                        w-full
                        z-0
                        absolute
                      "
                    >
                    <div
                      class="
                        bg-gray-800 bg-opacity-30
                        absolute
                        w-full
                        h-full
                        p-6
                      "
                    >
                      <!--   <h2
                      class="
                        lg:text-xl
                        leading-4
                        text-base
                        lg:leading-5
                        text-white
                      "
                    >
                      Catalog 1
                    </h2>
                    <div class="flex h-full items-end pb-6">
                      <h3
                        class="
                          text-xl
                          lg:text-2xl
                          font-semibold
                          leading-5
                          lg:leading-6
                          text-white
                        "
                      >
                        Minimal Interior
                      </h3>
                    </div> -->
                    </div>
                  </div>
                </div>
                <div class="px-3">
                  <div class="flex flex-shrink-0 relative w-full sm:w-auto">
                    <img
                      src="photo.png"
                      alt="black chair and white table"
                      class="object-cover object-center w-full z-10"
                    >
                    <img
                      src="https://images.unsplash.com/photo-1541121514895-0f36e7d38d14?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                      alt="black chair and white table"
                      class="
                        instagram-pic
                        object-cover object-center
                        w-full
                        z-0
                        absolute
                      "
                    >
                    <div
                      class="
                        bg-gray-800 bg-opacity-30
                        absolute
                        w-full
                        h-full
                        p-6
                      "
                    >
                      <!--   <h2
                      class="
                        lg:text-xl
                        leading-4
                        text-base
                        lg:leading-5
                        text-white
                      "
                    >
                      Catalog 1
                    </h2>
                    <div class="flex h-full items-end pb-6">
                      <h3
                        class="
                          text-xl
                          lg:text-2xl
                          font-semibold
                          leading-5
                          lg:leading-6
                          text-white
                        "
                      >
                        Minimal Interior
                      </h3>
                    </div> -->
                    </div>
                  </div>
                </div>
                <div class="px-3">
                  <div class="flex flex-shrink-0 relative w-full sm:w-auto">
                    <img
                      src="photo.png"
                      alt="black chair and white table"
                      class="object-cover object-center w-full z-10"
                    >
                    <img
                      src="https://images.unsplash.com/photo-1597852075234-fd721ac361d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                      alt="black chair and white table"
                      class="
                        instagram-pic
                        object-cover object-center
                        w-full
                        z-0
                        absolute
                      "
                    >
                    <div
                      class="
                        bg-gray-800 bg-opacity-30
                        absolute
                        w-full
                        h-full
                        p-6
                      "
                    >
                      <!--   <h2
                      class="
                        lg:text-xl
                        leading-4
                        text-base
                        lg:leading-5
                        text-white
                      "
                    >
                      Catalog 1
                    </h2>
                    <div class="flex h-full items-end pb-6">
                      <h3
                        class="
                          text-xl
                          lg:text-2xl
                          font-semibold
                          leading-5
                          lg:leading-6
                          text-white
                        "
                      >
                        Minimal Interior
                      </h3>
                    </div> -->
                    </div>
                  </div>
                </div>
              </VueSlickCarousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
export default {
  name: 'GallerySection',
  components: { VueSlickCarousel },
  data () {
    return {
      settings: {
        dots: false,
        infinite: true,
        arrows: false,
        autoplay: true,
        speed: 500,
        slidesToShow: 0,
        slidesToScroll: 1,
        touchThreshold: 5,
        responsive: [
          { breakpoint: 768, settings: { arrows: false, slidesToShow: 2 } },
          { breakpoint: 576, settings: { arrows: false, slidesToShow: 1 } }
        ]
      }
      // windowWidth: window.innerWidth
    }
  },
  mounted () {
    document.querySelector('.slider-wrapper').style.opacity = '1'
    document.querySelector('.lds-ring').style.opacity = '0'

    if (typeof window !== 'undefined') {
      if (window.innerWidth > 1339) {
        this.settings.slidesToShow = 3
      } else if (window.innerWidth > 1079) {
        this.settings.slidesToShow = 2
      } else if (window.innerWidth > 767) {
        this.settings.slidesToShow = 1
      } else {
        this.settings.slidesToShow = 1
      }
    }
  },
  methods: {
    showNext () {
      this.$refs.carousel.next()
    },
    showPrev () {
      this.$refs.carousel.prev()
    }
  }
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;0,900;1,400&display=swap");
@import url("https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css");
section {
  background: #0d0d0d;
  background: linear-gradient(to bottom, black 50%, transparent 100%),
    linear-gradient(to top, black 50%, transparent 100%);
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
  height: -webkit-fill-available;
}
@media (min-width: 300px) and (max-width: 884px) {
  .slider {
    height: 550px;
  }
}
@media (min-width: 768px) and (max-width: 1023px) {
  .slider {
    height: 581px;
  }
}
@media (min-width: 1024px) and (max-width: 1280px) {
  .slider {
    height: 379px;
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
</style>
