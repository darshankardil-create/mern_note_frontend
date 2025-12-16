import axios from "axios";

const api = axios.create({
  baseURL: "https://mern-note-backend-100.onrender.com",
});

export default api;
