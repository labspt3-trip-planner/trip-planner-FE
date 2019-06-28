import axios from "axios";

const token = localStorage.getItem("user");
console.log(token);

let axiosConfig = axios.create({
  baseURL:
    process.env.REACT_APP_DEVELOPMENT ||
    "https://labspt3-trip-planner.herokuapp.com/",
  headers: { authorization: token }
});

export { axiosConfig };
