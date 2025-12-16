import axios from "axios";

const api = axios.create({
  baseURL: "https://mernfornote2.onrender.com/api",
});

export default api;
