<template>
  <b-container>
    <b-row align-v="center" align-h="center" class="mt-md-5">
      <b-col cols="11" md="5" class="site-newpwd-main mt-md-5">
        <img
          src="./../assets/img/logo.png"
          alt="MFC Logo"
          class="site-newpwd-logo"
        />
        <h3 class="text-white text-center site-newpwd-nishchay">
          Set a New Password!!!
        </h3>
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
          <b-button
            @click="onSubmit"
            block
            pill
            type="submit"
            variant="moz-orange"
          >
            <strong class="site-newpwd-btn-text">Set New Password</strong>
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
      password: ""
    };
  },
  methods: {
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
  top: -60px;
  width: 25%;
  left: 37.5%;
  background-color: #06192d;
  border-radius: 60%;
}
.site-newpwd-btn-text {
  font-size: 1.25rem;
}
.site-newpwd-nishchay {
  position: relative;
  top: -40px;
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
