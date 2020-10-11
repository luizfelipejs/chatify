import axios from 'axios';
import { getToken } from './auth';

const api = axios.create({
  baseURL: "https://8080-b5c0dcf0-e9e2-4e35-9529-00eeece24591.ws-us02.gitpod.io/"
})

api.interceptors.request.use(async config => {
    const token = getToken();
    
    if (token) {
        config.headers.authorization = `bearer ${token}`;
    }

    return config; 
});



export default api