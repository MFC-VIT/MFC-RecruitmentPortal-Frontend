<template>
  <b-container>
    <b-row alogn-v="center" align-h="center" class="mt-md-5">
      <b-col cols="11" md="5" class="site-login-main mt-md-5">
        <img src="./../assets/img/logo.png" alt="MFC Logo" class="site-login-logo" />
        <h3 class="text-white text-center site-login-nishchay">Wishes you luck!!!</h3>
        <b-form @submit="onSubmit" class="pb-2 text-white site-login-form">
          <b-form-group
            id="input-group-1"
            label="VIT Email Address:"
            label-size="lg"
            label-for="input-1"
          >
            <b-form-input
              id="input-1"
              v-model="email"
              type="email"
              pattern="[A-Za-z0-9.]+@vitstudent.ac.in|[A-Za-z0-9.]+@vit.ac.in"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group id="input-group-4" label="Password:" label-size="lg" label-for="input-4">
            <b-form-input
              id="input-4"
              v-model="password"
              type="password"
              autocomplete="new-password"
              required
            ></b-form-input>
            <div
              @click="resetPassword"
              class="text-moz-orange text-right mt-1 site-login-fp"
            >Forgot Password?</div>
          </b-form-group>
          <br />
          <b-button block pill type="submit" variant="moz-orange">
            <strong class="site-login-btn-text">Login</strong>
          </b-button>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      this.$store
        .dispatch("userLogin", {
          email: this.email,
          password: this.password
        })
        .then(() => {
          this.$router.push({ name: "Test" });
        })
        .catch(err => {
          alert(err);
        });
      // alert(
      //   "Login is disabled now! Timing are from 10AM-10PM! Please check back in within time!"
      // );
    },
    resetPassword() {
      this.$router.push({ name: "Reset" });
    }
  }
};
</script>

<style scoped>
.site-login-main {
  background-color: rgba(128, 179, 240, 0.26);
  border-radius: 10px;
}
.site-login-logo {
  position: relative;
  top: -60px;
  width: 25%;
  left: 37.5%;
  background-color: #06192d;
  border-radius: 60%;
}
.site-login-btn-text {
  font-size: 1.25rem;
}
.site-login-nishchay {
  position: relative;
  top: -40px;
}
.site-login-form {
  position: relative;
  top: -3%;
  width: 100%;
  left: 0%;
}
.site-login-fp {
  cursor: pointer;
  position: relative;
  top: -93px;
  font-size: 1.15rem;
  font-weight: 700;
}
body {
  color: white;
}
input,
input:focus {
  background: #06192d;
  color: white;
  border: 1px solid white;
  border-radius: 15px;
  height: 2.75rem;
}
.form-group,
label {
  margin-bottom: 0.2rem;
}
</style>