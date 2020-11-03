<template>
<div class="card-deck gallery-container">
    <div v-for="gallery in galleries" :key="gallery.id" >
        <gallery-card :gallery=gallery />        
    </div>
</div>
</template>

<script>
import GalleryCard from './GalleryCard';

export default {
    name: "Galleries",

    props: {
      galleries: Array
    },

    components: {
        GalleryCard
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