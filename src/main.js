import Vue from 'vue';
import VueMq from 'vue-mq';
import VueHead from 'vue-head';
import VueBodyClass from 'vue-body-class';
import App from './App.vue';
import router from './router';
import store from './store';

// 全体に効かせる
import './styles/core/reset.scss';
import './styles/core/base.scss';
import './styles/utility/importer.scss';
import './styles/modules/importer.scss';

Vue.use(VueHead, {
  separator: ' | '
});

Vue.use(VueBodyClass, router);

Vue.config.productionTip = false;

Vue.use(VueMq, {
  breakpoints: {
    mobile: 480,
    tablet: 768,
    laptop: 1025,
    desktop: 1280
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
