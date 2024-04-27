import axios from "axios";

axios.defaults.baseURL = process.env.APP_BASE_URL || 'http://localhost:3000';

export const webAgent = axios;