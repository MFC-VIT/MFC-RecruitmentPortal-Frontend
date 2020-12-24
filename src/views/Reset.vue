<template>
  <b-container>
    <b-row alogn-v="center" align-h="center">
      <b-col cols="11" md="6" class="site-reset-main mt-md-5">
        <img src="./../assets/img/logo.png" alt="MFC Logo" class="site-reset-logo" />
        <b-form @submit="onSubmit" class="pb-2 text-white site-reset-form">
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
              placeholder="Enter VIT Email"
              required
            ></b-form-input>
          </b-form-group>
          <br />
          <b-button block pill type="submit" variant="moz-orange">Reset Password</b-button>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      email: ""
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
    }
  }
};
</script>

<style scoped>
.site-reset-main {
  background-color: rgba(128, 179, 240, 0.26);
  border-radius: 10px;
}
.site-reset-logo {
  position: relative;
  top: -50px;
  width: 20%;
  left: 40%;
}
.site-reset-form {
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