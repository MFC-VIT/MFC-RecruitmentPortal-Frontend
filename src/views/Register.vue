<template>
  <b-container>
    <b-row alogn-v="center" align-h="center" class="mt-md-5">
      <b-col cols="11" md="5" class="site-register-main mt-md-5">
        <img
          src="./../assets/img/logo.png"
          alt="MFC Logo"
          class="site-register-logo"
        />
        <h3 class="text-white text-center site-register-nishchay">
          Wishes you luck!!!
        </h3>
        <b-form @submit="onSubmit" class="pb-2 text-white site-register-form">
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
            label="Name:"
            label-size="lg"
            label-for="input-2"
          >
            <b-form-input
              id="input-2"
              v-model="username"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group
            id="input-group-3"
            label="Registration Number:"
            label-size="lg"
            label-for="input-3"
          >
            <b-form-input
              id="input-3"
              v-model="reg_no"
              pattern="20[A-Za-z]{3}[0-9]{4}"
              minlength="9"
              maxlength="9"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group
            id="input-group-4"
            label="Password:"
            label-size="lg"
            label-for="input-4"
          >
            <b-form-input
              id="input-4"
              v-model="password"
              type="password"
              autocomplete="new-password"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group
            id="input-group-5"
            label="Phone Number:"
            label-size="lg"
            label-for="input-5"
          >
            <b-form-input
              id="input-5"
              v-model="phone"
              autocomplete="tel"
              required
            ></b-form-input>
          </b-form-group>
          <br />
          <b-button block pill type="submit" variant="moz-orange">
            <strong class="site-login-btn-text">Register</strong>
          </b-button>
          <b-button v-on:click="verify" block pill variant="moz-orange">
            <strong class="site-login-btn-text"
              >Already Registered? Verify Email here!</strong
            >
          </b-button>
        </b-form>
      </b-col>
    </b-row>
    <br />
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      username: "",
      phone: "",
      password: "",
      reg_no: ""
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      this.$store
        .dispatch("userRegister", {
          email: this.email,
          username: this.username,
          phone: this.phone,
          password: this.password,
          reg_no: this.reg_no
        })
        .then(() => {
          this.$router.push({ name: "Verify" });
        })
        .catch(err => {
          alert(err);
        });
    },
    verify() {
      this.$router.push({ name: "Verify" });
    }
  }
};
</script>

<style scoped>
.site-register-main {
  background-color: rgba(128, 179, 240, 0.26);
  border-radius: 10px;
}
.site-register-logo {
  position: relative;
  top: -60px;
  width: 25%;
  left: 37.5%;
  background-color: #06192d;
  border-radius: 60%;
}
.site-register-btn-text {
  font-size: 1.25rem;
}
.site-register-nishchay {
  position: relative;
  top: -40px;
}
.site-register-form {
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
