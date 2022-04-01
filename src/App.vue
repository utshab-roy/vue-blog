<script setup>
import { useRouter, RouterLink, RouterView } from 'vue-router'

const router = useRouter()

function logoutHandler() {

    localStorage.removeItem(('access_token'))
    router.push('/login')
    console.log("logout");
}

</script>

<template>
    <header>
        <nav class="navbar navbar-expand navbar-light bg-light">
            <div class="container-fluid">
                <RouterLink class="navbar-brand" to="/">BLOG</RouterLink>

                <ul class="navbar-nav me-auto">
                    <li class="nav-item">
                        <RouterLink class="nav-link active" to="/about">About</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link" to="/login">Login</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link" :to="{ name: 'user-create' }">Create</RouterLink>
                    </li>
                </ul>
                <li class="nav-item d-flex">
                    <button class="btn btn-info" @click="logoutHandler">Logout</button>
                </li>
            </div>
        </nav>
    </header>
    <div class="container">
        <RouterView />
    </div>
</template>

<style>
.router-link-active {
    background-color: lightblue;
    cursor: pointer;
    font-weight: bold;
}
</style>