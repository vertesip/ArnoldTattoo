<template>
  <footer
    class="
      p-4
      shadow
      md:flex md:items-center md:justify-between md:p-6
      dark:bg-gray-800
    "
  >
    <div class="max-w-7xl mx-auto flex w-full justify-between">
      <div class="flex flex-col gap-2">
        <span class="text-sm sm:text-center text-white"
          >© 2022 Arnold Tattoo. Minden jog fenntartva
        </span>
        <div class="flex gap-3">
          <a href="https://www.facebook.com/arnoldt.tattoo" target="_blank">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="facebook-f"
              class="h-5 w-5 fill-current text-white"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path
                fill="currentColor"
                d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
              />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/kolozsvari_arnold/"
            target="_blank"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="instagram"
              class="h-5 w-5 fill-current text-white"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
              />
            </svg>
          </a>
        </div>
      </div>
      <!-- <ul class="flex flex-wrap items-center mt-3 text-sm text-white sm:mt-0">
        <li>
          <nuxt-link :to="{ path: '/adatvedelem' }" style="border-bottom: none"
            >Adatvédelmi nyilatkozat</nuxt-link
          >
        </li>
      </ul> -->
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterElement",
};
</script>

<style scoped>
footer {
  margin-top: auto;
  background: #0e0e0e;
}

@media only screen and (max-width: 766px) {
  footer > div {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  footer > div > span {
    text-align: left;
  }
}
</style>
