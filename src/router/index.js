import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import NProgress from 'nprogress';
import store from '../store/index';

Vue.use(VueRouter);

NProgress.configure({ showSpinner: false });

function loadView(view) {
	return () =>
		import(/* webpackChunkName: "view-[request]" */ `@/views/${view}.vue`);
}

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
		meta: { title: 'Home | MFC Recruitment 2020', authwall: false }
	},
	{
		path: '/user/login',
		name: 'Login',
		component: loadView('Login'),
		meta: { title: 'Login | MFC Recruitment 2020', authwall: false }
	},
	{
		path: '/user/register',
		name: 'Register',
		component: loadView('Register'),
		meta: { title: 'Register | MFC Recruitment 2020', authwall: false }
	},
	{
		path: '/user/verify',
		name: 'Verify',
		component: loadView('Verify'),
		meta: {
			title: 'Verify your Email | MFC Recruitment 2020',
			authwall: false
		}
	},
	{
		path: '/user/reset',
		name: 'Reset',
		component: loadView('Reset'),
		meta: {
			title: 'Reset your Password | MFC Recruitment 2020',
			authwall: false
		}
	},
	{
		path: '/user/newpassword/:uid/:token',
		name: 'NewPassword',
		component: loadView('NewPassword'),
		meta: {
			title: 'Set New Password | MFC Recruitment 2020',
			authwall: false
		}
	},
	{
		path: '/user/reseted',
		name: 'Reseted',
		component: loadView('Reseted'),
		meta: {
			title: 'New Password Set | MFC Recruitment 2020',
			authwall: false
		}
	},
	{
		path: '/test/technical',
		name: 'Technical',
		component: loadView('Technical'),
		meta: {
			title: 'Technical Round 1 | MFC Recruitment 2020',
			authwall: true
		}
	},
	{
		path: '/test/management',
		name: 'Management',
		component: loadView('Management'),
		meta: {
			title: 'Management Round 1 | MFC Recruitment 2020',
			authwall: true
		}
	},
	{
		path: '/test/design',
		name: 'Design',
		component: loadView('Design'),
		meta: { title: 'Design Round 1 | MFC Recruitment 2020', authwall: true }
	},
	{
		path: '/test/editorial',
		name: 'Editorial',
		component: loadView('Editorial'),
		meta: {
			title: 'Editorial Round 1 | MFC Recruitment 2020',
			authwall: true
		}
	},
	{
		path: '/test/techrules',
		name: 'TechnicalRules',
		component: loadView('TechnicalRules'),
		meta: {
			title: 'Technical Test | Rules | MFC Recruitment 2020',
			authwall: true
		}
	},
	{
		path: '/test/mgmtrules',
		name: 'MgmtRules',
		component: loadView('MgmtRules'),
		meta: {
			title: 'Management Test | Rules | MFC Recruitment 2020',
			authwall: true
		}
	},
	{
		path: '/test/designrules',
		name: 'DesignRules',
		component: loadView('DesignRules'),
		meta: {
			title: 'Design Test | Rules | MFC Recruitment 2020',
			authwall: true
		}
	},
	{
		path: '/test/editorialrules',
		name: 'EditorialRules',
		component: loadView('EditorialRules'),
		meta: {
			title: 'Editorial Test | Rules | MFC Recruitment 2020',
			authwall: true
		}
	},
	{
		path: '/test/thanks',
		name: 'TestThanks',
		component: loadView('TestThanks'),
		meta: {
			title: 'Thank You for taking the Test | MFC Recruitment 2020',
			authwall: true
		}
	},
	{
		path: '/rules',
		name: 'Rules',
		component: loadView('Rules'),
		meta: { title: 'Rules | MFC Recruitment 2020', authwall: false }
	},
	{
		path: '/user/thanks',
		name: 'Thanks',
		component: loadView('Thanks'),
		meta: {
			title: 'Thanks for Registering | MFC Recruitment 2020',
			authwall: false
		}
	},
	{
		path: '/test',
		name: 'Test',
		component: loadView('Test'),
		meta: { title: 'Take Tests | MFC Recruitment 2020', authwall: true }
	},
	{
		path: '/social/linkedin',
		beforeEnter() {
			location.href =
				'https://in.linkedin.com/company/mozilla-firefox-club-vit';
		}
	},
	{
		path: '/social/facebook',
		beforeEnter() {
			location.href = 'https://www.facebook.com/mfcvit';
		}
	},
	{
		path: '/social/instagram',
		beforeEnter() {
			location.href = 'https://www.instagram.com/mfc_vit/';
		}
	}
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
	// eslint-disable-next-line no-unused-vars
	scrollBehavior(to, from, savedPosition) {
		return { x: 0, y: 0 };
	}
});

router.beforeResolve((to, from, next) => {
	if (to.path) {
		NProgress.start();
	}
	next();
});

router.afterEach(() => {
	NProgress.done();
});

// router.beforeEach((to, from, next) => {
// 	const nearestWithTitle = to.matched
// 		.slice()
// 		.reverse()
// 		.find(r => r.meta && r.meta.title);
// 	if (nearestWithTitle) document.title = nearestWithTitle.meta.title;
// 	if (to.matched.some(record => record.meta.authwall)) {
// 		// this route requires auth, check if logged in
// 		// if not, redirect to login page.
// 		// Check if user is authenticated or not
// 		// eslint-disable-next-line no-constant-condition
// 		if (false) {
// 			next();
// 		} else {
// 			next({
// 				path: '/user/login',
// 				query: { redirect: to.fullPath }
// 			});
// 		}
// 	} else {
// 		next();
// 	}
// });

router.beforeEach((to, from, next) => {
	const nearestWithTitle = to.matched
		.slice()
		.reverse()
		.find(r => r.meta && r.meta.title);
	if (nearestWithTitle) document.title = nearestWithTitle.meta.title;
	if (to.matched.some(record => record.meta.authwall)) {
		// this route requires auth, check if logged in
		// if not, redirect to login page.
		// Check if user is authenticated or not
		if (store.state.authenticated) {
			next();
		} else {
			next({
				path: '/user/login',
				query: { redirect: to.fullPath }
			});
		}
	} else {
		next();
	}
});

export default router;
