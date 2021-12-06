import { createRouter, createWebHashHistory } from 'vue-router'
// Layout
const Layout = () => import('@/views/Layout')
// 详情
const Detail = () => import('@/views/Goods')
// 创建路由实例
const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/',
        component: () => import('@/views/Home')
      },
      // 商品详情
      {
        path: '/goods/:id',
        component: Detail
      }
    ]

  }
]

const router = createRouter({
  // 使用hash方式实现路由
  history: createWebHashHistory(),
  // 每次切换路由让他的滚动条初始为0 vue2和vue3返回的对象属性不同
  scrollBehavior: () => ({ left: 0, top: 0 }),
  // 配置路由规则，写法和之前一样
  routes
})

export default router
