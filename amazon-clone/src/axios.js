import axios from "axios";

const instance = axios.create({
  baseURL: "https://amazon-backend-3513.herokuapp.com/api/",
});

export default instance;
