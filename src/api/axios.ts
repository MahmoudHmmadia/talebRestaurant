import axios from "axios";
const URL = "https://taleb-restaurant-api.onrender.com/";
const LOCAL_URL = "http://localhost:3500/";
const myAxios = axios.create({
  baseURL: URL,
  headers: {
    "Content-Type": "Application/json",
  },
  withCredentials: true,
});
export default myAxios;
