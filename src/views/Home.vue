<template>
  <div class="home">
    <galleries :galleries="galleries" />
  </div>
</template>

<script>
import Galleries from '../components/Galleries'

export default {
  name: 'Home',

  components: {
    Galleries
  },

  data() {
        return {
            galleries: [
                {
                    id: 1,
                    title: "Galerija 1",
                    author: "mika",
                    created_at: "2005-5-7",
                    images: [ "https://picsum.photos/200", "https://picsum.photos/200", "https://picsum.photos/200"]
                },
                {
                    id: 2,
                    title: "Galerija 2",
                    author: "ika",
                    created_at: "2005-5-7",
                    images: [ "https://picsum.photos/200", "https://picsum.photos/200", "https://picsum.photos/200"]
                },
                {
                    id: 3,
                    title: "Galerija 3",
                    author: "luka",
                    created_at: "2005-5-7",
                    images: [ "https://picsum.photos/200", "https://picsum.photos/200", "https://picsum.photos/200"]
                },
                {
                    id: 4,
                    title: "Galerija 4",
                    author: "mika",
                    created_at: "2005-5-7",
                    images: [ "https://picsum.photos/200", "https://picsum.photos/200", "https://picsum.photos/200"]
                },
                {
                    id: 5,
                    title: "Galerija 5",
                    author: "ika",
                    created_at: "2005-5-7",
                    images: [ "https://picsum.photos/200", "https://picsum.photos/200", "https://picsum.photos/200"]
                },
                {
                    id: 6,
                    title: "Galerija 6",
                    author: "luka",
                    created_at: "2005-5-7",
                    images: [ "https://picsum.photos/200", "https://picsum.photos/200", "https://picsum.photos/200"]
                }
            ]
        }
    }
}
</script>
