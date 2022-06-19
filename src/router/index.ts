import { createRouter, createWebHistory, RouteComponent } from 'vue-router'
import { useUserStore } from '../stores/UserStore'
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

router.beforeEach((to, from) => {
  const userStore = useUserStore()
  if (userStore.$state.activeUser === null && to.name !== 'Login') {
    return '/'
  }
})

export default router
