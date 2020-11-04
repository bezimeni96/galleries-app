<template>
  <div class="container">
    <form @submit.prevent="registerSubmit">
      <div class="form-group">
        <label for="first-name">First name:</label>
        <input type="text" class="form-control" id="first-name" placeholder="Enter first name.." v-model="user.first_name">
      </div>
      <div class="input-group">
            <span class="alert alert-warning" v-if="errors['first_name']">{{ errors.first_name[0] }}</span> 
        </div>

      <div class="form-group">
        <label for="last-name">Last name:</label>
        <input type="text" class="form-control" id="last-name" placeholder="Enter last name.." v-model="user.last_name">
      </div>
      <div class="input-group">
            <span class="alert alert-warning" v-if="errors['last_name']">{{ errors.last_name[0] }}</span> 
          </div>

      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" class="form-control" id="email" placeholder="Enter email.." v-model="user.email">
      </div>
      <div class="input-group">
            <span class="alert alert-warning" v-if="errors['email']">{{ errors.email[0] }}</span> 
          </div>

      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" class="form-control" id="password" placeholder="Enter password.." v-model="user.password">
      </div>
      <div class="input-group">
            <span class="alert alert-warning" v-if="errors['password']">{{ errors.password[0] }}</span> 
          </div>

      <div class="form-group">
        <label for="confirm-password">Confirm password:</label>
        <input type="password" class="form-control" id="confirm-password" placeholder="Confirm password.." v-model="user.confirm_password">
      </div>
      <div class="input-group">
            <span class="alert alert-warning" v-if="errors['confirm_password']">{{ errors.confirm_password[0] }}</span> 
          </div>


      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" v-model="user.accepted_terms" required>
        <label class="form-check-label" for="exampleCheck1">I accept terms and conditions</label>
      </div>

      <button class="btn btn-success">Register</button>
    </form>
  </div>
</template>

<script>
import { mapActions , mapMutations} from 'vuex';
export default {
  name: "Register",
  data() {
    
    return {
      user: {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        confirm_password: '',
        accepted_terms: false
      },
      errors: [],
    }
  },
  methods: {
    ...mapActions([
      'registerUser'
    ]),

    ...mapMutations([
      'setUser',
      'setToken'
    ]),

    async registerSubmit() {
        const response = await this.registerUser(this.user);
        if (!response.errors) {
            localStorage.setItem('token', response.data.token);
            this.setUser(response.data.user);
            this.setToken(response.data.token);
            this.$router.push('/');
        } else {
            this.errors = response.errors;
        }
    },
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