import axios from 'axios';

const httpHandler = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:8000',
});

httpHandler.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('access');
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

httpHandler.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      // Attempt to refresh the access token using the refresh token
      const refreshToken = localStorage.getItem('refresh');

      if (refreshToken) {
        // try {
        //   const response = await authApi.post("/refresh", { refreshToken });
        //   const newAccessToken = response.data.accessToken;
        //
        //   // Update the access token and retry the original request
        //   localStorage.setItem("accessToken", newAccessToken);
        //   originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        //   return httpHandler(originalRequest);
        // } catch (refreshError) {
        //   // Handle refresh token failure (e.g., log out the user)
        //   console.error("Refresh token failed:", refreshError);
        // }
      }
    }

    return Promise.reject(error);
  },
);

export default httpHandler;
