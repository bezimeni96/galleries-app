<template>
    <div class="card" style="width: 240px;">
        <img class="card-img-top" :src="gallery.images[0]" :alt="gallery.title">
        <div class="card-body">
            <h5 class="card-title">{{ gallery.title }}</h5>
            <p class="card-text">{{ gallery.author }}</p>
            <p class="card-text">{{ gallery.created_at }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "GalleryCard",
    props: {
        gallery: Object,
    }
}
</script>

<style scoped>
.card {
  margin: 50px 0;
}
</style>