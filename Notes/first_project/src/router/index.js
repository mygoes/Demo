import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Default',
    redirect: '/home'
  },
  {
    path: '/',
    name: 'Index',
    component: () => import('../views/index/index.vue'),
    children: [
      {
        path: 'about',
        name: 'About',
        component: () => import('../views/index/about/about.vue')
      },
      {
        path: 'home',
        name: 'Home',
        component: () => import('../views/index/home/home.vue')
      },
      {
        path: '/login',
        name: 'Login',
        component: () => import('../views/login/login.vue')
      }
    ]
  }
  // ,{
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

// 创建路由实例
const router = createRouter({
  // 使用hash方式实现路由
  history: createWebHashHistory(),
  // 配置路由规则，写法和之前一样
  routes
})

export default router
