<template>
  <div class="home">
    <galleries :galleries="galleries" />
  </div>
</template>

<script>
import Galleries from '../components/Galleries';
import { store } from '../store/store';
import { mapGetters } from 'vuex';

export default {
  name: 'Home',

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
      store.dispatch('fetchGalleries').then(() => next());
  }

  }
</script>
