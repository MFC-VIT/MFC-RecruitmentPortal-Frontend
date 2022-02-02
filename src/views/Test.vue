<template>
  <b-container>
    <center>
      <h1 class="text-moz-orange p-2">
        <strong>Select the Domain</strong>
      </h1>
    </center>
    <br /><br />
    <b-row class="text-white no-gutters" align-h="center">
      <b-col md="6">
        <div class="site-test-card m-2" @click="takeTechnical">
          <div class="d-flex justify-content-center align-content-center">
            <h1 class="text-center p-2">
              Technical
            </h1>
          </div>
          <h5 class="text-center px-3 pb-4">
            Where you immerse yourself in algorithms, code and innovative
            projects
          </h5>
        </div>
      </b-col>
      <b-col md="6">
        <div class="site-test-card m-2" @click="takeManagement">
          <div class="d-flex justify-content-center align-content-center">
            <h1 class="text-center p-2">
              Management
            </h1>
          </div>
          <h5 class="text-center px-3 pb-4">
            Where you immerse yourself in connecting with people and becoming a
            better handler of situations
          </h5>
        </div>
      </b-col>
    </b-row>
    <br />
    <br />
    <b-row class="text-white no-gutters" align-h="center">
      <b-col md="4">
        <div class="site-test-card m-2" @click="takeEditorial">
          <div class="d-flex justify-content-center align-content-center">
            <h1 class="text-center p-2">
              Editorial
            </h1>
          </div>
          <h5 class="text-center px-3 pb-4">
            Where you immerse yourself in drawing attention and invoking
            curiosity via words
          </h5>
        </div>
      </b-col>
      <b-col md="4">
        <div class="site-test-card m-2" @click="takeDesign">
          <div class="d-flex justify-content-center align-content-center">
            <h1 class="text-center p-2">
              Design
            </h1>
          </div>
          <h5 class="text-center px-3 pb-4">
            Where you immerse yourself in giving a one of a kind visual
            experience
          </h5>
        </div>
      </b-col>
      <b-col md="4">
        <div class="site-test-card m-2" @click="takeMedia">
          <div class="d-flex justify-content-center align-content-center">
            <h1 class="text-center p-2">
              Media
            </h1>
          </div>
          <h5 class="text-center px-3 pb-4">
            Where you immerse yourself in promoting peers' contributions and
            explore your skills in using audio and video tools
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
</style>

<script>
export default {
  name: "Test",
  beforeMount() {
    this.$store.dispatch("getTest");
  },
  methods: {
    takeTechnical() {
      if (localStorage.getItem("Techical") == "true")
        alert(
          "You have already attempted the Technical test! You can attempt it only once!"
        );
      else this.$router.push({ name: "TechnicalRules" });
    },
    takeManagement() {
      if (localStorage.getItem("Management") == "true")
        alert(
          "You have already attempted the Management test! You can attempt it only once!"
        );
      else this.$router.push({ name: "ManagementRules" });
    },
    takeEditorial() {
      if (localStorage.getItem("Editorial") == "true")
        alert(
          "You have already attempted the Editorial test! You can attempt it only once!"
        );
      else this.$router.push({ name: "EditorialRules" });
    },
    takeDesign() {
      if (localStorage.getItem("Design") == "true")
        alert(
          "You have already attempted the Design test! You can attempt it only once!"
        );
      else this.$router.push({ name: "DesignRules" });
    },
    takeMedia() {
      if (localStorage.getItem("Media") == "true")
        alert(
          "You have already attempted the Media test! You can attempt it only once!"
        );
      else this.$router.push({ name: "MediaRules" });
    }
  }
};
</script>
