<template>
<div class="md-form mt-0 wrap">
  <input class="form-control" type="text" placeholder="Search" aria-label="Search" v-model="searchInput">
  <button class="btn btn-outline-info" @click="search">Search</button>
</div>
</template>

<script>
// import { mapMutations } from 'vuex';
export default {
  name: "SearchGalleries",
  data() {
    return {
      searchInput: ''
    }
  },
  methods: {
    search() {
      // console.log(this.$route)
      this.$router.push(this.$route.path + "?search=" + this.searchInput);
    }
  },
}
</script>

<style scoped>
.wrap {
  width: 60%;
  padding-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>