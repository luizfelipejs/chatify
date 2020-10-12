import axios from 'axios';
import { getToken } from './auth';

const api = axios.create({
  baseURL: "https://8080-dbb764a7-c7b9-444a-aca5-3c26b0621e4b.ws-us02.gitpod.io/"
})

api.interceptors.request.use(async config => {
    const token = getToken();
    
    if (token) {
        config.headers.authorization = `bearer ${token}`;
    }

    return config; 
});



export default api