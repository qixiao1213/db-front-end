import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('../views/login.vue')
    },
    {
      path: '/user/:id',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/user.vue')
    },
    {
      path: '/bbs',
      component: () => import('../views/bbs.vue')

    },
    {
      path: '/bbs/detail/:id',
      component: () => import('../views/detailPage.vue')
    },
    {
      path: '/admin/:id',
      component: () => import('../views/admin.vue')
    }
  ]
})

export default router
