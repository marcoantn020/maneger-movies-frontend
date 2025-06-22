import axios from "axios";

const moviesURL: string = import.meta.env.VITE_API ?? '';

const api = axios.create({
    baseURL: moviesURL,
});


api.interceptors.request.use((config) => {
    const token = localStorage.getItem("access_token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});


api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            localStorage.removeItem("access_token");
            localStorage.removeItem("user_name");
            window.location.href = "/";
        }
        return Promise.reject(error);
    }
);

export default api;