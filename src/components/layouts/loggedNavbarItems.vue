<template>
    <div>
        <router-link to="/" class="navbar-item">All Galleries</router-link>
        <router-link to="/my-galleries" class="navbar-item">My Galleries</router-link>
        <router-link to="/create" class="navbar-item">Create New Gallery</router-link>
        <router-link to="/logout" @click.native="logoutUser" class="navbar-item" >Logout</router-link>
    </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex';

export default {
    name: "LoggedUser",

    methods: {
        ...mapMutations([
        'resetTokenUser'
        ]),
        ...mapActions([
            'logout'
        ]),

        logoutUser() {
            this.logout();
            localStorage.removeItem('token');
            this.resetTokenUser();
            this.$router.push('/login');
        }
    }
}
</script>

<style scoped>
</style>