import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/dashboard/page.vue'


const routes = [
    {
        path: '/',
        name: 'Dashboard',
        component: Dashboard
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router