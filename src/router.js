import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Form from './views/Form.vue';
import FormConfirm from './views/FormConfirm.vue';
import FormComplete from './views/FormComplete.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: { bodyClass: 'home' }
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta: { bodyClass: 'about' }
    },
    {
      path: '/form',
      name: 'form',
      component: Form,
      meta: { bodyClass: 'form' }
    },
    {
      path: '/form/confirm',
      name: 'form-confirm',
      component: FormConfirm,
      meta: { bodyClass: 'form-confirm' }
    },
    {
      path: '/form/complete',
      name: 'form-complete',
      component: FormComplete,
      meta: { bodyClass: 'form-complete' }
    }
  ]
});
