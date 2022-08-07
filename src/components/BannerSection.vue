<template>
  <section>
    <img class="logo" src="logo.webp" alt="Logo">
    <img class="banner" src="bg_logo_nelkul.webp" alt="Banner">
  </section>
</template>

<script>
export default {
  name: 'BannerSection'
}
</script>

<style scoped>
section{
    background: #0D0D0D;
    position: relative;
}
.banner {
  height: 100vh;
  width: 100%;
  object-fit: cover;

  -webkit-mask-image: linear-gradient(to bottom, black 50%, transparent 100%);
  mask-image: linear-gradient(to bottom, black 50%, transparent 100%);
}

.logo{
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    max-height: -webkit-fill-available;

    z-index: 1;
}
</style>
