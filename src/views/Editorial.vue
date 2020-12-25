<template>
  <b-container>
    <b-row align-h="center" align-v="center">
      <b-col cols="10">
        <h3 class="text-center text-moz-orange mt-1 mt-md-3">
          <strong>Editorial Domain</strong>
        </h3>
        <br />
        <center>
          <BaseTimer @timer-finished="sendAnswers" />
        </center>
        <br />
        <br />
        <div v-for="item in this.questions.short" :key="item.question_id">
          <b-img-lazy class="site-edit-img m-2" fluid-grow :src="item.question"></b-img-lazy>
          <textarea
            rows="5"
            class="site-edit-ta m-2 px-5 py-4"
            :id="item.question_id"
            placeholder="Type your answer here!"
          >Type your answer here!</textarea>
          <br />
          <br />
        </div>
        <div v-for="item in this.questions.long" :key="item.question_id">
          <b-img-lazy class="site-edit-img m-2" fluid-grow :src="item.question"></b-img-lazy>
          <textarea
            rows="5"
            class="site-edit-ta m-2 px-5"
            :id="item.question_id"
            placeholder="Type your answer here!"
          >Type your answer here!</textarea>
          <br />
          <br />
        </div>
        <b-button @click="sendAnswers" class="m-2" block pill variant="moz-orange">Submit</b-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import axios from "axios";
import BaseTimer from "../components/BaseTimer";
export default {
  name: "Editorial",
  data() {
    return {
      questions: [],
      answers: []
    };
  },
  components: {
    BaseTimer
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
      this.questions.short.forEach(item => {
        this.answers.push({
          domain: "3",
          question: item.question,
          answer: document.getElementById(item.question_id).value
        });
      });
      this.questions.long.forEach(item => {
        this.answers.push({
          domain: "3",
          question: item.question,
          answer: document.getElementById(item.question_id).value
        });
      });
      this.$store.dispatch("getEditorial").catch(err => {
        console.log(err);
      });
      // eslint-disable-next-line
      return new Promise((resolve, reject) => {
        getAPI
          .post(
            "https://mfcrecruitment.herokuapp.com/api/send_edit_responses/",
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
    this.$store.dispatch("getEditorial").catch(err => {
      console.log(err);
    });
    return new Promise((resolve, reject) => {
      getAPI
        .get("https://mfcrecruitment.herokuapp.com/api/editorialquestions/")
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
.site-edit-img {
  opacity: 0.8;
}
.site-edit-ta {
  border-radius: 10px;
  width: 100%;
  font-size: 1.25rem;
}
</style>