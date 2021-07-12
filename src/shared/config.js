import axios from "axios";

const instance = axios.create({
  baseURL: "http://52.79.234.172/",
});

// instance.defaults.headers.common["Authorization"] = USER_TOKEN;

export default instance;
