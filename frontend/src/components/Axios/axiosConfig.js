import axios from "axios";

const token = localStorage.getItem("user");

let axiosConfig = axios.create({
  baseURL:
    process.env.REACT_APP_DEVELOPMENT ||
    "http://localhost:9090",
  headers: { authorization: token }
});

export { axiosConfig };
