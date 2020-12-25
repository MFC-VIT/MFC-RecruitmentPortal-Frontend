<template>
  <b-container>
    <center>
      <h3 class="text-moz-orange p-2">
        <strong>Select the Domain</strong>
      </h3>
    </center>
    <b-row class="text-white">
      <b-col>
        <div class="site-test-card m-4" @click="takeTech">
          <h3 class="text-center text-md-right p-4">Technical</h3>
          <h5
            class="text-justify px-3 pb-4"
          >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi officia, molestiae repellat eveniet eos voluptatem pariatur velit nam ratione consequuntur provident dignissimos? Itaque velit porro natus fugiat, architecto cupiditate aliquid.</h5>
        </div>
        <br />
        <div class="site-test-card m-4" @click="takeDesign">
          <h3 class="text-center p-4">Design & Media</h3>
          <h5
            class="text-justify px-3 pb-4"
          >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi officia, molestiae repellat eveniet eos voluptatem pariatur velit nam ratione consequuntur provident dignissimos? Itaque velit porro natus fugiat, architecto cupiditate aliquid.</h5>
        </div>
      </b-col>
      <b-col>
        <div class="site-test-card m-4" @click="takeMgmt">
          <h3 class="text-center text-md-left p-4">Management</h3>
          <h5
            class="text-justify px-3 pb-4"
          >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi officia, molestiae repellat eveniet eos voluptatem pariatur velit nam ratione consequuntur provident dignissimos? Itaque velit porro natus fugiat, architecto cupiditate aliquid.</h5>
        </div>
        <br />
        <div class="site-test-card m-4" @click="takeEditorial">
          <h3 class="text-center p-4">Editorial</h3>
          <h5
            class="text-justify px-3 pb-4"
          >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi officia, molestiae repellat eveniet eos voluptatem pariatur velit nam ratione consequuntur provident dignissimos? Itaque velit porro natus fugiat, architecto cupiditate aliquid.</h5>
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