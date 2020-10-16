import axios from 'axios';
import { getToken } from './auth';

const api = axios.create({
  baseURL: "https://8080-b13d3bc0-f4fa-449e-95b8-50a8aab3584a.ws-us02.gitpod.io/"
})

api.interceptors.request.use(async config => {
    const token = getToken();
    if (token) {
      config.headers.authorization = `bearer ${token}`;
    }
    return config; 
});



export default api