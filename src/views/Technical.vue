<template>
  <b-container>
    <b-row align-h="center" align-v="center">
      <b-col cols="10">
        <h3 class="text-center text-moz-orange mt-1 mt-md-3">
          <strong>Technical Domain</strong>
        </h3>
        <br />
        <center>
          <BaseTimer @timer-finished="sendAnswers" />
        </center>
        <br />
        <br />
        <div v-for="item in this.questions.mcq" :key="item.question_id">
          <b-img-lazy
            class="site-tech-img my-2"
            fluid-grow
            :src="item.question"
          ></b-img-lazy>
          <b-form-group
            class="site-tech-mcqopt pl-4 text-moz-orange my-2"
            v-slot="{ ariaDescribedby }"
          >
            <b-form-radio-group
              v-model="item.question_id"
              :aria-describedby="ariaDescribedby"
              :name="item.question_id"
            >
              <b-form-radio :value="item.option_1">{{
                item.option_1
              }}</b-form-radio>
              <br />
              <b-form-radio :value="item.option_2">{{
                item.option_2
              }}</b-form-radio>
              <br />
              <b-form-radio :value="item.option_3">{{
                item.option_3
              }}</b-form-radio>
              <br />
              <b-form-radio :value="item.option_4">{{
                item.option_4
              }}</b-form-radio>
              <b-form-radio class="d-none" value="NA"
                >Not Answered</b-form-radio
              >
            </b-form-radio-group>
          </b-form-group>
          <br />
          <br />
        </div>
        <div v-for="item in this.questions.write" :key="item.question_id">
          <a :href="item.link" target="_blank">
            <b-img-lazy
              class="site-tech-img m-2"
              fluid-grow
              :src="item.question"
              :href="item.link"
            ></b-img-lazy>
          </a>
          <textarea
            rows="5"
            class="site-tech-ta m-2 px-5 py-4"
            :id="item.question_id"
            placeholder="Type your answer here!"
          >
          Type your answer here!
          </textarea>
          <br />
          <br />
        </div>
        <b-button
          :disabled="isSubmitted"
          @click="sendAnswers"
          class="m-2"
          block
          pill
          variant="moz-orange"
          >Submit</b-button
        >
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import axios from "axios";
import BaseTimer from "../components/BaseTimer";
export default {
  name: "Technical",
  data() {
    return {
      questions: [],
      answers: [],
      tech_mcq_1: "NA",
      tech_mcq_2: "NA",
      tech_mcq_3: "NA",
      tech_mcq_4: "NA",
      tech_mcq_5: "NA",
      tech_mcq_6: "NA",
      tech_mcq_7: "NA",
      tech_mcq_8: "NA",
      tech_mcq_9: "NA",
      tech_mcq_10: "NA",
      tech_mcq_11: "NA",
      tech_mcq_12: "NA",
      tech_mcq_13: "NA",
      tech_mcq_14: "NA",
      tech_mcq_15: "NA",
      tech_mcq_16: "NA",
      tech_mcq_17: "NA",
      tech_mcq_18: "NA",
      tech_mcq_19: "NA",
      tech_mcq_20: "NA",
      tech_mcq_21: "NA",
      tech_mcq_22: "NA",
      isSubmitted: false
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
      this.isSubmitted = true;
      // eslint-disable-next-line
			var getAPI = axios.create({
        baseURL: "https://mfcrec2022.herokuapp.com/",
        timeout: 3000,
        headers: {
          Authorization: "Bearer " + localStorage.getItem("accessToken")
        }
      });
      this.questions.mcq.forEach(item => {
        this.answers.push({
          domain: "1",
          question: item.question,
          answer: item.question_id
        });
      });
      this.questions.write.forEach(item => {
        this.answers.push({
          domain: "1",
          question: item.question,
          answer: document.getElementById(item.question_id).value
        });
      });
      this.$store.dispatch("getTechnical").catch(err => {
        console.log(err);
      });
      // eslint-disable-next-line
			return new Promise((resolve, reject) => {
        getAPI
          .post(
            "https://mfcrec2022.herokuapp.com/api/send_tech_responses/",
            this.answers
          )
          // eslint-disable-next-line
					.then((response) => {
            this.$router.push({ name: "TestThanks" });
          })
          .catch(error => {
            alert(error);
          });
      });
    },
    getValueOfRadio(rad) {
      var ele = document.getElementsByName(rad);
      ele.forEach(element => {
        if (element.checked) return element.value;
      });
    }
  },
  beforeMount() {
    var getAPI = axios.create({
      baseURL: "https://mfcrec2022.herokuapp.com/",
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
        .get("https://mfcrec2022.herokuapp.com/api/technicalquestions/")
        .then(response => {
          this.questions = response.data;
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
.site-tech-mcqopt {
  background-color: rgba(255, 255, 255, 1);
  border-radius: 10px;
}
.site-tech-ta {
  border-radius: 10px;
  width: 100%;
  font-size: 1.25rem;
}
</style>
