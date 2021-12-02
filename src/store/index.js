import { createStore, createLogger } from 'vuex'
// 子模块
import user from './modules/user'
import cart from './modules/cart'
// 第三方插件
import createPersistedstate from 'vuex-persistedstate'
// 分类
import category from '@/store/modules/category'
// 创建vuex仓库并导出
export default createStore({
  state: {
    // 数据
  },
  mutations: {
    // 改数据函数
  },
  actions: {
    // 请求数据函数
  },
  modules: {
    // 分模块
    user,
    cart,
    category
  },
  getters: {
    // vuex的计算属性
  },
  // 插件项
  plugins: [createPersistedstate(
    {
      key: 'erabbit2',
      // paths是存储state中的那些数据
      // 如果是模块下具体的数据需要加上模块名称
      // 如user.profile.token=> 只存储user模块下token数据到本地
      paths: ['user', 'cart']
    }),
  // vuex内置的插件弥补vue3开发工具不足
  createLogger()
  ]
})
