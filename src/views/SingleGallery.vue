<template>
    <div>
        <h2>{{ singleGallery.title }}</h2>
        <h5>Author: {{ singleGallery.author.first_name }} {{ singleGallery.author.last_name }}</h5>
        <p>Created: {{ singleGallery.created_at }}</p>
        <br>
        <p>{{ singleGallery.description }}</p>
        <br>
        <carousel-images :images="singleGallery.images" />
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { store } from '../store/store';
import CarouselImages from '../components/CarouselImages';

export default {
    name: "SingleGallery",

    components: {
        CarouselImages
    },

    computed: {
        ...mapGetters([
            'singleGallery'
        ])
    },

    created() {
        this.singleGallery;
    },
 
    beforeRouteEnter (to, from, next) {
        store.dispatch('fetchSingleGallery', to.params.id).then(() => next());
    }
}
</script>

<style lang="stylus" scoped>
</style>