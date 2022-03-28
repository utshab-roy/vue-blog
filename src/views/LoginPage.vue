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
    name: 'LoginPage',
    data() {
        return {
            formValue: {
                username: '',
                password: '',
            }
        }
    },
    methods: {
        submitForm() {
            /**
             * converting vue data to form-data in order to create successful post request 
             */
            let formData = new FormData()

            for (let key in this.formValue) {
                formData.append(key, this.formValue[key])
            }

            axios
                .post('http://localhost:8080/api/login', formData) // {headers: {'Content-Type': 'multipart/form-data'}}
                .then((response) => {
                    console.log('Response Data', response.data)
                })
                .catch((error) => {
                    console.log(error)
                })
        },
    },
}
</script>

<style lang="scss" scoped></style>
