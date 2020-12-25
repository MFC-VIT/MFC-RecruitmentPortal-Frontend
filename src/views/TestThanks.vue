<template>
  <b-container fluid>
    <b-row class="site-tt-main-bg ml-5 mr-5 mt-2 mt-md-5 p-5">
      <b-col offset="3" cols="6" class="d-md-none">
        <b-img fluid :src="require('../assets/img/logo.png')"></b-img>
      </b-col>
      <b-col md="8">
        <h1 class="site-tt-text-1">You are finished with the test!!!</h1>
        <br />
        <h3 class="site-tt-text-2">Stay Tuned to our Social Media for the results!</h3>
        <br />
        <br />
        <br />
        <div class="text-white">
          <b-button to="/test" squared variant="outline-moz-orange">
            <strong>Attempt Other Domains</strong>
          </b-button>
          <i class="fab fa-2x fa-instagram p-2 pointer-cursor" @click="gotoInstagram"></i>
          <i class="fab fa-2x fa-facebook-f p-2 pointer-cursor" @click="gotoFacebook"></i>
          <i class="fab fa-2x fa-linkedin-in p-2 pointer-cursor" @click="gotoLinkedIn"></i>
        </div>
      </b-col>
      <b-col class="d-none d-md-block" md="4">
        <b-img fluid :src="require('../assets/img/logo.png')"></b-img>
      </b-col>
    </b-row>
  </b-container>
</template>

<style scoped>
@media screen and (min-width: 769px) {
  .site-tt-main-bg {
    background-color: rgba(128, 179, 240, 0.26);
    border-radius: 10px;
  }
  .site-tt-text-1 {
    color: white;
    font-size: 5.5rem;
  }
  .site-tt-text-2 {
    color: #e66100;
    font-size: 2.25rem;
  }
}
@media screen and (max-width: 768px) {
  .site-tt-main-bg {
    background-color: rgba(128, 179, 240, 0.26);
    border-radius: 10px;
  }
  .site-tt-text-1 {
    color: white;
    font-size: 2.5rem;
  }
  .site-tt-text-2 {
    color: #e66100;
    font-size: 1.5rem;
  }
}
.pointer-cursor {
  cursor: pointer;
}
.fab {
  position: relative;
  top: 7px;
}
</style>

<script>
export default {
  name: "TestThanks",
  methods: {
    gotoInstagram() {
      this.$router.push("/social/instagram");
    },
    gotoFacebook() {
      this.$router.push("/social/facebook");
    },
    gotoLinkedIn() {
      this.$router.push("/social/linkedin");
    }
  }
};
</script>