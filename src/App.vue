<template>
  <div id="app">
    <video autoplay loop muted class="site-bg-vid">
      <source src="./assets/vid/Particles.mp4" />
    </video>
    <Navbar />
    <router-view />
  </div>
</template>

<style lang="scss">
@import "assets/sass/bv-custom.sass";
</style>

<style>
.site-bg-vid {
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  z-index: -99999;
}
/* #app {
  background-color: #111111;
  min-height: 100vh;
  z-index: inherit;
  background: transparent;
} */
</style>

<script>
import Navbar from "./components/Navbar.vue";
export default {
  name: "App",
  components: {
    Navbar
  }
};
</script>
