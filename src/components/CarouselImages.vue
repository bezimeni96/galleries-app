<template>
<div>
    <b-carousel
      id="carousel-1"
      :interval="4000"
      controls
      indicators
      background="#ABABAB"
      img-width="960"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
    >
      <b-carousel-slide v-for="image in images" :key="image.id" :img-src="image.url"></b-carousel-slide>
    </b-carousel>
</div>
</template>

<script>
export default {
    name: "CarouselImages",

    props: {
        images: Array
    }
}
</script>

<style scoped>
</style>