import { galleriesServices } from '../services/GalleriesServices';
import { authService } from '../services/AuthServices';

export const actions = {
    async fetchGalleries(state, word = '') {
      const { data } = await galleriesServices.getAll(word);
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
    },

    async registerUser(state, payload) {
      try {
        return await authService.register(payload);
      } catch (error) {
        const datas = error.response.data;
        return datas;
      }
    },

    async fetchAuthorGalleries(state, payload) {
      // console.log(payload.id, payload.word)
      if (!payload.word) {
        const { data } = await galleriesServices.getAuthors(payload);
        state.commit('setGalleries', data);
      } else {
        const { data } = await galleriesServices.getAuthors(payload.id, payload.word);
        state.commit('setGalleries', data);
      }
    },

    async fetchUser(state) {
      const { data } = await authService.getUser();
      state.commit('setUser', data)
    },

    async deleteGallery(state, id) {
      return await galleriesServices.deleteGallery(id)
    },

    async createComment(state, comment) {
      const { data } = await galleriesServices.addComment(comment);
      state.commit('addComment', data);
      return data;
    },

    async deleteComment(state, id) {
      const { data } = await galleriesServices.deleteComment(id);
      state.commit('deleteComment', data);
      return data;
    }

}