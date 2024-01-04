import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home'),
    redirect: '/first',
    children: [
      {
        path: '/first',
        name: 'first',
        component: () => import('@/views/First'),
      },
      {
        path: '/second',
        name: 'second',
        component: () => import('@/views/Second'),
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
