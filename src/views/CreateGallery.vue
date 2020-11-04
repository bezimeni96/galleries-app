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
            
            <button class="btn btn-light" @click="deleteUrl(gallery.images[index])">x</button> 

            <button class="btn btn-light" v-if="gallery.images[index] && index > 0" @click="moveUp(gallery.images[index])">up</button>

            <button class="btn btn-light" v-if="gallery.images[index] && index < gallery.images.length-1" @click="moveDown(gallery.images[index])">down</button>
          </div>

          <div class="input-group">
            <span class="alert alert-warning" v-if="errors[`images.${index}`]">Wrong format of image.</span> 
          </div>
        </div>
      </div>

      <div class="form-group row">
        <label for="images" class="col-4 col-form-label"></label>
        <div class="col-8">
          <button class="btn btn-light" @click="addUrl">Add more images</button>
        </div>
      </div>

      <button class="btn btn-info btn-margin" type="submit">Add Gallery</button>
      <button class="btn btn-danger btn-margin" type="button" @click="cancle">Cancle</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: "CreateGallery",

  data(){
    return {
      gallery: {
        title: '',
        description: '',
        images: []
      },
      count: 1,
      errors: []
    }
  },

  methods: {
    ...mapActions([
      'createGallery'
    ]),

    async onSubmit() {
      const response = await this.createGallery(this.gallery);
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
      if (this.count > 1){
        let currentIndex = this.gallery.images.indexOf(image);
        this.gallery.images.splice(currentIndex, 1);
        this.gallery.images.splice(image, 1);
        this.count--;
      }
    },

    moveUp(image){
      let currentIndex = this.gallery.images.indexOf(image);
      let previousIndex = this.gallery.images.indexOf(image) - 1;
      if (currentIndex !== 0 && this.count > 1) {
        this.gallery.images.splice(currentIndex, 1, this.gallery.images[previousIndex]);
        this.gallery.images.splice(previousIndex, 1, image);
      } else if (previousIndex < 0) {
        let lastIndex = this.gallery.images.length - 1;
        this.gallery.images.splice(previousIndex, 1, this.gallery.images[lastIndex]);
      }
    },

    moveDown(image){
      let currentIndex = this.gallery.images.indexOf(image);
      let nextIndex = this.gallery.images.indexOf(image) + 1;
      if (currentIndex < this.gallery.images.length-1) {
        this.gallery.images.splice(currentIndex, 1, this.gallery.images[nextIndex]);
        this.gallery.images.splice(nextIndex, 1, image);
      }
    }
  },

  
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