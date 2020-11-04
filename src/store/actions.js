import { galleriesServices } from '../services/GalleriesServices';
import { authService } from '../services/AuthServices';

export const actions = {
    async fetchGalleries(state) {
      const { data } = await galleriesServices.getAll();
      state.commit('setGalleries', data);
    },

    async fetchSingleGallery(state, id) {
        const { data } = await galleriesServices.getGallery(id);
        state.commit('setSingleGallery', data);
    },

    async createGallery(state, gallery) {
      try {
        return await galleriesServices.addGallery(gallery);
      } catch (error) {
        const datas = error.response.data;
        return datas;
      }
    },

    async login(state, payload) {
      const response = await authService.login(payload);
      return response;
    }

}