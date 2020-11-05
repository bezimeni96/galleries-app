import axios from 'axios';

export default class AxiosService {
  constructor() {
    this.apiClient = axios.create({
      baseURL: 'http://localhost:8000/api',
      timeout: 5000,
      headers: { Accept: 'application/json' }
    });
    this.apiClient.interceptors.request.use( config => {
      const token = localStorage.getItem('token');
        console.log('usao', token);
        config.headers = {
          "Authorization":  `Bearer ${token}`
        }
        return config;
    },
      error => {
        console.log('erooooor')
        return Promise.reject(error)
    });
  }
}