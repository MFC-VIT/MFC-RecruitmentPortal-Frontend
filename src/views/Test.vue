<template>
  <b-container>
    <center>
      <h3 class="text-moz-orange p-2">
        <strong>Select the Domain</strong>
      </h3>
    </center>
    <b-row class="text-white" align-h="center">
      <b-col md="5">
        <div class="site-test-card m-4" @click="takeTech">
          <div class="d-flex justify-content-center align-content-center">
            <img src="../assets/img/technical.png" alt class="site-test-tech" />
            <h1 class="text-center text-md-right p-4 site-test-tech-heading">Technical</h1>
          </div>
          <br />
          <br />
          <h5
            class="text-justify px-3 pb-4 site-test-tech-text"
          >This domain is for students who are engrossed with discovering, exploring and learning more about technology. It is the "functioning-organ" of our club thereby justifying its type.</h5>
        </div>
        <br />
        <div class="site-test-card m-4" @click="takeDesign">
          <h1 class="text-center p-4 site-test-desg-heading">Design & Media</h1>
          <h5
            class="text-right px-3 site-test-desg-text"
          >The purpose design is to promote and encourage interest in the field of graphic and media design to students. It serves to instigate and enrich the creativeness among the students of the club.</h5>
          <div class="d-flex justify-content-center align-content-center">
            <img src="../assets/img/design.png" alt class="site-test-desg" />
            <h5 class="text-right px-3 site-test-desg-text">Join in and learn to ideate and create!</h5>
          </div>
        </div>
      </b-col>
      <b-col md="5">
        <div class="site-test-card m-4" @click="takeMgmt">
          <div class="d-flex justify-content-center align-content-center">
            <h1 class="text-center text-md-right p-4 site-test-mgmt-heading">Management</h1>
            <img src="../assets/img/management.png" alt class="site-test-mgmt" />
          </div>
          <h5
            class="text-justify px-3 pb-4 site-test-mgmt-text"
          >The Management domain is built to assist the club members of MFC team for systematic and effective functioning of the club. It is the ultimate "power-house" of the club.</h5>
        </div>
        <br />
        <div class="site-test-card m-4" @click="takeEditorial">
          <h1 class="text-center p-4 site-test-edit-heading">Editorial</h1>
          <br />
          <h5
            class="text-left px-3 site-test-left-text"
          >This domain provides exclusive exposure to students in order to unleash their creativity as well as develop intellectual writing capabilities so as to produce authentic content in authentic styles.</h5>
          <div class="d-flex justify-content-center align-content-center">
            <h5 class="text-left px-3">Exercise your brain and tantalise the readers!</h5>
            <img src="../assets/img/editorial.png" alt class="site-test-edit" />
          </div>
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
  .site-test-tech {
    position: relative;
    top: -40px;
    left: -110px;
    max-height: 170px;
  }
  .site-test-tech-heading {
    position: relative;
    top: 10px;
    left: -50px;
    font-weight: 600;
  }
  .site-test-tech-text {
    position: relative;
    top: -25px;
  }
  .site-test-mgmt {
    position: relative;
    top: -50px;
    left: 70px;
    max-height: 170px;
  }
  .site-test-mgmt-heading {
    position: relative;
    top: 10px;
    left: 50px;
    font-weight: 600;
  }
  .site-test-mgmt-text {
    position: relative;
    top: -25px;
  }
  .site-test-desg {
    position: relative;
    top: 30px;
    left: -50px;
    height: 140px;
  }
  .site-test-desg-heading {
    position: relative;
    top: 10px;
    font-weight: 600;
  }
  .site-test-desg-text {
    position: relative;
    top: 20px;
  }
  .site-test-edit {
    position: relative;
    top: 15px;
    left: 40px;
    height: 120px;
  }
  .site-test-edit-heading {
    position: relative;
    top: 10px;
    font-weight: 600;
  }
  .site-test-edit-text {
    position: relative;
    top: 25px;
  }
}
@media screen and (max-width: 768px) {
  .site-test-tech {
    display: none;
  }
  .site-test-mgmt {
    display: none;
  }
  .site-test-desg {
    display: none;
  }
  .site-test-edit {
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
    takeTech() {
      if (localStorage.getItem("Tech") == "true")
        alert(
          "You have already attempted the Technical test! You can attempt it only once!"
        );
      else this.$router.push({ name: "TechnicalRules" });
    },
    takeDesign() {
      if (localStorage.getItem("Design") == "true")
        alert(
          "You have already attempted the Design & Media test! You can attempt it only once!"
        );
      else this.$router.push({ name: "DesignRules" });
    },
    takeMgmt() {
      if (localStorage.getItem("Manage") == "true")
        alert(
          "You have already attempted the Management test! You can attempt it only once!"
        );
      else this.$router.push({ name: "MgmtRules" });
    },
    takeEditorial() {
      if (localStorage.getItem("Edi") == "true")
        alert(
          "You have already attempted the Editorial test! You can attempt it only once!"
        );
      else this.$router.push({ name: "EditorialRules" });
    }
  }
};
</script>