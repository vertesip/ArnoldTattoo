<template>
  <main>
    <NavBar />
    <BannerSection />
    <AboutMeSection />
    <GallerySection />
    <!--  <BookingSection />-->
    <!--  <ShirtsSection /> -->
    <GoogleMap />
    <!--  <ContactSection />-->
    <FooterElement />
  </main>
</template>

<script>
export default {
  name: "IndexPage",
};
</script>

<style scoped>
* {
  min-height: 0;
  min-width: 0;
}

html {
  scroll-behavior: smooth;
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
</style>
