<template>
    <div></div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'HomeView',
    async created() {
        const response = await axios.get('users', {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('access_token'),
            },
        })

        console.log(response.data)
    },
}
</script>

<style scoped></style>
