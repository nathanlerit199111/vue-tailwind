import axios from 'axios';
import { getCookie } from '@/helpers/get-cookie';
const baseURL = import.meta.env.VITE_API_BASE_URL

const http = axios.create({
    baseURL
});

// Add a request interceptor
http.interceptors.request.use(
  config => {
    /* 
      Change 'authToken' to whatever the cookie name you'll be using
      Update also the router/index.js
    */
    const authToken = getCookie('authToken');
    // If the authentication token exists, add it to the Authorization header
    if (authToken) {
      config.headers.Authorization = `Bearer ${authToken}`;
    }

    return config;
  },
  error => {
    // Handle request errors
    return Promise.reject(error);
  }
);

// http.interceptors.request.use(
//   (response) => response,
//   async (error) => {
//     switch (error.response.status) {
//       case 400:
//         console.error("400")
//         break;
//       case 401:
//         console.error("401")
//         break;
//       case 403:
//         console.error("403")
//         break;
//       case 404:
//         console.error("404")
//         break;
//       default:
//         console.error("error")
//     }
//     return Promise.reject(error);
//   }
// )

export default http;
