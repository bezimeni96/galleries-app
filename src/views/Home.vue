<template>
  <div class="home">
    <galleries :galleries="galleries" @handleSearch="search"/>
    <br>
    <button v-if="paginate" class="btn btn-primary" @click="getMore">Get more</button>
  </div>
</template>

<script>
import Galleries from '../components/Galleries';
import { store } from '../store/store';
import { mapGetters, mapActions, mapMutations } from 'vuex';

export default {
  name: 'Home',

  components: {
    Galleries
  },

  computed: {
      ...mapGetters([
          'galleries',
          'numberOfGalleries',
          'searchText',
          'page'
      ]),

      paginate() {
        return (this.page*10 + 10 <= this.numberOfGalleries ? true : false)
      }
  },

  methods: {
    ...mapActions([
      'fetchMoreGalleries',
      'fetchGalleries'
    ]),
    ...mapMutations([
      'setSearchText',
      'setPage'
    ]),

    search(word) {
      this.setSearchText(word);
      this.setPage = 0;
      const data = {
        word: this.searchText,
        skip: this.page,
      }
      this.fetchGalleries(data)
    },

    getMore() {
      this.setPage(this.page + 1);
      const data = {
        'word': this.searcText,
        'skip': this.page
      }
      this.fetchMoreGalleries(data);
    }
  },

  created() {
    this.galleries;
  },

  beforeRouteEnter(to, from, next) {
      store.dispatch('fetchGalleries').then(() => next());
  }

  }
</script>
