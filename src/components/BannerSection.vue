<template>
  <div>
    <img class="logo" src="logo.png" alt="Logo">
    <img class="banner" src="bg_logo_nelkul.png" alt="Banner">
  </div>
</template>

<script>
export default {
  name: 'BannerSection'
}
</script>

<style scoped>
div{
    position: relative;
}
.banner {
  height: 100vh;
  width: 100%;
  object-fit: cover;
}

.logo{
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    max-height: -webkit-fill-available;
}
</style>
