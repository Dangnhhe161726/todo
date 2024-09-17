import axios from 'axios';

// Create an Axios instance with a base URL
const axiosInstance = axios.create({
  baseURL: 'http://localhost:8099/api', // Your base API URL
  headers: {
    'Content-Type': 'application/json',
    // You can add any default headers here if needed
  },
});

// Optionally, add interceptors for request/response handling
axiosInstance.interceptors.request.use(
  (config) => {
    // You can add custom logic before the request is sent
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    // Custom logic for handling the response
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
