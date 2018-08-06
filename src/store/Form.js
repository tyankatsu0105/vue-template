export default {
  namespaced: true,
  state: {
    formItem: {
      name1: '',
      name2: '',
      age: '',
      email: '',
      textarea: ''
    }
  },
  getters: {
    name1(state) {
      return state.formItem.name1;
    },
    name2(state) {
      return state.formItem.name2;
    },
    age(state) {
      return state.formItem.age;
    },
    email(state) {
      return state.formItem.email;
    },
    textarea(state) {
      return state.formItem.textarea;
    }
  },
  mutations: {
    setFormItemName1(state, payload) {
      state.formItem.name1 = payload;
    },
    setFormItemName2(state, payload) {
      state.formItem.name2 = payload;
    },
    setFormItemAge(state, payload) {
      state.formItem.age = payload;
    },
    setFormItemEmail(state, payload) {
      state.formItem.email = payload;
    },
    setFormItemTextarea(state, payload) {
      state.formItem.textarea = payload;
    }
  }
};
