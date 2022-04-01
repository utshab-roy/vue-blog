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
        <div class="container">
            <nav>
                <RouterLink to="/">Home</RouterLink>||
                <RouterLink to="/about">About</RouterLink>||
                <RouterLink to="/login">Login</RouterLink>||
                <RouterLink :to="{ name: 'user-create' }">Create User</RouterLink>||
                <button class="btn btn-info" @click="logoutHandler">Logout</button>
            </nav>
        </div>
    </header>

    <RouterView />
</template>

<style></style>