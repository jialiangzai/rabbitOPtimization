
import { mergeLocalCart, findCartList, insertCart, deleteCart, updateCart, checkAllCart } from '@/api/cart.js'
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
    // 1. 有效商品列表=》无效商品（没库存或下架了）
    // 2. 选中的购物车商品数据
    // 3. 选中商品总价
    // 4. 购物车中有效商品是否是全部选中状态

    // 有效商品列表=
    effectiveList: (state) => {
      return state.cart.filter(item => item.isEffective === true)
    },
    // 选中的购物车商品数据
    validateSel: (state, getters) => {
      return getters.effectiveList.filter(item => item.selected)
    },
    // 选中商品总价 现单价*数量
    validateTotal: (state, getters) => {
      return getters.validateSel.reduce((total, item) => (total += item.nowPrice * item.count), 0)
    },
    // 购物车中有效商品是否是全部选中状态
    isAll: (state, getters) => {
      return getters.effectiveList.every(item => item.selected)
    },
    // 有效商品总数量 把effctiveList中的每一项的count叠加起来
    effectAll: (state, getters) => {
      return getters.effectiveList.reduce((alls, item) => (alls += item.count), 0)
    }
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
    },
    // 删除商品
    /**
     *
     * @param {*} state 变量对象
     * @param {*} payload 当前点击删除的商品
     */
    delCart (state, payload) {
      const currentIndex = state.cart.findIndex(item => item.skuId === payload.skuId)
      state.cart.splice(currentIndex, 1)
    },
    // 全选
    allCheck (state, sel) {
      state.cart.forEach(good => {
        good.selected = sel
      })
    },
    // 单选
    /**
     *
     * @param {*} state 变量对象
     * @param {*} payload 对象 当前点选中商品 {good,sel}
     */
    isSign (state, { good, sel }) {
      // skuId找到对应的索引
      const currentSign = state.cart.find(item => item.skuId === good.skuId)
      currentSign.selected = sel
    },
    // 修改数量
    changeCount (state, { good, num }) {
      // skuId找到对应的索引
      const cur = state.cart.find(item => item.skuId === good.skuId)
      cur.count = num
    },
    // 不管本地又没有购物车最终都要存储到vuex中及setCarrtList
    // 登录后获取最新的购物车或合并及操作
    setCarrtList (state, list) {
      state.cart = list
    }
  },
  // actions中的函数是promise对象并返回的也是一个promise对象
  actions: {
    // 异步----登录状态和未登录状态都要进行管理
    // 加入购物车
    /**
     *
     * @param {*} param0  上下文vuex中的钩子
     * @param {*} good 调用方法时候传递的商品数据(当前加入cart商品数据)
     */
    async addCartListActions ({ commit, rootState, dispatch }, good) {
      // 判断状态
      if (rootState.user.profile.token) {
        // 登录状态----调用接口存到数据库
        await insertCart(good)
        // 拉新
        dispatch('getListActions')
        return '加入购物车成功!'
      } else {
        commit('addCartList', good)
        return '加入购物车成功'
      }
    },
    //  删除商品
    async delCartactions ({ commit, rootState, dispatch }, good) {
      // 判断状态
      if (rootState.user.profile.token) {
        // 登录状态----调用接口存到数据库
        await deleteCart([good.skuId])
        // 拉新
        dispatch('getListActions')
        return '删除商品成功'
      } else {
        // console.log(good)
        commit('delCart', good)
        return '删除商品成功'
      }
    },
    // 全选
    async allCheckActions ({ commit, rootState, dispatch, getters }, sel) {
      // 判断状态
      if (rootState.user.profile.token) {
        // 登录状态----调用接口存到数据库
        const ids = getters.effectiveList.map(item => item.skuId)
        await checkAllCart({ selected: sel, ids })
        dispatch('getListActions')
      } else {
        // console.log(sel)
        commit('allCheck', sel)
        return '操作成功'
      }
    },
    // 单选
    // { good:good, sel:sel }
    async isSignActions ({ commit, rootState, dispatch }, { good, sel }) {
      // 判断状态
      if (rootState.user.profile.token) {
        // 登录状态----调用接口存到数据库
        await updateCart({ ...good, selected: sel })
        dispatch('getListActions')
      } else {
        // console.log(sel)
        commit('isSign', { good, sel })
        return '操作成功'
      }
    },
    // 数量
    async changeCountActions ({ commit, rootState, dispatch }, { good, num }) {
      // 判断状态
      if (rootState.user.profile.token) {
        // 登录状态----调用接口存到数据库
        await updateCart({ ...good, count: num })
        dispatch('getListActions')
      } else {
        // console.log(sel)
        commit('changeCount', { good, num })
      }
    },
    // 合并
    async mergeCartAction ({ dispatch, state }) {
      // 判断本地有无购物车数据
      if (state.cart.length) {
        // 数据的映射
        const currCartreq = state.cart.map(({ skuId, selected, count }) => { return { skuId, selected, count } })
        // 数据库合并但是客户端还没更新
        await mergeLocalCart(currCartreq)
      }
      // 如果本地没有购物车数据
      dispatch('getListActions')
    },

    // 最新
    // 登录后获取最新的购物车数据----这里没有参数是登录人token为参数
    async getListActions ({ commit }) {
      // console.log(sel)
      //  此时已经登录直接调接口存储到数据库----后台处理
      const { result } = await findCartList()
      commit('setCarrtList', result)
    }
  }
}
