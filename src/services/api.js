import axios from 'axios';
const url = "http://localhost:8080/api"

const api = axios.create({
  baseURL: url
});

// Pour chaque requete, on verifie si un token existe dans le localStorage
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;