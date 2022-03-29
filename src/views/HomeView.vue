<template>
    <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossorigin="anonymous"
    />
    <table v-if="userData" class="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Username</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="user in userData" :key="user.id">
                <th scope="row">{{ user.id }}</th>
                <td>{{ user.name }}</td>
                <td>{{ user.username }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import axios from 'axios'
export default {
    name: 'HomeView',
    data() {
        return {
            userData: [],
        }
    },
    async created() {
        /**
         * we are sending the headers here explicitly because 
         * saving the token in axios.defaults.headers.common['Authorization'] needs a little time
         * the rest of the request we will use this axios headers function
         */
        if (localStorage.getItem('access_token')) {
            const response = await axios.get('users', {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('access_token'),
                },
            })
            this.userData = response.data
        }
    },
}
</script>

<style scoped></style>
