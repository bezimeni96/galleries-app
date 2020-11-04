import AxiosService from './AxiosServices';

export default class GalleriesServices extends AxiosService{

  getAll() {
    return this.apiClient.get('/galleries');
  }

  getGallery(id) {
    return this.apiClient.get(`/galleries/${id}`);
  }

  addGallery(gallery) {
    return this.apiClient.post('/galleries', gallery)
  }

}

export const galleriesServices = new GalleriesServices()