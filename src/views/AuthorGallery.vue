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
      alert('This function is available only on home/all galleries page');
    }
  },

  created() {
    if (this.$route.name === "my-galleries") {
        const author = store.getters.user;
        console.log('mc')
        store.dispatch('fetchAuthorGalleries', author.id).then(this.galleries);
      } else {
      this.galleries;
    }
  },
  beforeRouteEnter(to, from, next) {
      if (to.name === "my-galleries") {
        const author = store.getters.user;
        console.log('bf')
        if (author) {
          store.dispatch('fetchAuthorGalleries', author.id).then(() => next());
        } else {
          next();
        }
      } else {
        store.dispatch('fetchAuthorGalleries', to.params.id).then(() => next());
      }
  }
  }
</script>