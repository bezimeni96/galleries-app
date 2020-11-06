<template>
  <div class="comments-container">
    <h5>Comments:</h5>
    <br>
    <div class="container" v-for="comment in comments" :key="comment.id">
      <comment-card :comment="comment" />
      <hr>
    </div>
    <div class="form-group">
      <form v-if="token.length && !createdComment" @submit.prevent=addComment>
        <label for="exampleFormControlTextarea1">Leave a comment</label>
        <textarea
          class="form-control"
          v-model="newComment.content"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea> <br>
        <button class="btn btn-outline-danger">Add Comment</button>
      </form>
    </div>
  </div>
</template>

<script>
import CommentCard from './CommentCard'
import { mapGetters } from 'vuex'

export default {
  name: "Comments",

  props: {
    comments: Array
  },

  data() {
    return {
      newComment: {
        content: ''
      },

      createdComment: false
    }
  },

  components: {
    CommentCard
  },

  computed: {
    ...mapGetters([
      'token',
      'user'
    ])
  },

  methods: {
    addComment() {
      if (this.newComment.content) {
        this.newComment.content.trim();
        this.newComment.user_id = this.user.id;
        // this.newComment.user = this.user;
        this.$emit('onClick', this.newComment);
        this.createdComment = true;
      }
    }
  }
}
</script>

<style scoped>
.comments-container {
  width: 80%;
  margin-left: auto;
  margin-right: auto;
}
</style>