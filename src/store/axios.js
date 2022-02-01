import axios from "axios";

const API = axios.create({
  baseURL: "https://mfcrec2022.herokuapp.com/",
  timeout: 5000
});

export { API };
