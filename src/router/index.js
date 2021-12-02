import { createRouter, createWebHashHistory } from 'vue-router'
// Layout
const Layout = () => import('@/views/Layout')
// 创建路由实例
const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/',
        component: () => import('@/views/Home')
      }
    ]

  }
]

const router = createRouter({
  // 使用hash方式实现路由
  history: createWebHashHistory(),
  // 配置路由规则，写法和之前一样
  routes
})

export default router
