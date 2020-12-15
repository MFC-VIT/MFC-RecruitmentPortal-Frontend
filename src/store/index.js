
// import { resolve,reject } from "core-js/fn/promise";
import Vue from "vue";
import Vuex from "vuex";
import {API} from './axios'
import axios from 'axios'

Vue.use(Vuex);

var getAPI = axios.create({
  baseURL: 'https://mfcrecruitment.herokuapp.com/',
  timeout: 3000,
  headers: {
      Authorization: "Bearer " + localStorage.getItem('accessToken')
  }
})

export default new Vuex.Store({
  state: {
    accessToken: null,
    refreshToken: null,
    APIData: '',
    authenticated: false,
    Tech: null,
    Manage: null,
    Design: null,
    Edi: null,
  },
  mutations: {
    setAuthentication(state){
      state.authenticated= !state.authenticated;
    }
  },
  actions: {  

    getRefreshToken(){
      return new Promise((resolve,reject) => {
        API.post('/api/api/token/refresh/', {  
          refresh: localStorage.getItem('refreshToken')
        })
        .then(response => {
          localStorage.setItem('accessToken', response.data.access)
          resolve(true);
        })
        .catch(error => {
          reject(error) 
      })
    })
    },

    userLogin(context, usercredentials) {
       // eslint-disable-next-line
      return new Promise((resolve,reject) => {
        API.post('/api/login/', {  
          email: usercredentials.email,
          password: usercredentials.password 
        })
        .then(response => {
          context.commit('setAuthentication')
          localStorage.setItem('accessToken', response.data.tokens.access)
          localStorage.setItem('refreshToken', response.data.tokens.refresh)
          resolve(true);
        })
        .catch(error => {
             reject(error)  
        })
      })
    },

    userRegister(context, usercredentials) {
      return new Promise((resolve, reject) => {
        API.post('/api/register/', {
          email: usercredentials.email,
          username: usercredentials.username,
          phone_number: usercredentials.phone, 
          password: usercredentials.password,
          reg_no: usercredentials.reg_no
         })
        // eslint-disable-next-line
        .then(response => {
          resolve();
        })
        .catch(error => {
             reject(error)
        })
      })
    },
 
    userVerify(context, usercredentials) {
      // eslint-disable-next-line
      return new Promise((resolve,reject) => {
        API.post('/api/email-verify/', {
          email: usercredentials.email,
          otp: parseInt(usercredentials.otp)
        })
        // eslint-disable-next-line
        .then(response => {
          resolve(true);
        })
        .catch(error => {
          console.log(error)
             reject(error)
        })
      })
    },

    async userLogout(context, {dispatch}) {
      await dispatch('getRefreshToken')
        getAPI = axios.create({
            headers: {
              Authorization: "Bearer " + localStorage.getItem('accessToken')
            }
          })
        return new Promise((resolve, reject) => {
          getAPI.post('https://mfcrecruitment.herokuapp.com/api/logout/', {
              refresh: localStorage.getItem('refreshToken')
            })
            // eslint-disable-next-line
            .then(response => {
              context.commit('setAuthentication')
              resolve(true);
            })
            .catch(error => {
                reject(error)
            })
        })
    },

    async getTest({dispatch}){
        await dispatch('getRefreshToken')
        getAPI = axios.create({
            headers: {
              Authorization: "Bearer " + localStorage.getItem('accessToken')
            }
          })
        getAPI.get('https://mfcrecruitment.herokuapp.com/api/user_test/')
          .then(response => 
            {
              localStorage.setItem('Tech', response.data.technical),
              localStorage.setItem('Manage', response.data.management),
              localStorage.setItem('Edi', response.data.editorial),
              localStorage.setItem('Design', response.data.design)
            })
    },

    async getTechnical({dispatch}){
      await dispatch('getRefreshToken')
      getAPI = axios.create({
            headers: {
              Authorization: "Bearer " + localStorage.getItem('accessToken')
            }
          })
    },

    async getManagement({dispatch}){
      await dispatch('getRefreshToken')
      getAPI = axios.create({
            headers: {
              Authorization: "Bearer " + localStorage.getItem('accessToken')
            }
          })
    },

    async getDesign({dispatch}){
      await dispatch('getRefreshToken')
      getAPI = axios.create({
            headers: {
              Authorization: "Bearer " + localStorage.getItem('accessToken')
            }
          })
    },

    async getEdi({dispatch}){
      await dispatch('getRefreshToken')
      getAPI = axios.create({
            headers: {
              Authorization: "Bearer " + localStorage.getItem('accessToken')
            }
          })
    },
  },
  modules: {

  }
});