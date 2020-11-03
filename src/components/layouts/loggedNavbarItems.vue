<template>
    <div>
        <router-link to="/" class="navbar-item">All Galleries</router-link>
        <router-link to="/my-galleries" class="navbar-item">My Galleries</router-link>
        <router-link to="/create" class="navbar-item">Create New Gallery</router-link>
        <router-link to="#" class="navbar-item">Logout</router-link>
    </div>
</template>

<script>
export default {
    name: "LoggedUser",
}
</script>

<style scoped>
</style>