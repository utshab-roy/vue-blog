<template>
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
                .then(response => {
                    // handle success
                    this.userData = response.data
                    console.log(response);
                })
                .catch(error => {
                    if (error.response) {
                        console.log('DATA', error.response.data);
                        console.log('STATUS', error.response.status);
                        console.log('HEADERS', error.response.headers);
                    }
                })

        }
    },
}
</script>

<style scoped></style>
