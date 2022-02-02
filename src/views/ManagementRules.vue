<template>
  <b-container>
    <b-row alogn-v="center" align-h="center">
      <b-col cols="10" class="site-rules-cont p-3 m-3 mt-md-5">
        <h1>
          <strong>Rules & Regulations</strong>
        </h1>
        <br />
        <ul>
          <li class="p-1">
            <h3>You can only attempt the test for a domain only once.</h3>
          </li>
          <li class="p-1">
            <h3>
              The test shall be autosubmitted as soon as the time alloted is
              completed.
            </h3>
          </li>
          <li class="p-1">
            <h3>
              If you attempt to refresh or go back, then your test shall be
              auto-submitted!
            </h3>
          </li>
          <li class="p-1">
            <h3>This test has a time limit of 45 minutes!</h3>
          </li>
        </ul>
        <br />
        <div>
          <b-button
            @click="goNext"
            variant="moz-orange"
            style="float: left"
            class="px-2"
          >
            <div class="px-3">Accept</div>
          </b-button>
          <b-button
            @click="goBack"
            variant="outline-moz-orange"
            style="float: right"
          >
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
li {
  list-style-image: url("../assets/img/bullet.png");
}
</style>

<script>
export default {
  name: "ManagementRules",
  methods: {
    goBack() {
      this.$router.push({ name: "Test" });
    },
    goNext() {
      this.$router.push({ name: "Management" });
    }
  }
};
</script>
