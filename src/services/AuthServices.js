import AxiosServices from './AxiosServices';

export default class AuthService extends AxiosServices {
  login(credentials) {
    return this.apiClient.post('/login', credentials)
  }
}

export const authService = new AuthService();