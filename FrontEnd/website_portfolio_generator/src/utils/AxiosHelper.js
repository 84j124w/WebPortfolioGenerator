import axios from "axios";
import { getUserToken } from "../auth/AuthenticatioHandler";

const BASE_URL = "http://localhost:8080/api";

export const privateAxios = axios.create({
    baseURL:BASE_URL
});

privateAxios.interceptors.request.use(config =>{
    const token = "Bearer "+getUserToken();
    if(token){
        config.headers.Authorization = token;
        return config;
    }
}, error=>Promise.reject("error", error));