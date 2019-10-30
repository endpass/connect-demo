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
      path: '/provider',
      name: 'Provider',
      component: () =>
        import(
          /* webpackChunkName: "provider" */ '@/components/screen/Provider'
        ),
    },
    {
      path: '/custom-element',
      name: 'CustomElement',
      component: () =>
        import(
          /* webpackChunkName: "custom-element" */ '@/components/screen/CustomElement'
        ),
    },
  ],
});

router.afterEach((to, from) => {
  if (from.name) {
    // Hack for reload page, but have flickers after change page
    setTimeout(() => {
      window.location.reload();
    }, 0);
  }
});

export default router;
