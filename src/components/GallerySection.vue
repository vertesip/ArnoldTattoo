<template>
  <section style="background-image: url('background.jpg')">
    <img class="mx-auto my-20" src="gallery.png" alt="Gallery header">
    <div class="container mx-auto relative">
      <div
        class="flex items-center justify-between absolute inset-0 w-full h-full"
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
            mr-16
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
                    src="https://i.ibb.co/fDngH9G/carosel-1.png"
                    alt="black chair and white table"
                    class="object-cover object-center w-full"
                  >
                  <div
                    class="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6"
                  >
                    <h2
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
                    </div>
                  </div>
                </div>
              </div>
              <div class="px-3">
                <div class="flex flex-shrink-0 relative w-full sm:w-auto">
                  <img
                    src="https://i.ibb.co/DWrGxX6/carosel-2.png"
                    alt="sitting area"
                    class="object-cover object-center w-full"
                  >
                  <div
                    class="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6"
                  >
                    <h2
                      class="
                        lg:text-xl
                        leading-4
                        text-base
                        lg:leading-5
                        text-white
                      "
                    >
                      Catalog 2
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
                    </div>
                  </div>
                </div>
              </div>
              <div class="px-3">
                <div class="flex flex-shrink-0 relative w-full sm:w-auto">
                  <img
                    src="https://i.ibb.co/tCfVky2/carosel-3.png"
                    alt="sitting area"
                    class="object-cover object-center w-full"
                  >
                  <div
                    class="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6"
                  >
                    <h2
                      class="
                        lg:text-xl
                        leading-4
                        text-base
                        lg:leading-5
                        text-white
                      "
                    >
                      Catalog 2
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
                    </div>
                  </div>
                </div>
              </div>
              <div class="px-3">
                <div class="flex flex-shrink-0 relative w-full sm:w-auto">
                  <img
                    src="https://i.ibb.co/rFsGfr5/carosel-4.png"
                    alt="sitting area"
                    class="object-cover object-center w-full"
                  >
                  <div
                    class="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6"
                  >
                    <h2
                      class="
                        lg:text-xl
                        leading-4
                        text-base
                        lg:leading-5
                        text-white
                      "
                    >
                      Catalog 2
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
                    </div>
                  </div>
                </div>
              </div>
              <div class="px-3">
                <div class="flex flex-shrink-0 relative w-full sm:w-auto">
                  <img
                    src="https://i.ibb.co/fDngH9G/carosel-1.png"
                    alt="black chair and white table"
                    class="object-cover object-center w-full"
                  >
                  <div
                    class="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6"
                  >
                    <h2
                      class="
                        lg:text-xl
                        leading-4
                        text-base
                        lg:leading-5
                        text-white
                      "
                    >
                      Catalog 2
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
                    </div>
                  </div>
                </div>
              </div>
              <div class="px-3">
                <div class="flex flex-shrink-0 relative w-full sm:w-auto">
                  <img
                    src="https://i.ibb.co/DWrGxX6/carosel-2.png"
                    alt="sitting area"
                    class="object-cover object-center w-full"
                  >
                  <div
                    class="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6"
                  >
                    <h2
                      class="
                        lg:text-xl
                        leading-4
                        text-base
                        lg:leading-5
                        text-white
                      "
                    >
                      Catalog 2
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
                    </div>
                  </div>
                </div>
              </div>
              <div class="px-3">
                <div class="flex flex-shrink-0 relative w-full sm:w-auto">
                  <img
                    src="https://i.ibb.co/tCfVky2/carosel-3.png"
                    alt="sitting area"
                    class="object-cover object-center w-full"
                  >
                  <div
                    class="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6"
                  >
                    <h2
                      class="
                        lg:text-xl
                        leading-4
                        text-base
                        lg:leading-5
                        text-white
                      "
                    >
                      Catalog 2
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
                    </div>
                  </div>
                </div>
              </div>
              <div class="px-3">
                <div class="flex flex-shrink-0 relative w-full sm:w-auto">
                  <img
                    src="https://i.ibb.co/rFsGfr5/carosel-4.png"
                    alt="sitting area"
                    class="object-cover object-center w-full"
                  >
                  <div
                    class="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6"
                  >
                    <h2
                      class="
                        lg:text-xl
                        leading-4
                        text-base
                        lg:leading-5
                        text-white
                      "
                    >
                      Catalog 2
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
                    </div>
                  </div>
                </div>
              </div>
              <div class="px-3">
                <div class="flex flex-shrink-0 relative w-full sm:w-auto">
                  <img
                    src="https://i.ibb.co/fDngH9G/carosel-1.png"
                    alt="black chair and white table"
                    class="object-cover object-center w-full"
                  >
                  <div
                    class="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6"
                  >
                    <h2
                      class="
                        texlg:t-xl
                        le
                        leading-4
                        text-basealg:ding-tight
                        text-white
                      "
                    >
                      Catalog 2
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
                    </div>
                  </div>
                </div>
              </div>
              <div class="px-3">
                <div class="flex flex-shrink-0 relative w-full sm:w-auto">
                  <img
                    src="https://i.ibb.co/DWrGxX6/carosel-2.png"
                    alt="sitting area"
                    class="object-cover object-center w-full"
                  >
                  <div
                    class="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6"
                  >
                    <h2
                      class="
                        lg:text-xl
                        leading-4
                        text-base
                        lg:leading-5
                        text-white
                      "
                    >
                      Catalog 2
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
                    </div>
                  </div>
                </div>
              </div>
              <div class="px-3">
                <div class="flex flex-shrink-0 relative w-full sm:w-auto">
                  <img
                    src="https://i.ibb.co/tCfVky2/carosel-3.png"
                    alt="sitting area"
                    class="object-cover object-center w-full"
                  >
                  <div
                    class="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6"
                  >
                    <h2
                      class="
                        lg:text-xl
                        leading-4
                        text-base
                        lg:leading-5
                        text-white
                      "
                    >
                      Catalog 2
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
                    </div>
                  </div>
                </div>
              </div>
              <div class="px-3">
                <div class="flex flex-shrink-0 relative w-full sm:w-auto">
                  <img
                    src="https://i.ibb.co/rFsGfr5/carosel-4.png"
                    alt="sitting area"
                    class="object-cover object-center w-full"
                  >
                  <div
                    class="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6"
                  >
                    <h2
                      class="
                        lg:text-xl
                        leading-4
                        text-base
                        lg:leading-5
                        text-white
                      "
                    >
                      Catalog 2
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
                    </div>
                  </div>
                </div>
              </div>
            </VueSlickCarousel>
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
  width: 100%;
  height: 100%;
  position: absolute;
  transition: all 1s;
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
</style>
