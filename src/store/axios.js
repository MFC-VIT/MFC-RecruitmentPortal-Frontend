import axios from 'axios';
import NProgress from 'nprogress';

const instance = axios.create({
	baseURL: 'https://mfcrecruitment.herokuapp.com/'
});
instance.interceptors.request.use(config => {
	NProgress.start();
	return config;
});
instance.interceptors.response.use(
	response => {
		NProgress.done();
		return response;
	},
	error => {
		NProgress.done();
		return Promise.reject(error);
	}
);
export default instance;
