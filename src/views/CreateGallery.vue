<template>
  <div class="container">
    <form @submit.prevent="onSubmit">

      <div class="form-group row">
        <label for="title" class="col-4 col-form-label">Title:</label>
        <div class="col-8">
          <div class="input-group">
            <input id="title" name="title" type="text" class="form-control here" v-model="gallery.title" required />
          </div>

          <div class="input-group">
            <span class="alert alert-warning" v-if="errors['title']">{{ errors.title[0] }}</span> 
          </div>
        </div>
      </div>


      <div class="form-group row">
        <label for="description" class="col-4 col-form-label">Description:</label>
        <div class="col-8">
          <div class="input-group">
            <textarea id="description" name="description" type="text" class="form-control here" v-model="gallery.description"></textarea>
          </div>
        </div>
      </div>


      <div class="form-group row" v-for="(num, index) in count" :key="index">
        <label for="images" class="col-4 col-form-label">Image:</label>
        <div class="col-8">
          <div class="input-group">
            <input id="url" name="url" type="text" class="form-control here" v-model="gallery.images[index]" required>
            
            <button class="btn btn-light" type="button" @click="deleteUrl(gallery.images[index])">x</button> 

            <button class="btn btn-light" type="button" v-if="gallery.images[index] && index > 0" @click="moveUp(gallery.images[index])">up</button>

            <button class="btn btn-light" type="button" v-if="gallery.images[index] && index < gallery.images.length-1" @click="moveDown(gallery.images[index])">down</button>
          </div>

          <div class="input-group">
            <span class="alert alert-warning" v-if="errors[`images.${index}`]">Wrong format of image.</span> 
          </div>
        </div>
      </div>

      <div class="form-group row">
        <label for="images" class="col-4 col-form-label"></label>
        <div class="col-8">
          <button class="btn btn-light" type="button" @click="addUrl">Add more images</button>
        </div>
      </div>

      <button class="btn btn-info btn-margin" type="submit">Submit</button>
      <button class="btn btn-danger btn-margin" type="button" @click="cancle">Cancle</button>
    </form>
  </div>
</template>

<script>
import { store } from '../store/store'
import { mapGetters, mapActions } from 'vuex';

export default {
  name: "CreateGallery",

  data(){
    return {
      gallery: {
        title: '',
        description: '',
        images: [],
        user_id: ''
      },
      imageItem: {
        id: 0
      },
      count: 1,
      errors: []
    }
  },

  computed: {
    ...mapGetters([
      'user',
      'singleGallery',
    ])
  },

  methods: {
    ...mapActions([
      'createGallery',
      'editGallery'
    ]),

    async onSubmit() {
      const response = ( this.$route.name === "edit-gallery" ? await this.editGallery(this.gallery) : await this.createGallery(this.gallery) );
      if (response.errors) {
        this.errors = response.errors;
      } else {
        this.redirectToPage('/my-galleries');
      }
    },

    redirectToPage(pageUrl) {
      this.$router.push(pageUrl);
    },

    cancle() {
      this.redirectToPage('/my-galleries');
    },


    addUrl(){
      this.count++ 
    },

    deleteUrl(image){
      if (this.count > 1) {
        this.count--;
        const currentIndex = this.gallery.images.indexOf(image);
        this.gallery.images.splice(currentIndex, 1);
      }
    },

    moveUp(image){
      const currentIndex = this.gallery.images.indexOf(image);
      if (currentIndex) {
        this.gallery.images.splice(currentIndex - 1, 0, this.gallery.images.splice(currentIndex, 1)[0]);
      }
    },

    moveDown(image){
      const currentIndex = this.gallery.images.indexOf(image);
      if (currentIndex != this.count - 1) {
        this.gallery.images.splice(currentIndex + 1, 0, this.gallery.images.splice(currentIndex, 1)[0]);
      }
    }
  },

  created() {
    if (this.$route.name === 'edit-gallery') {
      this.gallery = {... this.singleGallery};
      this.gallery.images = [];
      this.count = 0;
      console.log(this.singleGallery.images)
      this.singleGallery.images.forEach(image => {
        console.log(image)
        this.gallery.images.push(image.url)
        this.count++
      });
    }
  },

  beforeRouteEnter(to, from, next) {
      if (to.name === "edit-gallery") {
        console.log(to.params)
        store.dispatch('fetchSingleGallery', to.params.id).then(() => next());
      } else {
        next()
      }
  }
  
}
</script>

<style scoped>
.container {
  margin: 0 auto;
  width: 80%;
  margin-top: 40px;  
}

.btn-margin{
  margin: 0px 10px;
}
</style>