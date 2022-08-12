<template>
  <section
    id="shirts"
    style="background-image: linear-gradient( to bottom, rgba(13,13,13,1), rgba(13,13,13,0), rgba(13,13,13,1) ),linear-gradient( to top, rgba(13,13,13,1), rgba(13,13,13,0.8), rgba(13,13,13,1) ),url('ship.webp');">
    <div
      class="flex max-w-7xl mx-auto p-4 flex-wrap justify-around my-20 gap-3"
    >
       <div class="flex flex-shrink-0 relative sm:w-auto overflow-hidden shirt-wrapper">
                    <img
                      src="photo.webp"
                      class="object-cover object-center w-full z-10 max-w-md w-full shadow-md photo"
                    />
                    <img
                      class="
                        instagram-pic
                        object-cover object-center
                        w-full
                        z-0
                        absolute
                      "
                      src="shirt2.webp"
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
      <p class="text-white flex items-center">
        Arnold tattoo pólók már elérhetők a szalonban.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "ShirtsSection",
};
</script>

<style scoped>
section {
  background: #0d0d0d;
  z-index: 0;
  background-size: cover;
}

p {
  text-shadow: 1px 1px black;
}

@media only screen and (max-width: 832px) {
  section > div {
    margin: 20px 0;
    gap: 50px;
  }
}

@media (min-width: 501px) and (max-width: 640px) {

  .photo{
    margin: 0 auto;
  }
  .instagram-pic{
    height: 100%;
    width: 100%;
    margin: 0 auto;
  }
}
@media (min-width: 200px) and (max-width: 500px) {

  .photo{
    margin: 0 auto;
  }
  .instagram-pic{
    height: 100%;
    width: 100%;
    margin: 0 auto;
  }

  .shirt-wrapper{
    width: 100%;
  }
}
</style>
