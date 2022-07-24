<template>
  <section id="booking">
    <!-- <div class="lds-ring">
      <div />
      <div />
      <div />
      <div />
    </div> -->
    <vue-calendly
      url="https://calendly.com/arnoldtattoo"
      :height="700"
    ></vue-calendly>
  </section>
</template>

<script>
export default {
  name: "BookingSection",
  mounted() {
    /*     document.querySelector("iframe").style.opacity = "1";
    document.querySelector(".lds-ring").style.opacity = "0"; */
  },
};
</script>

<style scoped>
section {
  height: 700px;
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

section {
  background: #0d0d0d;
}
</style>