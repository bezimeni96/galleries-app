import { galleriesServices } from '../services/GalleriesServices';

export const actions = {
    async fetchGalleries(state) {
      const { data } = await galleriesServices.getAll();
      state.commit('setGalleries', data)
    },

    async fetchSingleGallery(state, id) {
        const { data } = await galleriesServices.getGallery(id);
        state.commit('setSingleGallery', data)
    }
}