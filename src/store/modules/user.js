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
    updateName (state, payload) {
      state.profile.token = payload
    }
  },
  actions: {
  }
}
