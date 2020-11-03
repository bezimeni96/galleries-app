import { galleriesServices } from '../services/GalleriesServices';

export const actions = {
    async fetchGalleries(state) {
      const { data } = await galleriesServices.getAll();
      console.log(data)
      state.commit('setGalleries', data)
    },
}