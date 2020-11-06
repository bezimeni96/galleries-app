import AxiosService from './AxiosServices';

export default class GalleriesServices extends AxiosService{

  getAll(word = '') {
    return this.apiClient.get('/galleries', { params: { word }});
  }

  getGallery(id) {
    return this.apiClient.get(`/galleries/${id}`);
  }

  addGallery(gallery) {
    return this.apiClient.post('/galleries', gallery)
  }

  getAuthors(id, word = '') {
    return this.apiClient.get(`/authors/${id}`, { params: { word }});
  }

  editGallery(gallery) {
    return this.apiClient.put(`/galleries/${gallery.id}`, gallery);
  }

  deleteGallery(id) {
    return this.apiClient.delete(`/galleries/${id}`)
  }

  addComment(comment) {
    return this.apiClient.post(`/galleries/${comment.gallery_id}/comments`, comment);
  }

  deleteComment(id) {
    return this.apiClient.delete(`/comments/${id}`);
  }
}

export const galleriesServices = new GalleriesServices()