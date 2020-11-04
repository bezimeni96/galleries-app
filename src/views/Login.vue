<template>
  <div class="container">
    <div v-if="error.display" class="alert alert-danger">
      <p>{{error.text}}</p>
    </div>

    <form @submit.prevent="loginSubmit">
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" class="form-control" id="email" placeholder="Enter email.." v-model="credentials.email">
      </div>

      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" class="form-control" id="password" placeholder="Enter password.." v-model="credentials.password">
      </div>

      <button class="btn btn-success">Login</button>
    </form>
  </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex';
export default {
  name: "Login",
  data() {
    
    return {
      credentials: {
        email: '',
        password: ''
      },
      error: {
        text: 'This user does not exist, or you entered wrong email/password!',
        display: false,
      },
    }
  },
  methods: {
    ...mapActions([
      'login'
    ]),

    ...mapMutations([
      'setUser',
      'setToken'
    ]),
    
    async loginSubmit() {
      try {
        const response = await this.login(this.credentials);
        if (response.status === 200) {
          localStorage.setItem('token', response.data.token);
          this.setUser(response.data.user);
          this.setToken(response.data.token);
          this.$router.push('/');
        }
      } catch (error) {
        this.error.display = true;
        this.credentials.password = '';
      }
    }
  }
}
</script>

<style scoped>
.container {
  width: 90%;
  margin-left: auto;
  margin-right: auto;
}
</style>