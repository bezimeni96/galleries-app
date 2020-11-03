export const mutations = {
    setGalleries(state, payload) {
        console.log(payload)
        state.galleries = payload;
      },
}