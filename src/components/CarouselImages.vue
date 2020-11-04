<template>
  <div>
    <b-carousel
      id="carousel1"
      controls
      indicators
      :interval="4000"
      img-width="1024"
      img-height="480"
    >
      <div v-for="image in images" :key="image.id">
        <a :href="image.url" target="_blank">
          <b-carousel-slide>
            <img
              slot="img"
              class="d-block img-fluid w-100"
              :src="image.url"
              alt="image slot"
            >
          </b-carousel-slide>
        </a>
      </div>
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