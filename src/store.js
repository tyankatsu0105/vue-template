import Vue from 'vue';
import Vuex from 'vuex';

import Form from '@/store/Form';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV === 'production',
  modules: {
    Form
  }
});
