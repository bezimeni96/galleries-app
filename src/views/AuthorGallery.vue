<template>
  <div class="container">
    <galleries :galleries="galleries" />
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
          'galleries'
      ])
  },

  created() {
    this.galleries;
  },

  beforeRouteEnter(to, from, next) {
      store.dispatch('fetchAuthorGalleries', to.params.id).then(() => next());
  }

  }
</script>
