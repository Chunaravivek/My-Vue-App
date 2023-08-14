<template>
    <div class="login-container">
        <h2>Login</h2>
        <div
        v-if="isInvalid"
        class="error-message"
        >
        {{ errorMessage }}
    </div>
    <form @submit.prevent="submitForm">
        <div :class="{ 'form-group': true, 'has-error': isInvalid }">
            <label for="email">Email</label>
            <input
            id="email"
            v-model="email"
            type="text"
            />
        </div>
        <div :class="{ 'form-group': true, 'has-error': isInvalid }">
            <label for="password">Password</label>
            <input
            id="password"
            v-model="password"
            type="password"
            />
        </div>
        <button type="submit">
            Login
        </button>
    </form>
</div>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';

export default {
    setup() {
        const store = useStore();
        
        const email = ref('');
        const password = ref('');
        const isInvalid = ref(false);
        const errorMessage = ref('');
        
        const submitForm = async () => {
            try {
                await store.dispatch('login', { email: email.value, password: password.value });
                isInvalid.value = false;
            } catch (error) {
                console.error(error);
                isInvalid.value = true; // Set isInvalid to true on invalid response
                errorMessage.value = error.message; // Set error message to display
                // Display error message or take appropriate action
            }
        };
        
        return { email, password, isInvalid, errorMessage, submitForm };
    },
};
</script>

<style>
.login-container {
    max-width: 300px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.form-group {
    margin-bottom: 10px;
}

.has-error input {
    border-color: #ff0000; /* Set red border color */
}

.error-message {
    color: #ff0000;
    margin-top: 10px;
}

label, input {
    display: block;
    margin-bottom: 10px;
}

button {
    display: block;
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
</style>
