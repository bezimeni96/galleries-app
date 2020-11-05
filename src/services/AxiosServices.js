import axios from 'axios';

export default class AxiosService {
  constructor() {
    this.apiClient = axios.create({
      baseURL: 'http://localhost:8000/api',
      timeout: 5000,
      headers: { Accept: 'application/json' }
    })
  }
}