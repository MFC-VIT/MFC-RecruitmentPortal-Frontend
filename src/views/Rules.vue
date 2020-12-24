<template>
  <b-container>
    <b-row alogn-v="center" align-h="center">
      <b-col cols="10" class="site-rules-cont mt-md-5 p-3 m-3">
        <h1>
          <strong>Rules & Regulations</strong>
        </h1>
        <ul class="site-rules-list">
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
      </b-col>
    </b-row>
  </b-container>
</template>

<style scoped>
.site-rules-cont {
  background-color: rgba(255, 255, 255, 0.85);
  border-radius: 10px;
}
li::before {
  /* list-style-image: url("../assets/img/bullet.PNG"); */
}
</style>

<script>
export default {
  name: "Rules"
};
</script>
