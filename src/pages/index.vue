<template>
  <main>
    <NavBar />
    <BannerSection />
    <AboutMeSection />
    <GallerySection />
    <BookingSection />
    <ShirtsSection />
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
html {
  scroll-behavior: smooth;
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
