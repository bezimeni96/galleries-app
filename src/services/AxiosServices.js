import axios from 'axios';
import router from '../router';

export default class AxiosService {
  constructor() {
    this.apiClient = axios.create({
      baseURL: 'http://localhost:8000/api',
      // timeout: 5000,
      headers: { Accept: 'application/json' }
    });
    this.apiClient.interceptors.request.use( config => {
      const token = localStorage.getItem('token');
        config.headers.Authorization = `Bearer ${token}`;
        return config;
    },
      error => {
        return Promise.reject(error)
    });
    this.apiClient.interceptors.response.use( response => response,
      error => {
        console.log('interceptor', { error })
        if (error.response.status == 401 && error.response.config.url != '/login' ) {
          localStorage.removeItem('token');
          router.push('/login')
        } else {
          return Promise.reject(error)
        }
    });
  }
}
