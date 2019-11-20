import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/city',
    name: 'city',
    component: () => import('../views/City.vue')
  },
  {
    path: '/shopcar',
    name: 'shopcar',
    component: () => import('../views/Shopcar.vue')
  },
  {
    path: '/my',
    name: 'my',
    component: () => import('../views/My.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
