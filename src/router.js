/* eslint-disable max-len */
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Oauth',
      component: () =>
        import(/* webpackChunkName: "oauth" */ '@/components/screen/Oauth'),
    },
    {
      path: '/custom-element',
      name: 'CustomElement',
      component: () =>
        import(
          /* webpackChunkName: "custom-element" */ '@/components/screen/CustomElement'
        ),
    },
    {
      path: '/examples',
      name: 'Examples',
      component: () =>
        import(
          /* webpackChunkName: "examples" */ '@/components/screen/Examples'
        ),
    },
  ],
});

export default router;
