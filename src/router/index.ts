import { createRouter, createWebHistory, RouteComponent } from 'vue-router'
import Home from '@/components/Home.vue'

const routes = [
  { path: '/', name: 'Login', component: Home },
  {
    path: '/user',
    name: 'UserPage',
    component: () => import('@/views/UserPage.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
