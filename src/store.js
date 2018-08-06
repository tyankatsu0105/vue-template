import Vue from 'vue';
import Vuex from 'vuex';

import EditForm from '@/store/EditForm';
import EditFormHoge from '@/store/EditFormHoge';
import Form from '@/store/Form';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV === 'production',
  modules: {
    EditForm,
    EditFormHoge,
    Form
  }
});
