import axios from "axios";

const api = axios.create({
  baseURL: 
    window.location.hostname === "localhost"
      ? "http://localhost:5000" // ✅ أثناء التطوير
      : "https://committees-backend.onrender.com", // ✅ بعد النشر
  withCredentials: true
});

export default api;
