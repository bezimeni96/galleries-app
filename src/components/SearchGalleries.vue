<template>
<div class="md-form mt-0 wrap">
  <input class="form-control" type="text" placeholder="Search" aria-label="Search" v-model="searchInput">
  <button class="btn btn-outline-info" @click="filterGalleries">Search</button>
</div>
</template>

<script>
export default {
  name: "SearchGalleries",
  data() {
    return {
      searchInput: ''
    }
  },
  methods: {
    filterGalleries() {
      this.$emit('search', this.searchInput)
    }
  },
}
</script>

<style scoped>
.wrap {
  width: 60%;
  padding-top: 20px;
  display: flex;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
}
</style>