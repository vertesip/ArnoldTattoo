<template>
  <section style="background-image: linear-gradient( to bottom, rgba(13,13,13,1), rgba(13,13,13,0), rgba(13,13,13,1) ),linear-gradient( to top, rgba(13,13,13,1), rgba(13,13,13,0.8), rgba(13,13,13,1) ),url('ship.jpeg');">
    <div class="flex max-w-7xl mx-auto p-4 flex-wrap justify-around">
      <img class="max-w-md w-full" src="shirt2.jpg">
      <p class="text-white flex items-center">
        Arnold tattoo pólók már elérhetők a szalonban
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ShirtsSection'
}
</script>

<style scoped>
section {
  background: #0d0d0d;
  z-index: 0;
  background-size: cover;
}
</style>
