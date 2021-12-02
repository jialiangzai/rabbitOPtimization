
import { findHeadCategory } from '@/api/home'
export default {
  namespaced: true,
  state: () => ({
    list: []
  }),
  getters: {
  },
  mutations: {
    setList (state, payload) {
      state.list = payload
    }
  },
  actions: {
    async getList ({ commit }) {
      const { result } = await findHeadCategory()
      console.log('列表数据', result)
      commit('setList', result)
    }
  }
}
