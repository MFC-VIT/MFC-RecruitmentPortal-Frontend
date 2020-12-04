import Vue from 'vue';
import Vuex from 'vuex';
import Axios from './axios.js';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {},
	mutations: {},
	actions: {
		// eslint-disable-next-line no-unused-vars
		register: ({ commit }, email1, username1, phone_number1, password1) => {
			return new Promise((resolve, reject) => {
				Axios.request('/api/register/', {
					method: 'post',
					headers: {
						'Content-Type': 'application/json; charset=utf8'
					},
					data: {
						email: 'avish.j@protonmail.com',
						username: 'avishj',
						phone_number: '7488259466',
						password: 'testpwd'
					}
				})
					// eslint-disable-next-line no-unused-vars
					.then(({ data, status }) => {
						if (status === 201) {
							resolve(true);
						}
					})
					.catch(error => {
						if (error.response.status === 401)
							reject(new Error('User Already Exists!'), null);
						else reject(error);
					});
			});
		}
	},
	modules: {}
});
