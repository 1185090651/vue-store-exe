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
    path: '/sorts',
    name: 'sorts',
    component: () => import('../views/Sorts.vue')
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
  },
  {
    path: '/login',
    redirect:'/login/dl',
    name: 'login',
    component: () => import('../views/Login.vue'),
    children:[
      {
        path:'dl',
        name:'dl',
        component: () => import('../views/login/Dl.vue')
      },
      {
        path:'zc',
        name:'zc',
        component: () => import('../views/login/Zc.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
