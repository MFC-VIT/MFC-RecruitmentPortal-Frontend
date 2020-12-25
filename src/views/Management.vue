<template>
  <b-container>
    <b-row align-h="center" align-v="center">
      <b-col cols="10">
        <h3 class="text-center text-moz-orange mt-1 mt-md-3">
          <strong>Management Domain</strong>
        </h3>
        <div v-for="item in this.questions" :key="item.question_id">
          <b-img-lazy class="site-mgmt-img m-2" fluid-grow :src="item.question"></b-img-lazy>
          <textarea
            rows="5"
            class="site-mgmt-ta m-2"
            :id="item.question_id"
            placeholder="Type your answer here!"
          >Type your answer here!</textarea>
        </div>
        <b-button @click="sendAnswers" class="m-2" block pill variant="moz-orange">Submit</b-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import axios from "axios";
export default {
  name: "Management",
  data() {
    return {
      questions: [],
      answers: []
    };
  },
  methods: {
    sleep(ms) {
      return new Promise(resolve => {
        setTimeout(resolve, ms);
      });
    },
    async sendAnswers() {
      // eslint-disable-next-line
      var getAPI = axios.create({
        baseURL: "https://mfcrecruitment.herokuapp.com/",
        timeout: 3000,
        headers: {
          Authorization: "Bearer " + localStorage.getItem("accessToken")
        }
      });
      this.questions.forEach(item => {
        this.answers.push({
          domain: "2",
          question: item.question,
          answer: document.getElementById(item.question_id).value
        });
      });
      // eslint-disable-next-line
      return new Promise((resolve, reject) => {
        getAPI
          .post(
            "https://mfcrecruitment.herokuapp.com/api/send_mang_responses/",
            this.answers
          )
          // eslint-disable-next-line
          .then(response => {
            this.$router.push({ name: "TestThanks" });
          })
          .catch(error => {
            alert(error);
          });
      });
    }
  },
  beforeMount() {
    var getAPI = axios.create({
      baseURL: "https://mfcrecruitment.herokuapp.com/",
      timeout: 3000,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("accessToken")
      }
    });
    this.$store.dispatch("getManagement").catch(err => {
      console.log(err);
    });
    return new Promise((resolve, reject) => {
      getAPI
        .get("https://mfcrecruitment.herokuapp.com/api/managementquestions/")
        .then(response => {
          this.questions = response.data.write;
          resolve(true);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
};
</script>

<style>
.site-mgmt-img {
  opacity: 0.8;
}
.site-mgmt-ta {
  border-radius: 10px;
  width: 100%;
}
</style>