export const mutations = {
    setGalleries(state, payload) {
        state.galleries = payload;
      },

    setSingleGallery(state, payload) {
        state.singleGallery = payload;
    },

    setUser(state, payload) {
        state.user = payload;
      },
    
    setToken(state, payload) {
      state.token = payload
    },

    resetTokenUser(state) {
        state.token = '';
        state.user = {};
    }
}