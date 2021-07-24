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
            <h3>
              This domain has 3 tasks. You have to submit atleast 1 task for
              getting shortlisted for round 2.
            </h3>
          </li>
          <li class="p-1">
            <h3>
              For submitting the task, upload the code on github and submit the
              repository link (Make sure that it's public).
            </h3>
          </li>
          <li class="p-1">
            <h3>
              You can submit the tasks multiple times. Your last submission will
              be considered as the final submission.
            </h3>
          </li>
          <li class="p-1">
            <h3>
              If you are uploading more than one task, then make sure you upload
              it together.
            </h3>
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
  name: "FrontendRules",
  methods: {
    goBack() {
      this.$router.push({ name: "Test" });
    },
    goNext() {
      this.$router.push({ name: "Frontend" });
    }
  }
};
</script>
