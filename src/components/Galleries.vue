<template>
<div>
    <div v-if="galleries.length">
        <search-galleries  @search="search" />
        <div class="card-deck gallery-container">

            <div v-for="gallery in galleries" :key="gallery.id" >
                <gallery-card :gallery=gallery />        
            </div>
        </div>
    </div>
    <div v-else class="alert alert-danger" role="alert">
        <p>Soory!</p>
        <br>
        <p>There is not available gallery. :(</p>
    </div>

</div>
</template>

<script>
import GalleryCard from './GalleryCard';
import SearchGalleries from './SearchGalleries'

export default {
    name: "Galleries",

    props: {
      galleries: Array
    },

    components: {
        GalleryCard,
        SearchGalleries
    },

    methods: {
        search(word) {
            this.$emit('handleSearch', word)
        }
    }
}
</script>

<style scoped>
.gallery-container{
    display: flex;
    justify-content: center;
    align-content: inherit;
    flex-wrap: wrap;
}
</style>