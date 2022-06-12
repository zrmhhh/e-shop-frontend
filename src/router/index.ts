import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/login/index.vue')
  }, {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/home/index.vue')
  }, {
    path: '/cart',
    name: 'cart',
    component: () => import(/* webpackChunkName: "cart" */ '../views/cart/index.vue')
  }, {
    path: '/newcart',
    name: 'newcart',
    component: () => import(/* webpackChunkName: "newcart" */ '../views/newcart/index.vue')
  },{
    path: '/user',
    name: 'user',
    component: () => import(/* webpackChunkName: "user" */ '../views/user/index.vue')
  },   {
    path: '/newuser',
    name: 'newuser',
    component: () => import(/* webpackChunkName: "newuser" */ '../views/newuser/index.vue')
  },{
    path: '/goods',
    name: 'goods',
    component: () => import(/* webpackChunkName: "goods" */ '../views/goods/index.vue')
  },{
    path: '/order',
    name: 'order',
    component: () => import(/* webpackChunkName: "order" */ '../views/order/index.vue')
  }, {
    path: '/payment',
    name: 'payment',
    component: () => import(/* webpackChunkName: "payment" */ '../views/payment/index.vue')
  },
  // 二级页面
  {
    path: '/user/order',
    name: 'user-order',
    component: () => import(/* webpackChunkName: "user-order" */ '../views/user/order/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
