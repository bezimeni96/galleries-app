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

  getAuthors(id) {
    return this.apiClient.get(`/authors/${id}`);
  }

  editGallery(id) {
    return this.apiClient.put(`/galleries/${id}`);
  }

}

export const galleriesServices = new GalleriesServices()