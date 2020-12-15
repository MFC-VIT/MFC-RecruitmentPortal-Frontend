<template>
  <b-container>
    <b-row alogn-v="center" align-h="center">
      <b-col cols="11" md="6" class="site-register-main mt-md-5">
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
              v-model="email"
              type="email"
              pattern="[A-Za-z0-9.]+@vitstudent.ac.in|[A-Za-z0-9.]+@vit.ac.in"
              placeholder="Enter VIT Email"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group id="input-group-2" label="Name:" label-size="lg" label-for="input-2">
            <b-form-input id="input-2" v-model="username" placeholder="Enter name" required></b-form-input>
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
              pattern="[1-9]{2}[A-Za-z]{3}[0-9]{4}"
              placeholder="Enter registration number"
              minlength="9"
              maxlength="9"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group id="input-group-4" label="Password:" label-size="lg" label-for="input-4">
            <b-form-input
              id="input-4"
              v-model="password"
              placeholder="Enter password"
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
              placeholder="Enter your phone number"
              pattern="[0-9]{10}"
              minlength="10"
              autocomplete="tel"
              maxlength="10"
              required
            ></b-form-input>
          </b-form-group>
          <br />
          <b-button block pill type="submit" variant="moz-orange" >Submit</b-button>
          <b-button v-on:click = 'verify' block pill variant="moz-orange" >Already Registered? Verify Email here!</b-button>
          <!-- <router-link
            class="text-moz-orange text-center"
            to="/user/verify"
          >Already Registered? Verify Email here!</router-link> -->
        </b-form>
        
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data () {
      return{
          email :'',
          username: '',
          phone: '',
          password : '',
          reg_no:''
      }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      this.$store.dispatch('userRegister', {
              email:this.email,
              username:this.username,
              phone:this.phone,
              password: this.password,
              reg_no: this.reg_no
          })
          .then(() => {
              this.$router.push({ name : 'Verify'})
          })
          .catch(err => {
              console.log(err)
          })
    },
    verify(){
      this.$router.push({ name : 'Verify'})
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
  top: -50px;
  width: 20%;
  left: 40%;
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