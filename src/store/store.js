import Vuex from 'vuex';
import Vue from 'vue';

import { getters } from './getters';
import { mutations } from './mutations';
import { actions } from './actions';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        galleries: [],
        singleGallery: {},
        numberOfGalleries: 0,

        searchText: '',
        page: 0,

        token: localStorage.getItem('token'),
        user: {},
    },
  
    getters,
    mutations,
    actions
  })