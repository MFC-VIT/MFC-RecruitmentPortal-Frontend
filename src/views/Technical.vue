<template>
  <b-container>
    <b-row align-h="center" align-v="center">
      <b-col cols="10">
        <h3 class="text-center text-moz-orange mt-1 mt-md-3">
          <strong>Tech Domain</strong>
        </h3>
        <div v-for="item in this.questions.mcq" :key="item.question_id">
          <b-img-lazy class="site-tech-img m-2" fluid-grow :src="item.question"></b-img-lazy>
          <div class="text-moz-orange">
            <input type="radio" :name="item.question_id" id="option1" />
            <label :for="option1" class="p-2 h5">{{item.option_1}}</label>
            <br />
            <input type="radio" :name="item.question_id" id="option2" />
            <label :for="option2" class="p-2 h5">{{item.option_2}}</label>
            <br />
            <input type="radio" :name="item.question_id" id="option3" />
            <label :for="option3" class="p-2 h5">{{item.option_3}}</label>
            <br />
            <input type="radio" :name="item.question_id" id="option4" />
            <label :for="option4" class="p-2 h5">{{item.option_4}}</label>
            <br />
          </div>
          <br />
        </div>
        <div v-for="item in this.questions.write" :key="item.question_id">
          <b-img-lazy class="site-tech-img m-2" fluid-grow :src="item.question"></b-img-lazy>
          <textarea class="site-tech-ta m-2" placeholder="Type your answer here!"></textarea>
        </div>
        <b-button @click="sendAnswers" class="m-2" block pill variant="moz-orange">Submit</b-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import axios from "axios";
export default {
  name: "Technical",
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
      console.log(this.questions);
      this.questions.mcq.forEach(el => {
        console.log(document.getElementsByName(el.question_id));
        this.answers.push({
          domain: 1,
          question: el.question,
          answer: document.getElementsByName(el.question_id)[0].value
        });
      });
      this.questions.write.forEach(el => {
        this.answers.push({
          domain: 1,
          question: el.question,
          answer: document.getElementsByName(el.question_id)[0].value
        });
      });
      return new Promise((resolve, reject) => {
        getAPI
          .post(
            "https://mfcrecruitment.herokuapp.com/api/send_tech_responses/",
            this.answers
          )
          // eslint-disable-next-line
          .then(response => {});
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
    this.$store.dispatch("getTechnical").catch(err => {
      console.log(err);
    });
    return new Promise((resolve, reject) => {
      getAPI
        .get("https://mfcrecruitment.herokuapp.com/api/technicalquestions/")
        .then(response => {
          this.questions = response.data;
          console.log(this.questions);
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
.site-tech-img {
  opacity: 0.8;
}
.site-tech-ta {
  border-radius: 10px;
  width: 100%;
}
</style>