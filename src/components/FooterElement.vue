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
      <span class="text-sm sm:text-center text-white">© 2022
        <a href="https://flowbite.com" class="hover:underline">Arnold Tattoo</a>.
        All Rights Reserved.
      </span>
      <ul
        class="
        flex flex-wrap
        items-center
        mt-3
        text-sm
        text-white
        sm:mt-0
      "
      >
        <li>
          <a href="#" class="mr-4 hover:underline md:mr-6">About</a>
        </li>
        <li>
          <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
        </li>
        <li>
          <a href="#" class="mr-4 hover:underline md:mr-6">Licensing</a>
        </li>
        <li>
          <a href="#" class="hover:underline">Contact</a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterElement'
}
</script>

<style scoped>
footer {
  margin-top: auto;
  background: #0e0e0e;
}
</style>
