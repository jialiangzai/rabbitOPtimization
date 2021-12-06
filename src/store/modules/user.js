
// 登录
import { userAccountLogin } from '@/api/use'

export default {
  namespaced: true,
  // state: {
  //   value: 'my value'
  // },
  // 优化
  state: () => ({
    profile: {
      id: '',
      avatar: '',
      nickname: '',
      account: '',
      mobile: '',
      token: ''
    }
  }),
  getters: {
  },
  mutations: {
    setuse (state, payload) {
      state.profile.token = payload
    },
    deluse (state) {
      state.profile = {}
    }
  },
  actions: {
    // 获取用户信息
    /**
     *
     * @param {*} param0 调用mutation中方法
     * 第二个参数表示登录人的手机号和密码
     */
    async getUse ({ commit }, useInfo) {
      const { result } = await userAccountLogin(useInfo)
      console.log('登录人信息', result)
      commit('setuse', result)
    },
    // 退出
    logOut ({ commit }) {
      commit('deluse')
    }
  }
}
