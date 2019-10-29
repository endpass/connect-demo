/* eslint-disable max-len */
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const OauthComponent = () =>
  import(/* webpackChunkName: "oauth" */ '@/components/screen/Oauth');

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Oauth',
      component: OauthComponent,
    },
    {
      path: '/provider',
      name: 'Provider',
      component: () =>
        import(/* webpackChunkName: "basic" */ '@/components/screen/Provider'),
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
      path: '/oauth',
      name: 'OauthDeprecated',
      component: OauthComponent,
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
