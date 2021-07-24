// import { resolve,reject } from "core-js/fn/promise";
import Vue from "vue";
import Vuex from "vuex";
import { API } from "./axios";
import axios from "axios";

Vue.use(Vuex);

var getAPI = axios.create({
  baseURL: "https://mfcrecruitment.herokuapp.com/",
  timeout: 3000,
  headers: {
    Authorization: "Bearer " + localStorage.getItem("accessToken")
  }
});

export default new Vuex.Store({
  state: {
    accessToken: null,
    refreshToken: null,
    APIData: "",
    authenticated: false,
    Backend: null,
    Frontend: null,
    Design: null,
    App: null,
    ML: null
  },
  mutations: {
    setAuthentication(state) {
      state.authenticated = !state.authenticated;
    },
    setTestStatus(state, response) {
      state.Backend = response.data.backend;
      state.Frontend = response.data.frontend;
      state.Design = response.data.design;
      state.App = response.data.app;
      state.ML = response.data.ML;
    }
  },
  actions: {
    getRefreshToken() {
      return new Promise((resolve, reject) => {
        API.post("/api/api/token/refresh/", {
          refresh: localStorage.getItem("refreshToken")
        })
          .then(response => {
            localStorage.setItem("accessToken", response.data.access);
            resolve(true);
          })
          .catch(error => {
            reject(error);
          });
      });
    },

    userLogin(context, usercredentials) {
      // eslint-disable-next-line
			return new Promise((resolve, reject) => {
        API.post("/api/login/", {
          email: usercredentials.email,
          password: usercredentials.password
        })
          .then(response => {
            context.commit("setAuthentication");
            localStorage.setItem("accessToken", response.data.tokens.access);
            localStorage.setItem("refreshToken", response.data.tokens.refresh);
            resolve(true);
          })
          .catch(error => {
            if (error.response.status === 401) {
              reject(new Error("Invalid Email or Password!! Try Again."), null);
            } else reject(error.response.data.message);
          });
      });
    },

    userRegister(context, usercredentials) {
      return new Promise((resolve, reject) => {
        API.post("/api/register/", {
          email: usercredentials.email,
          username: usercredentials.username,
          phone_number: usercredentials.phone,
          password: usercredentials.password,
          reg_no: usercredentials.reg_no
        })
          // eslint-disable-next-line
					.then(({ data, status }) => {
            if (status === 201) {
              resolve(true);
            }
          })
          .catch(error => {
            if (error.response.status === 400) {
              reject(new Error("User with this email already exists."), null);
            } else reject(error.response.data.message);
          });
      });
    },

    userVerify(context, usercredentials) {
      // eslint-disable-next-line
			return new Promise((resolve, reject) => {
        API.post("/api/email-verify/", {
          email: usercredentials.email,
          otp: parseInt(usercredentials.otp)
        })
          // eslint-disable-next-line
					.then(({ data, status }) => {
            if (status === 200) {
              resolve(true);
            }
          })
          .catch(error => {
            if (error.response.status === 400) {
              reject(new Error("Invalid Email or OTP. Try Again !!"), null);
            } else reject(error.response.data.message);
          });
      });
    },

    async userLogout(context, { dispatch }) {
      await dispatch("getRefreshToken");
      getAPI = axios.create({
        headers: {
          Authorization: "Bearer " + localStorage.getItem("accessToken")
        }
      });
      return new Promise((resolve, reject) => {
        getAPI
          .post("https://mfcrecruitment.herokuapp.com/api/logout/", {
            refresh: localStorage.getItem("refreshToken")
          })
          // eslint-disable-next-line
					.then(response => {
            context.commit("setAuthentication");
            resolve(true);
          })
          .catch(error => {
            reject(error);
          });
      });
    },

    async getTest({ dispatch }) {
      await dispatch("getRefreshToken");
      getAPI = axios.create({
        headers: {
          Authorization: "Bearer " + localStorage.getItem("accessToken")
        }
      });
      getAPI
        .get("https://mfcrecruitment.herokuapp.com/api/user_test/")
        .then(response => {
          localStorage.setItem("Backend", response.data.backend),
            localStorage.setItem("Frontend", response.data.frontend),
            localStorage.setItem("App", response.data.app),
            localStorage.setItem("Design", response.data.design);
          localStorage.setItem("ML", response.data.ML);
        });
    },

    async getBackend({ dispatch }) {
      await dispatch("getRefreshToken");
      getAPI = axios.create({
        headers: {
          Authorization: "Bearer " + localStorage.getItem("accessToken")
        }
      });
    },

    async getFrontend({ dispatch }) {
      await dispatch("getRefreshToken");
      getAPI = axios.create({
        headers: {
          Authorization: "Bearer " + localStorage.getItem("accessToken")
        }
      });
    },

    async getDesign({ dispatch }) {
      await dispatch("getRefreshToken");
      getAPI = axios.create({
        headers: {
          Authorization: "Bearer " + localStorage.getItem("accessToken")
        }
      });
    },

    async getApp({ dispatch }) {
      await dispatch("getRefreshToken");
      getAPI = axios.create({
        headers: {
          Authorization: "Bearer " + localStorage.getItem("accessToken")
        }
      });
    },

    async getML({ dispatch }) {
      await dispatch("getRefreshToken");
      getAPI = axios.create({
        headers: {
          Authorization: "Bearer " + localStorage.getItem("accessToken")
        }
      });
    },

    resetSendMail(context, usercredentials) {
      // eslint-disable-next-line
			return new Promise((resolve, reject) => {
        API.post("/api/request-reset-email/", {
          email: usercredentials.email
        })
          // eslint-disable-next-line
					.then(response => {
            resolve(true);
          })
          .catch(error => {
            console.log(error);
            reject(error);
          });
      });
    },

    resetVerifyToken(context, usercredentials) {
      const URL =
        "/api/password-reset/" +
        usercredentials.uidb64 +
        "/" +
        usercredentials.token;
      //eslint-disable-next-line
			return new Promise((resolve, reject) => {
        API.get(URL)
          .then(response => {
            if (response.data.success == true) resolve(true);
            else reject(new Error("Invalid Token!"));
          })
          .catch(err => {
            reject(err);
          });
      });
    },

    resetSetNewPassword(context, usercredentials) {
      // eslint-disable-next-line
			return new Promise((resolve, reject) => {
        API.patch("/api/password-reset-complete", {
          password: usercredentials.password,
          token: usercredentials.token,
          uidb64: usercredentials.uidb64
        })
          // eslint-disable-next-line
					.then(response => {
            resolve(true);
          })
          .catch(error => {
            console.log(error);
            reject(error);
          });
      });
    }
  },
  modules: {}
});
