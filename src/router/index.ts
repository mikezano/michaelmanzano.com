import { createRouter, createWebHistory } from 'vue-router'
import ZanoView from '../views/ZanoView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ZanoView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/zano',
      name: 'zano',
      component: ZanoView,
    },
  ],
})

export default router
