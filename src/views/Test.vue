<template>
  <b-container>
    <center>
      <h3 class="text-moz-orange p-2">
        <strong>Select the Domain</strong>
      </h3>
    </center>
    <b-row class="text-white no-gutters" align-h="center">
      <b-col md="5">
        <div class="site-test-card m-2" @click="takeFrontend">
          <div class="d-flex justify-content-center align-content-center">
            <h1 class="text-center p-2">
              Frontend
            </h1>
          </div>
          <h5 class="text-justify px-3 pb-4">
            Its primarily focused on conversion of data to graphical interface
            thereby enabling easy User Interaction with the website.
          </h5>
        </div>
      </b-col>
      <b-col md="5">
        <div class="site-test-card m-2" @click="takeBackend">
          <div class="d-flex justify-content-center align-content-center">
            <h1 class="text-center p-2">
              Backend
            </h1>
          </div>
          <h5 class="text-justify px-3 pb-4">
            Its primarily focused on how the site works and how the database
            information is communicated to the browser.
          </h5>
        </div>
      </b-col>
    </b-row>
    <b-row class="text-white" align-h="center">
      <b-col md="10">
        <div class="site-test-card m-2" @click="takeDesign">
          <div class="d-flex justify-content-center align-content-center">
            <h1 class="text-center p-2">
              Design & Media
            </h1>
          </div>
          <h5 class="text-justify px-3 pb-4">
            Design is all about creating, fashioning, executing, or constructing
            according to a plan. Software tools like Photoshop and Figma are
            used. Media involves working with video editing tools, VFX,
            animations and a lot more cool stuff!
          </h5>
        </div>
      </b-col>
    </b-row>
    <b-row class="text-white no-gutters" align-h="center">
      <b-col md="5">
        <div class="site-test-card m-2" @click="takeApp">
          <div class="d-flex justify-content-center align-content-center">
            <h1 class="text-center p-2">
              App
            </h1>
          </div>
          <h5 class="text-justify px-3 pb-4">
            Its prime objective is to create software applications for operating
            on mobile devices such as tablets, smartphones and smart watches.
          </h5>
        </div>
      </b-col>
      <b-col md="5">
        <div class="site-test-card m-2" @click="takeML">
          <div class="d-flex justify-content-center align-content-center">
            <h1 class="text-center p-2">
              ML
            </h1>
          </div>
          <h5 class="text-justify px-3 pb-4">
            It's based on data analysis that automates analytical model
            building, identifying patterns and making decisions with minimal
            human intervention.
          </h5>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<style scoped>
.site-test-card {
  background-color: rgba(27, 49, 72, 0.5);
  border-radius: 10px;
  cursor: pointer;
}
@media screen and (min-width: 769px) {
  .site-test-frontend {
    position: relative;
    top: -40px;
    left: -110px;
    max-height: 170px;
  }
  .site-test-frontend-heading {
    position: relative;
    top: 10px;
    left: -50px;
    font-weight: 600;
  }
  .site-test-frontend-text {
    position: relative;
    top: -25px;
  }
  .site-test-backend {
    position: relative;
    top: -50px;
    left: 70px;
    max-height: 170px;
  }
  .site-test-backend-heading {
    position: relative;
    top: 10px;
    left: 50px;
    font-weight: 600;
  }
  .site-test-backend-text {
    position: relative;
    top: -25px;
  }
  .site-test-ml {
    position: relative;
    top: 30px;
    left: -50px;
    height: 140px;
  }
  .site-test-ml-heading {
    position: relative;
    top: 10px;
    font-weight: 600;
  }
  .site-test-ml-text {
    position: relative;
    top: 20px;
  }
  .site-test-app {
    position: relative;
    top: 15px;
    left: 40px;
    height: 120px;
  }
  .site-test-app-heading {
    position: relative;
    top: 10px;
    font-weight: 600;
  }
  .site-test-app-text {
    position: relative;
    top: 25px;
  }
}
@media screen and (max-width: 768px) {
  .site-test-frontend {
    display: none;
  }
  .site-test-backend {
    display: none;
  }
  .site-test-ml {
    display: none;
  }
  .site-test-app {
    display: none;
  }
}
</style>

<script>
export default {
  name: "Test",
  beforeMount() {
    this.$store.dispatch("getTest");
  },
  methods: {
    takeFrontend() {
      this.$router.push({ name: "FrontendRules" });
    },
    takeBackend() {
      this.$router.push({ name: "BackendRules" });
    },
    takeDesign() {
      this.$router.push({ name: "DesignRules" });
    },
    takeApp() {
      this.$router.push({ name: "AppRules" });
    },
    takeML() {
      this.$router.push({ name: "MLRules" });
    }
  }
};
</script>
