import axios from "axios";

export const axiosInstance = axios.create();
axiosInstance.defaults.baseURL = process.env.EXPO_PUBLIC_BLOG_APP_API_DOMAIN
