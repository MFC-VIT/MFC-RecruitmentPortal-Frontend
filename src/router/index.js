/* eslint-disable no-unused-vars */
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import store from "../store/index";
import "../assets/css/nprogress.css";

Vue.use(VueRouter);

NProgress.configure({ showSpinner: true });

function loadView(view) {
  return () =>
    import(/* webpackChunkName: "view-[request]" */ `@/views/${view}.vue`);
}

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { title: "Home | MFC Recruitment 2021", authwall: false }
  },
  {
    path: "/user/login",
    name: "Login",
    component: loadView("Login"),
    meta: { title: "Login | MFC Recruitment 2021", authwall: false }
  },
  {
    path: "/user/register",
    name: "Register",
    component: loadView("Register"),
    meta: { title: "Register | MFC Recruitment 2021", authwall: false }
  },
  {
    path: "/user/verify",
    name: "Verify",
    component: loadView("Verify"),
    meta: {
      title: "Verify your Email | MFC Recruitment 2021",
      authwall: false
    }
  },
  {
    path: "/user/reset",
    name: "Reset",
    component: loadView("Reset"),
    meta: {
      title: "Reset your Password | MFC Recruitment 2021",
      authwall: false
    }
  },
  {
    path: "/user/newpassword/:uid/:token",
    name: "NewPassword",
    component: loadView("NewPassword"),
    meta: {
      title: "Set New Password | MFC Recruitment 2021",
      authwall: false
    }
  },
  {
    path: "/user/reseted",
    name: "Reseted",
    component: loadView("Reseted"),
    meta: {
      title: "New Password Set | MFC Recruitment 2021",
      authwall: false
    }
  },
  {
    path: "/test/frontend",
    name: "Frontend",
    component: loadView("Frontend"),
    meta: {
      title: "Frontend Round 1 | MFC Recruitment 2021",
      authwall: true
    }
  },
  {
    path: "/test/backend",
    name: "Backend",
    component: loadView("Backend"),
    meta: {
      title: "Backend Round 1 | MFC Recruitment 2021",
      authwall: true
    }
  },
  {
    path: "/test/uiux",
    name: "UIUX",
    component: loadView("UIUX"),
    meta: { title: "UI/UX Round 1 | MFC Recruitment 2021", authwall: true }
  },
  {
    path: "/test/design",
    name: "Design",
    component: loadView("Design"),
    meta: {
      title: "Graphic Design Round 1 | MFC Recruitment 2021",
      authwall: true
    }
  },
  {
    path: "/test/video",
    name: "Video",
    component: loadView("Video"),
    meta: {
      title: "Video Editing Round 1 | MFC Recruitment 2021",
      authwall: true
    }
  },
  {
    path: "/test/app",
    name: "AppD",
    component: loadView("AppD"),
    meta: {
      title: "App Round 1 | MFC Recruitment 2021",
      authwall: true
    }
  },
  {
    path: "/test/ml",
    name: "ML",
    component: loadView("ML"),
    meta: {
      title: "ML Round 1 | MFC Recruitment 2021",
      authwall: true
    }
  },
  {
    path: "/test/frontendrules",
    name: "FrontendRules",
    component: loadView("FrontendRules"),
    meta: {
      title: "Frontend Test | Rules | MFC Recruitment 2021",
      authwall: true
    }
  },
  {
    path: "/test/backendrules",
    name: "BackendRules",
    component: loadView("BackendRules"),
    meta: {
      title: "Backend Test | Rules | MFC Recruitment 2021",
      authwall: true
    }
  },
  {
    path: "/test/uiuxrules",
    name: "UIUXRules",
    component: loadView("UIUXRules"),
    meta: {
      title: "UI/UX Test | Rules | MFC Recruitment 2021",
      authwall: true
    }
  },
  {
    path: "/test/designrules",
    name: "DesignRules",
    component: loadView("DesignRules"),
    meta: {
      title: "Graphic Design Test | Rules | MFC Recruitment 2021",
      authwall: true
    }
  },
  {
    path: "/test/videorules",
    name: "VideoRules",
    component: loadView("VideoRules"),
    meta: {
      title: "Video Editing Test | Rules | MFC Recruitment 2021",
      authwall: true
    }
  },
  {
    path: "/test/apprules",
    name: "AppRules",
    component: loadView("AppRules"),
    meta: {
      title: "App Test | Rules | MFC Recruitment 2021",
      authwall: true
    }
  },
  {
    path: "/test/mlrules",
    name: "MLRules",
    component: loadView("MLRules"),
    meta: {
      title: "ML Test | Rules | MFC Recruitment 2021",
      authwall: true
    }
  },
  {
    path: "/test/thanks",
    name: "TestThanks",
    component: loadView("TestThanks"),
    meta: {
      title: "Thank You for taking the Test | MFC Recruitment 2021",
      authwall: true
    }
  },
  {
    path: "/rules",
    name: "Rules",
    component: loadView("Rules"),
    meta: { title: "Rules | MFC Recruitment 2021", authwall: false }
  },
  {
    path: "/user/thanks",
    name: "Thanks",
    component: loadView("Thanks"),
    meta: {
      title: "Thanks for Registering | MFC Recruitment 2021",
      authwall: false
    }
  },
  {
    path: "/test",
    name: "Test",
    component: loadView("Test"),
    meta: { title: "Take Tests | MFC Recruitment 2021", authwall: true }
  },
  {
    path: "/social/linkedin",
    beforeEnter() {
      location.href =
        "https://in.linkedin.com/company/mozilla-firefox-club-vit";
    }
  },
  {
    path: "/social/facebook",
    beforeEnter() {
      location.href = "https://www.facebook.com/mfcvit";
    }
  },
  {
    path: "/social/instagram",
    beforeEnter() {
      location.href = "https://www.instagram.com/mfc_vit/";
    }
  }
];

const router = new VueRouter({
  mode: "history",
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

router.beforeEach((to, from, next) => {
  const nearestWithTitle = to.matched
    .slice()
    .reverse()
    .find(r => r.meta && r.meta.title);
  if (nearestWithTitle) document.title = nearestWithTitle.meta.title;
  if (to.matched.some(record => record.meta.authwall)) {
    if (store.state.authenticated) {
      next();
    } else {
      next({
        path: "/user/login",
        query: { redirect: to.fullPath }
      });
    }
  } else {
    next();
  }
});

export default router;
