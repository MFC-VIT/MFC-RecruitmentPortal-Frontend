<template>
  <b-container>
    <b-row alogn-v="center" align-h="center" class="mt-md-5">
      <b-col cols="11" md="5" class="site-verify-main mt-md-5">
        <img
          src="./../assets/img/logo.png"
          alt="MFC Logo"
          class="site-verify-logo"
        />
        <h3 class="text-white text-center site-verify-nishchay">
          Verify your email!!!
        </h3>
        <b-form @submit="onSubmit" class="pb-2 text-white site-verify-form">
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
          <b-form-group
            id="input-group-2"
            label="OTP:"
            label-size="lg"
            label-for="input-2"
          >
            <b-form-input
              id="input-2"
              v-model="otp"
              pattern="[0-9]{6}"
              required
            ></b-form-input>
          </b-form-group>

          <br />
          <b-button block pill type="submit" variant="moz-orange">
            <strong class="site-login-btn-text">Verify</strong>
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
      otp: null
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      this.$store
        .dispatch("userVerify", {
          email: this.email,
          otp: this.otp
        })
        .then(() => {
          this.$router.push("/user/thanks");
        })
        .catch(err => {
          alert(err);
        });
    }
  }
};
</script>

<style scoped>
.site-verify-main {
  background-color: rgba(128, 179, 240, 0.26);
  border-radius: 10px;
}
.site-verify-logo {
  position: relative;
  top: -60px;
  width: 25%;
  left: 37.5%;
  background-color: #06192d;
  border-radius: 60%;
}
.site-verify-btn-text {
  font-size: 1.25rem;
}
.site-verify-nishchay {
  position: relative;
  top: -40px;
}
.site-verify-form {
  position: relative;
  top: -3%;
  width: 100%;
  left: 0%;
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
