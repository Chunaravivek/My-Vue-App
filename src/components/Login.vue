<template>
    <div class="login-container">
        <h2>Login</h2>
        <form @submit.prevent="login">
            <div class="form-group">
                <label for="email">Email</label>
                <input v-model="credentials.email" type="text" id="email" />
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input v-model="credentials.password" type="password" id="password" />
            </div>
            <button type="submit">Login</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            credentials: {
                email: '',
                password: '',
            },
        };
    },
    methods: {
        async login() {
            try {
                const response = await this.$axios.post('http://localhost:3000/v1/admin/login', this.credentials);
                // Handle success response, such as setting user data in Vuex or local storage
                console.log(response);
            } catch (error) {
                // Handle error response, such as displaying an error message
                console.error(error);
                console.error(error.response.data.message);
                console.error(error.message);
            }
        },
    },
};
</script>

<style scoped>
.login-container {
    max-width: 300px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.form-group {
    margin-bottom: 15px;
}

label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
}

input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 3px;
}
</style>
