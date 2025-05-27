import DashboardView from '@/views/DashboardView.vue'
import WelcomeView from '@/views/WelcomeView.vue'
import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: WelcomeView,
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView,
    },
  ],
})

export default router
