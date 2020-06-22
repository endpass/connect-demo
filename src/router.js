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

const beforeEachRouter = async (to, from, next) => {
  const { clientId } = to.query;

  const isClientIdMismatch = clientId !== connectStore.clientId;
  if (isClientIdMismatch) {
    await connectStore.setClientId(clientId);
  }

  return next();
};

const afterEachRouter = (to, from) => {
  const { clientId } = to.query;
  const isClientIdMismatch = clientId !== connectStore.clientId;

  if (from.name && isClientIdMismatch && clientId) {
    window.location.reload();
  }
};

router.beforeEach(beforeEachRouter);
router.afterEach(afterEachRouter);

export default router;
