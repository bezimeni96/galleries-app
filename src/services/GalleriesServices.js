import AxiosService from './AxiosServices';

export default class GalleriesServices extends AxiosService{

  getAll() {
    return this.apiClient.get('/galleries');
  }

  getGallery(id) {
    return this.apiClient.get('/galleries/' + id);
  }

}

export const galleriesServices = new GalleriesServices()