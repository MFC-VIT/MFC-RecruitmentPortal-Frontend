<template>
  <b-container>
    <b-row alogn-v="center" align-h="center">
      <b-col cols="12" md="6" class="site-register-main mt-md-5">
        <img src="./../assets/img/logo.png" alt="MFC Logo" class="site-register-logo" />
        <b-form @submit="onSubmit" class="pb-2 text-white site-register-form">
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
          <b-form-group id="input-group-2" label="Name:" label-size="lg" label-for="input-2">
            <b-form-input id="input-2" v-model="form.name" placeholder="Enter name" required></b-form-input>
          </b-form-group>
          <b-form-group
            id="input-group-3"
            label="Registration Number:"
            label-size="lg"
            label-for="input-3"
          >
            <b-form-input
              id="input-3"
              v-model="form.regno"
              pattern="[1-9]{2}[A-Za-z]{3}[0-9]{4}"
              placeholder="Enter registration number"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group id="input-group-4" label="Password:" label-size="lg" label-for="input-4">
            <b-form-input
              id="input-4"
              v-model="form.pwd"
              placeholder="Enter password"
              type="password"
              required
            ></b-form-input>
          </b-form-group>
          <br />
          <b-button block pill type="submit" variant="moz-orange">Submit</b-button>
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
        name: "",
        regno: "",
        pwd: ""
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
.site-register-main {
  background-color: rgba(128, 179, 240, 0.26);
  border-radius: 10px;
}
.site-register-logo {
  position: relative;
  top: -10%;
  width: 20%;
  left: 40%;
}
.site-register-form {
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
  border: 2px solid #e66100;
  border-radius: 10px;
}
.form-group,
label {
  margin-bottom: 0.2rem;
}
</style>