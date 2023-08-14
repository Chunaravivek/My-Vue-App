import { createRouter, createWebHistory } from 'vue-router';
import Login from './components/Login.vue'

const routes = [
  {
    path: '/',
    component: Login,
    name: 'Login'
  },
  {
    path: '/login',
    component: Login,
    name: 'App'
  }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
