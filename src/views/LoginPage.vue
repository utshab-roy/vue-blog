<template>
    <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossorigin="anonymous"
    />
    <div class="container">
        <div>
            <form @submit.prevent="submitForm">
                <div class="mb-3">
                    <label for="username" class="form-label">Username</label>
                    <input
                        id="username"
                        v-model="formValues.username"
                        type="username"
                        class="form-control"
                    />
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Password</label>
                    <input
                        id="password"
                        v-model="formValues.password"
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
    name: 'LoginPage',
    data() {
        return {
            formValues: {
                username: '',
                password: '',
            },
            posts: [],
        }
    },
    methods: {
        submitForm() {
            axios
                .post('http://localhost:8080/api/login', this.formValues)
                .then((response) => {
                    console.log('Response Data', response.data)
                })
                .catch((error) => {
                    console.log(error)
                })
            console.log('Form values', this.formValues)
        },
    },
}
</script>

<style lang="scss" scoped></style>
