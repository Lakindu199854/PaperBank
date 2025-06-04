//This imports Axios, a promise-based HTTP client used to send requests to your backend (Express API).
import axios from 'axios';

//Creates a reusable Axios instance named api.
//Sets a default baseURL, so every API request you make with this instance will automatically prefix the URL with:
const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

export default api;
