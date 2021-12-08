export default {
  namespaced: true,
  // state: {
  //   value: 'my value'
  // },
  // 优化
  state: () => ({
    cart: []
  }),
  getters: {
  },
  mutations: {
    // state中的数据只能通过mutations同步函数更改
    // 加入购物车
    // push/unshift就错了 考虑是否是同一类商品 ---skuId
    addCartList (state, payload) {
      // 可以通过skuId去遍历索引找到商品种类
      const currentIndex = state.cart.findIndex(item => item.skuId === payload.skuId)
      // -1表示找不到
      if (currentIndex > -1) {
        state.cart[currentIndex].count += payload.count
      } else {
        // 新增
        state.cart.unshift(payload)
      }
    }
  },
  actions: {
    // 异步----登录状态和未登录状态都要进行管理
    // 加入购物车
    /**
     *
     * @param {*} param0  上下文vuex中的钩子
     * @param {*} good 调用方法时候传递的商品数据(当前加入cart商品数据)
     */
    addCartListActions ({ commit, rootState }, good) {
      // 判断状态
      if (rootState.user.profile.token) {
        // 登录状态----调用接口存到数据库
      } else {
        commit('addCartList', good)
      }
    }
  }
}
