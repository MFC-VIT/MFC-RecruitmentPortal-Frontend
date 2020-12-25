<template>
  <b-container>
    <b-row align-v="center" align-h="center">
      <b-col cols="11" md="6" class="site-newpwd-main mt-md-5">
        <img src="./../assets/img/logo.png" alt="MFC Logo" class="site-newpwd-logo" />
        <b-form @submit="onSubmit" class="pb-2 text-white site-newpwd-form">
          <b-form-group
            id="input-group-4"
            label="New Password:"
            label-size="lg"
            label-for="input-4"
          >
            <b-form-input
              id="input-4"
              v-model="password"
              placeholder="Enter password"
              type="password"
              autocomplete="new-password"
              required
            ></b-form-input>
          </b-form-group>
          <br />
          <b-button @click="onSubmit" block pill type="submit" variant="moz-orange">Reset Password</b-button>
        </b-form>
      </b-col>
    </b-row>
    <!-- <b-row v-if="!isTokenVerified">
      <b-col>
        <h2 class="text-center text-moz-orange">Invalid Token!</h2>
      </b-col>
    </b-row>-->
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      password: ""
      // isTokenVerified: false
    };
  },
  // beforeMount() {
  //   this.initVerify();
  // },
  methods: {
    // initVerify() {
    //   this.$store
    //     .dispatch("resetVerifyToken", {
    //       uidb64: this.$router.params.uid,
    //       token: this.$router.params.token
    //     })
    //     .then(() => {
    //       this.isTokenVerified = true;
    //     })
    //     .catch(err => {
    //       alert(err);
    //     });
    // },
    onSubmit(event) {
      event.preventDefault();
      this.$store
        .dispatch("resetSetNewPassword", {
          password: this.password,
          uidb64: this.$route.params.uid,
          token: this.$route.params.token
        })
        .then(() => {
          this.$router.push({ name: "Reseted" });
        })
        .catch(err => {
          alert(err);
        });
    }
  }
};
</script>

<style scoped>
.site-newpwd-main {
  background-color: rgba(128, 179, 240, 0.26);
  border-radius: 10px;
}
.site-newpwd-logo {
  position: relative;
  top: -50px;
  width: 20%;
  left: 40%;
}
.site-newpwd-form {
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