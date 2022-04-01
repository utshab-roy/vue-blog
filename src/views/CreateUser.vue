<template>
    <div class="container">
        <div>
            <h3>Create New User</h3>
            <form @submit.prevent="submitForm">
                <div class="mb-3">
                    <label for="name" class="form-label">Name</label>
                    <input id="name" v-model="formValue.name" type="name" class="form-control" />
                </div>
                <div class="mb-3">
                    <label for="username" class="form-label">Username</label>
                    <input
                        id="username"
                        v-model="formValue.username"
                        type="username"
                        class="form-control"
                    />
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Password</label>
                    <input
                        id="password"
                        v-model="formValue.password"
                        type="password"
                        class="form-control"
                    />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'CreateUser',
    data() {
        return {
            formValue: {
                name: '',
                username: '',
                password: '',
            },
        }
    },
    methods: {
        async submitForm() {
            const response = await axios.post('user/save', this.formValue)
                .then(response => {
                    // redirect to the home component
                    this.$router.push('/')
                    // console.log('SUCCESS', response);
                })
                .catch(error => {
                    if (error.response) {
                        // console.log('DATA', error.response.data);
                        console.log('STATUS', error.response.status);
                        // console.log('HEADERS', error.response.headers);
                    }
                })
        },
    },
}
</script>

<style lang="scss" scoped></style>
