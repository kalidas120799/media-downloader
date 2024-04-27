import axios from "axios";

axios.defaults.baseURL = process.env.DOWNLOADER_API_BASE_URL;
axios.defaults.headers = {
    'X-RapidAPI-Key': process.env.RAPID_API_SECRET_KEY,
    'X-RapidAPI-Host': process.env.RAPID_API_HOST
}

export const webAgent = axios;