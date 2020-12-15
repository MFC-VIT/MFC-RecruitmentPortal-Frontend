<template>
  <b-container>
    <b-row alogn-v="center" align-h="center">
      <b-col cols="11" md="6" class="site-verify-main mt-md-5">
        <img src="./../assets/img/logo.png" alt="MFC Logo" class="site-verify-logo" />
        <b-form @submit="onSubmit" class="pb-2 text-white site-verify-form">
          <b-form-group
            id="input-group-1"
            label="VIT Email Address:"
            label-size="lg"
            label-for="input-1"
          >
            <b-form-input
              id="input-1"
              v-model="form.email"
              type="email"
              pattern="[A-Za-z0-9.]+@vitstudent.ac.in|[A-Za-z0-9.]+@vit.ac.in"
              placeholder="Enter email"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group id="input-group-2" label="OTP:" label-size="lg" label-for="input-2">
            <b-form-input
              id="input-2"
              v-model="form.otp"
              pattern="[0-9]{6}"
              placeholder="Enter OTP"
              required
            ></b-form-input>
          </b-form-group>

          <br />
          <b-button block pill type="submit" variant="moz-orange">Verify</b-button>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: "",
        otp: ""
      }
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      this.$router.push("/user/thanks");
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
  top: -50px;
  width: 20%;
  left: 40%;
}
.site-verify-form {
  position: relative;
  top: -5%;
  width: 100%;
  left: 0%;
}
body {
  color: white;
}
input,
input:focus {
  background: black;
  color: white;
  border: 2px solid #e66100;
  border-radius: 10px;
}
.form-group,
label {
  margin-bottom: 0.2rem;
}
</style>