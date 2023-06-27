import axios from "axios";
const URL = "https://www.taleb_restaurant_api.onrender.com/";
const myAxios = axios.create({
  baseURL: URL,
  headers: {
    "Content-Type": "Application/json",
  },
  withCredentials: true,
});
export default myAxios;
