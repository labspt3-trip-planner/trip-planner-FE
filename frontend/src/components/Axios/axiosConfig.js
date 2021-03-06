import axios from "axios";

const token = localStorage.getItem("user");

let axiosConfig = axios.create({
  baseURL:
    process.env.REACT_APP_DEVELOPMENT ||
    "https://labspt3-trip-planner.herokuapp.com/",
  headers: { Authorization: token }
  // auth: token
});

export { axiosConfig };
