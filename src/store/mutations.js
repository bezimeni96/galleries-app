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
    },

    addComment(state, payload) {
      const comment = {...payload};
      const user = state.user;
      comment.user = user;
      state.singleGallery.comments.push(comment)
    },

    deleteComment(state, payload) {
      const indexOfComment = state.singleGallery.comments.indexOf(payload);
      state.singleGallery.comments.splice(indexOfComment, 1);
    },

    setNumberOfGalleries(state, payload) {
      state.numberOfGalleries = payload;
    },

    pushGalleries(state, payload) {
      state.galleries = state.galleries.concat(payload);
    },

    setSearchText(state, payload) {
      state.searchText = payload;
    },

    setPage(state, payload) {
      state.page = payload;
    }
}