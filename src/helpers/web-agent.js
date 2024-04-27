import axios from "axios";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_APP_BASE_URL | 'http://localhost:3000';

export const webAgent = axios;