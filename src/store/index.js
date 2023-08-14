import { createStore } from 'vuex';
import AdminController from '@/services/admincontroller';

export default createStore({
    state: {
        user: null,
    },
    mutations: {
        setUser(state, user) {
            state.user = user;
        },
    },
    actions: {
        async login({ commit }, credentials) {
            const admin = new AdminController();
            try {
                const response = await admin.login(credentials);
                console.log("response", response);
                commit('setUser', response.data.token);
                return response.data.token;
            } catch (error) {
                if (!error.response.data.message) {
                    throw new Error(error.response.data);
                } else {
                    throw new Error(error.response.data.message);
                }
            }
        },
    },
    getters: {
        isLoggedIn: state => !!state.user,
    },
});
