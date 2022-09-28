import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/guideline',
      name: 'guideline',
      component: () => import('../doc/Guideline.vue')
    },
    {
      path: '/detail',
      name: 'detail',
      component: () => import('../doc/Detail.vue')
    }
  ]
})

export default router
