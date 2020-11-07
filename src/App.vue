<template>
  <div id="app">
    <nav id="nav" class="navbar navbar-light bg-light">
      <loggedNavbarItems v-if="token" />
      <unloggedNavbarItems v-else />
    </nav>
    <router-view v-if="gotUser"/>
  </div>
</template>

<script>
import loggedNavbarItems from './components/layouts/loggedNavbarItems';
import unloggedNavbarItems from './components/layouts/unloggedNavbarItems';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: "App",

  components: {
    loggedNavbarItems,
    unloggedNavbarItems
  },

  data() {
    return {
      gotUser: false
    }
  },

  created() {
    if (!this.token) {
      this.gotUser = true;
    }
    this.fetchUser().then(()=> {
      this.gotUser = true;
    })
    console.log('cr')
  },

  computed: {
    ...mapGetters([
      'token'
    ])
  },

  methods: {
    ...mapActions([
      'fetchUser'
    ])
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.navbar-item {
  margin-left: 15px;
}
</style>
