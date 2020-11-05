import AxiosServices from './AxiosServices';

export default class AuthService extends AxiosServices {
  constructor() {
    super();
    this.apiClient.interceptors.request.use( config => {
      const token = localStorage.getItem('token');
        console.log('usao', token);
        config.headers["Authorization"] = token;
      return config;
    },
      error => {
        console.log('erooooor')
        return Promise.reject(error)
      })
  }

  login(credentials) {
    return this.apiClient.post('/login', credentials)
  }

  register(user) {
    return this.apiClient.post('/register', user);
  }

  
}

export const authService = new AuthService();