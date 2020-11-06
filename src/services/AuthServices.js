import AxiosServices from './AxiosServices';

export default class AuthService extends AxiosServices {
  

  login(credentials) {
    return this.apiClient.post('/login', credentials)
  }

  register(user) {
    return this.apiClient.post('/register', user);
  }

  async getUser() {
    const resonse = await this.apiClient.get('/user');
    return resonse;
  }

  async logout() {
    return await this.apiClient.post('/logout'); 
  }
  
}

export const authService = new AuthService();