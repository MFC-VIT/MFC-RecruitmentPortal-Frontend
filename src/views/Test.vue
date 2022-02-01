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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam neque
            deserunt odit similique atque quia enim repellat fugiat veniam.
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam neque
            deserunt odit similique atque quia enim repellat fugiat veniam.
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam neque
            deserunt odit similique.
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam neque
            deserunt odit similique.
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam neque
            deserunt odit similique.
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
      this.$router.push({ name: "TechnicalRules" });
    },
    takeManagment() {
      this.$router.push({ name: "ManagementRules" });
    },
    takeEditorial() {
      this.$router.push({ name: "EditorialRules" });
    },
    takeDesign() {
      this.$router.push({ name: "DesignRules" });
    },
    takeMedia() {
      this.$router.push({ name: "MediaRules" });
    }
  }
};
</script>
