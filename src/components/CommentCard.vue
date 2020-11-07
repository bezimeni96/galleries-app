<template>
  <div>
    <p class="comment-item">Author: {{ comment.user.first_name }} {{ comment.user.last_name }}</p>
    <p class="comment-item">Created : {{ comment.created_at | diffForHumans }}</p>
    <p class="comment-item">{{ comment.content }}</p>
    <button v-if="comment.user_id == user.id" class="btn btn-outline-secondary" @click="deleteThisComment(comment)">Delete</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { DateMixin } from '@/mixins';

export default {
  name: "CommentCard",

  props:{
    comment: Object,
  },

  mixins: [ DateMixin ],

  computed: {
    ...mapGetters([
      'user'
    ])
  },

  methods: {
    ...mapActions([
      'deleteComment'
    ]),
    
    deleteThisComment(comment) {
      if (confirm('Do you want to delete this comment?')) {
        this.deleteComment(comment.id);
      }
    }
  }
}
</script>

<style scoped>
.comment-item {
  text-align: left;
}
.btn-outline-secondary {
  text-align: right;
}
</style>