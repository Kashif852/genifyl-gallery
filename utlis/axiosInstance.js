import axios from 'axios';

let store;

export const injectStore = _store => {
  store = _store;
};


const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  withCredentials: true,
  timeout: 300000
});

axiosInstance.interceptors.request.use(config => {
  if (config.data instanceof FormData) {
    config.headers['Content-Type'] = 'multipart/form-data';
  } else {
    config.headers['Content-Type'] = 'application/json';
  }
  return config;
});
// Add request interceptor for logging
axiosInstance.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    console.error('Request error:', error);
    return Promise.reject(error);
  }
);

// Add response interceptor for logging
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // If the error is 401 and we haven't tried to refresh yet
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        // Try to verify/refresh session
        await axios.get('/auth/verify-session', { withCredentials: true });
        
        // If successful, retry the original request
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        // If refresh fails, dispatch token expired
        store.dispatch(setTokenExpired());
        return Promise.reject(error);
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;