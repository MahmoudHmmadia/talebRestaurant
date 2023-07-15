import axios from "axios";
const URL = "https://taleb-restaurant-api.onrender.com/";
const localUrl = "http://localhost:3500/";
const myAxios = axios.create({
  baseURL: localUrl,
  headers: {
    "Content-Type": "Application/json",
  },
  withCredentials: true,
});
export default myAxios;
