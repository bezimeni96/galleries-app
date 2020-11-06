<template>
  <div class="container">
    <galleries :galleries="galleries" @handleSearch="search"/>
  </div>
</template>

<script>
import Galleries from '../components/Galleries';
import { store } from '../store/store';
import { mapGetters } from 'vuex';
export default {
  name: 'AuthorGallery',
  components: {
    Galleries
  },
  computed: {
      ...mapGetters([
          'galleries',
          'user'
      ])
  },

  methods: {
    search() {
    }
  },

  created() {
    this.galleries;
  },
  beforeRouteEnter(to, from, next) {
      if (to.name === "my-galleries") {
        const author = store.getters.user;
        store.dispatch('fetchAuthorGalleries', author.id).then(() => next());
      } else {
        store.dispatch('fetchAuthorGalleries', to.params.id).then(() => next());
      }
  }
  }
</script>