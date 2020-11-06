<template>
<div>
    <search-galleries  @search="search" />
    <div class="card-deck gallery-container">

        <div v-for="gallery in galleries" :key="gallery.id" >
            <gallery-card :gallery=gallery />        
        </div>
    </div>

</div>
</template>

<script>
import { mapActions } from 'vuex';
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
        ...mapActions([
            'fetchGalleries',
            'fetchAuthorGalleries'
        ]),

        search(word) {
            if (this.$route.name === 'home') {
                this.fetchGalleries(word);
            } else if (this.$route.name === 'authors-gallery') {
                const data = {
                    'id': this.galleries[0].author.id,
                    'word': word
                };
                console.log(data);
                this.fetchAuthorGalleries(data)
            }
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