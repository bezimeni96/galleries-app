<template>
    <div class="card" style="width: 240px;">
        <img class="card-img-top" :src="gallery.images[0].url" :alt="gallery.title">
        <div class="card-body">
            <h3 class="card-title"><router-link :to="{ name:'single-gallery', params: { id: gallery.id } }">{{ gallery.title }}</router-link>
                </h3>
            <router-link class="card-text" :to="{ name: 'authors-gallery', params: { id: gallery.author.id }}"><h5>{{ gallery.author.first_name }} {{ gallery.author.last_name }}</h5></router-link>
            <p class="card-text">{{ gallery.created_at | formatDate }}</p>
        </div>
    </div>
</template>

<script>
import { DateMixin } from '@/mixins';

export default {
    name: "GalleryCard",
    props: {
        gallery: Object,
    },

    mixins: [ DateMixin ],
}
</script>

<style scoped>
.card {
  margin: 50px 0;
}
</style>