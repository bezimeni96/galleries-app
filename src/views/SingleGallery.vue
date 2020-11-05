<template>
    <div>
        <div v-if="user.id === singleGallery.author.id">
            <router-link :to="{ name: 'edit-gallery', params: { id: singleGallery.id }}">Edit gallery</router-link>
        </div>
        <h2>{{ singleGallery.title }}</h2>
        <span>Author:</span>
        <router-link :to="{ name: 'authors-gallery', params: { id: singleGallery.author.id }}"><h4>{{ singleGallery.author.first_name }} {{ singleGallery.author.last_name }}</h4></router-link>
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
            'singleGallery',
            'user'
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