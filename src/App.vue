<script setup>
import { useRouter, RouterLink, RouterView } from 'vue-router'

const router = useRouter()

function logoutHandler() {

    localStorage.removeItem(('access_token'))
    router.push('/login')
    console.log("logout");
}

// return logoutHandler



</script>

<template>
    <header>
        <div class="wrapper">
            <nav>
                <RouterLink to="/">Home</RouterLink>||
                <RouterLink to="/about">About</RouterLink>||
                <RouterLink to="/login">Login</RouterLink>||
                <button class="btn btn-info" @click="logoutHandler">Logout</button>
            </nav>
        </div>
    </header>

    <RouterView />
</template>

<style></style>
