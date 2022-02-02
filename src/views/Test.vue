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
          <h6 class="text-center px-3 pb-4">
            This domain is for students who are engrossed in discovering,
            exploring, researching, and learning more about technology. Our
            community encourages people who are interested in Web Development,
            App Development, and Machine Learning!
          </h6>
        </div>
      </b-col>
      <b-col md="6">
        <div class="site-test-card m-2" @click="takeManagement">
          <div class="d-flex justify-content-center align-content-center">
            <h1 class="text-center p-2">
              Management
            </h1>
          </div>
          <h6 class="text-center px-3 pb-4">
            May it be marketing or operations, the management domain is built to
            assist the club members of the MFC team with the systematic and
            effective functioning of the club. It is the ultimate "powerhouse"
            of the club.
          </h6>
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
          <h6 class="text-center px-3 pb-4">
            This domain provides exclusive exposure to students in order to
            unleash their creativity as well as develop their intellectual
            writing capabilities so as to produce authentic content in authentic
            styles.
          </h6>
        </div>
      </b-col>
      <b-col md="4">
        <div class="site-test-card m-2" @click="takeDesign">
          <div class="d-flex justify-content-center align-content-center">
            <h1 class="text-center p-2">
              Design
            </h1>
          </div>
          <h6 class="text-center px-3 pb-4">
            The purpose of this domain is to promote and encourage interest in
            the fields of graphic design and UI/UX design among students. It
            instigates and enriches the creativity among the students of the
            club.
          </h6>
        </div>
      </b-col>
      <b-col md="4">
        <div class="site-test-card m-2" @click="takeMedia">
          <div class="d-flex justify-content-center align-content-center">
            <h1 class="text-center p-2">
              Media
            </h1>
          </div>
          <h6 class="text-center px-3 pb-4">
            This domain is for the creative and talented minds intrigued by the
            digital media world to explore and nurture their creativity and
            ignite in themselves a passion for various technical aspects of the
            media.
          </h6>
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
