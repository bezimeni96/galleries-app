import AxiosServices from './AxiosServices';

export default class AuthService extends AxiosServices {
  

  login(credentials) {
    return this.apiClient.post('/login', credentials)
  }

  register(user) {
    return this.apiClient.post('/register', user);
  }

  
}

export const authService = new AuthService();