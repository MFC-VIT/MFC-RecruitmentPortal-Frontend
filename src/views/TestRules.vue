<template>
  <b-container>
    <b-row alogn-v="center" align-h="center">
      <b-col cols="10" class="site-rules-cont p-3 m-3 mt-md-5">
        <h1>
          <strong>Rules & Regulations</strong>
        </h1>
        <br />
        <ul>
          <li>
            <h4>You can only attempt the test for a domain only once.</h4>
          </li>
          <li>
            <h4>The test shall be autosubmitted as soon as the time alloted is completed.</h4>
          </li>
          <li>
            <h4>If you attempt to refresh the page your answers shall not be saved and you may get different questions.</h4>
          </li>
        </ul>
        <div>
          <b-button @click="goNext" variant="moz-orange" style="float: left" class="px-2">
            <div class="px-3">Accept</div>
          </b-button>
          <b-button @click="goBack" variant="outline-moz-orange" style="float: right">
            <div class="px-3">Decline</div>
          </b-button>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<style scoped>
.site-rules-cont {
  background-color: rgba(255, 255, 255, 0.75);
  border-radius: 10px;
}
li::before {
  /* list-style-image: url("../assets/img/bullet.PNG"); */
}
</style>

<script>
export default {
  name: "Rules",
  methods: {
    goBack() {
      this.$router.push({ name: "Test" });
    },
    goNext() {}
  }
};
</script>
