import axios from 'axios'

// const getAPI = axios.create({
//     baseURL: 'https://mfcrecruitment.herokuapp.com/',
//     timeout: 3000,
//     headers: {
//         Authorization: "Bearer " + localStorage.getItem('accessToken')
//     }
// })

const API = axios.create({
    baseURL: 'https://mfcrecruitment.herokuapp.com/',
    timeout: 5000
})

export {API}