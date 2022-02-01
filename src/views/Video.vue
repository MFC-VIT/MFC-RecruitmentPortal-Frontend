<template>
	<b-container>
		<b-row align-h="center" align-v="center">
			<b-col cols="10">
				<h3 class="text-center text-moz-orange mt-1 mt-md-3">
					<strong>Video Editing Domain</strong>
				</h3>
				<br />
				<br />
				<br />
				<div v-for="item in this.questions" :key="item.question_id">
					<a :href="item.link" target="_blank">
						<b-img-lazy
							class="site-video-img m-2"
							fluid-grow
							:src="item.question"
							:href="item.link"
						></b-img-lazy>
					</a>
					<textarea
						rows="5"
						class="site-video-ta m-2 px-5 py-4"
						:id="item.question_id"
						placeholder="Type your link here!"
					>
          Type your answer here!
          </textarea
					>
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
import axios from 'axios';
export default {
	name: 'Video',
	data() {
		return {
			questions: [],
			answers: [],
			isSubmitted: false,
		};
	},
	methods: {
		sleep(ms) {
			return new Promise((resolve) => {
				setTimeout(resolve, ms);
			});
		},
		async sendAnswers() {
			this.isSubmitted = true;
			// eslint-disable-next-line
			var getAPI = axios.create({
				baseURL: 'https://mfcrec2022.herokuapp.com/',
				timeout: 3000,
				headers: {
					Authorization:
						'Bearer ' + localStorage.getItem('accessToken'),
				},
			});
			this.questions.forEach((item) => {
				this.answers.push({
					domain: '7',
					question: item.question,
					answer: document.getElementById(item.question_id).value,
				});
			});
			this.$store.dispatch('getVideo').catch((err) => {
				console.log(err);
			});
			// eslint-disable-next-line
			return new Promise((resolve, reject) => {
				getAPI
					.post(
						'https://mfcrec2022.herokuapp.com/api/send_video_responses/',
						this.answers
					)
					// eslint-disable-next-line
					.then((response) => {
						this.$router.push({ name: 'TestThanks' });
					})
					.catch((error) => {
						alert(error);
					});
			});
		},
	},
	beforeMount() {
		var getAPI = axios.create({
			baseURL: 'https://mfcrec2022.herokuapp.com/',
			timeout: 3000,
			headers: {
				Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
			},
		});
		this.$store.dispatch('getVideo').catch((err) => {
			console.log(err);
		});
		return new Promise((resolve, reject) => {
			getAPI
				.get('https://mfcrec2022.herokuapp.com/api/videoquestions/')
				.then((response) => {
					this.questions = response.data.write;
					resolve(true);
				})
				.catch((error) => {
					reject(error);
				});
		});
	},
};
</script>

<style>
.site-video-img {
	opacity: 0.8;
}
.site-video-ta {
	border-radius: 10px;
	width: 100%;
	font-size: 1.25rem;
}
</style>
