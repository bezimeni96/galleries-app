import AxiosService from './AxiosServices';

export default class GalleriesServices extends AxiosService{

  getAll() {
    return this.apiClient.get('/galleries');
  }

}

export const galleriesServices = new GalleriesServices()