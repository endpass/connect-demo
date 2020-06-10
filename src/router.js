/* eslint-disable max-len */
import Vue from 'vue';
import Router from 'vue-router';

import { connectStore } from '@/store';

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

const clientIdGuard = async (to, from, next) => {
  const { clientid } = to.query;

  if (clientid && clientid !== connectStore.clientId) {
    await connectStore.setClientId(clientid);
  }

  return next();
};

router.beforeEach(clientIdGuard);

export default router;
