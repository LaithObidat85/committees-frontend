import axios from 'axios';

const api = axios.create({
  baseURL:
    window.location.hostname === 'localhost'
      ? 'http://localhost:5000' // ✅ أثناء التطوير
      : 'https://site--committees-iu--lz2bkwfq978l.code.run', // ✅ بعد النشر
  withCredentials: true,
});

export default api;
