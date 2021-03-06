import { createRouter, createWebHashHistory } from 'vue-router'
// Layout
const Layout = () => import('@/views/Layout')
// 详情
const Detail = () => import('@/views/Goods')
// 登录
const Login = () => import('@/views/Login')
// 列表购物车
const Cart = () => import('@/views/Cart')
// 结算订单
const Order = () => import('@/views/Member/settlement')
// 支付
const Pay = () => import('@/views/Member/pay')
// 支付结果
const resultPay = () => import('@/views/Member/pay/result.vue')
// 支付结果
const OrderList = () => import('@/views/Member')
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
      },
      // 列表购物车
      {
        path: '/cart',
        component: Cart
      },
      // 结算订单
      {
        path: '/settlement',
        component: Order
      },
      // pay支付路由
      {
        path: '/pay',
        component: Pay
      },
      // 支付结果
      {
        // 必须约定好的
        path: '/pay/callback',
        component: resultPay
      },
      {
        path: '/order/list',
        component: OrderList
      }
    ]

  },
  // 一级路由登录页面
  {
    path: '/login',
    component: Login
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
