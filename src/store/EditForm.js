export default {
  namespaced: true,
  state: {
    message: '初期メッセージ'
  },
  getters: {
    message(state) {
      return state.message;
    }
  },
  mutations: {
    setMessage(state, payload) {
      state.message = payload.message;
    }
  },
  actions: {
    doUpdate({ commit }, message) {
      commit('setMessage', { message });
    }
  }
};
