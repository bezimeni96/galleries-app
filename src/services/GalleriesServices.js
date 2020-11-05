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

  editGallery(gallery) {
    return this.apiClient.put(`/galleries/${gallery.id}`, gallery);
  }

  deleteGallery(id) {
    return this.apiClient.delete(`/galleries/${id}`)
  }

}

export const galleriesServices = new GalleriesServices()