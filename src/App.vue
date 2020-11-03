<template>
  <div id="app">
    <nav id="nav" class="navbar navbar-light bg-light">
      <loggedNavbarItems />
      <unloggedNavbarItems />
    </nav>
    <router-view/>
  </div>
</template>

<script>
import loggedNavbarItems from './components/layouts/loggedNavbarItems';
import unloggedNavbarItems from './components/layouts/unloggedNavbarItems';

export default {
  name: "App",

  components: {
    loggedNavbarItems,
    unloggedNavbarItems
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
