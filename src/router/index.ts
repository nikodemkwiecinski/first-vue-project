import { createRouter, createWebHistory, RouteComponent } from 'vue-router'
import UserLog from '@/components/UserLog.vue'

const routes = [
  { path: '/', name: 'Login', component: UserLog },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/components/UserRegister.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
