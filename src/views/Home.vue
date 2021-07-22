<template>
  <b-container fluid>
    <b-row class="ml-md-5 mt-md-5" align-v="center">
      <b-col offset="3" cols="6" class="d-md-none">
        <b-img fluid :src="require('../assets/img/logo.png')"></b-img>
      </b-col>
      <b-col cols="12" md="8">
        <h1 class="site-home-text-1">Mozilla</h1>
        <h1 class="site-home-text-2">Firefox Club-VIT</h1>
        <p
          class="site-home-text-3"
        >is one of the largest developers' communities in VIT University aiding you to change your ideas into reality. It is a technical club dedicated to expand the technical know-how and productivity of all the future engineers and scientists. it is a common platform for intercollege Technical Activities. Under the precious guidance of the faculty members, this club is all set to and will create new horizons in the development of the college.</p>
        <br />
        <p
          class="site-home-text-4"
        >Attempt the Test, if you think you have what it takes to be a part of us ;)</p>
        <div class="d-flex d-inline-flex">
          <b-button
            size="lg"
            to="/user/register"
            squared
            variant="outline-light"
            class="m-2"
          >Sign Up</b-button>
          <b-button size="lg" to="/user/login" squared variant="outline-light" class="m-2">
            <div class="px-2">Login</div>
          </b-button>
        </div>
      </b-col>
      <b-col class="d-none d-md-block" md="4">
        <b-img fluid :src="require('../assets/img/logo.png')"></b-img>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  methods: {
    apitest() {
      const email = "avish.j@protonmail.com";
      const username = "avishj";
      const phone_number = "7488259466";
      const password = "thisisatest";
      this.$store
        .dispatch("register", email, username, phone_number, password)
        // eslint-disable-next-line no-unused-vars
        .then(success => {
          alert("Kaam karta hai tera API");
        })
        .catch(error => {
          alert(error);
        });
    },
    rejectLogin() {
      alert(
        "Login is currently not allowed! Please register yourself and you'll be notified when the recruitment process is live and you will be able to login then!"
      );
    }
  }
};
</script>

<style scoped>
@media screen and (min-width: 769px) {
  .site-home-text-1 {
    color: #e66100;
    font-size: 5.5rem;
  }
  .site-home-text-2 {
    color: white;
    font-size: 5.5rem;
  }
  .site-home-text-3 {
    color: white;
    font-size: 1.25rem;
  }
  .site-home-text-4 {
    color: #e66100;
    font-size: 1.25rem;
  }
  .site-home-text-5 {
    color: white;
    font-size: 1.25rem;
  }
}
@media screen and (max-width: 768px) {
  .site-home-text-1 {
    color: #e66100;
    font-size: 2.5rem;
  }
  .site-home-text-2 {
    color: white;
    font-size: 2.5rem;
  }
  .site-home-text-3 {
    color: white;
    font-size: 1rem;
  }
  .site-home-text-4 {
    color: #e66100;
    font-size: 1rem;
  }
  .site-home-text-5 {
    color: white;
    font-size: 1rem;
  }
}
</style>
