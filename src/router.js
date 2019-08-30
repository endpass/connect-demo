/* eslint-disable max-len */
import Vue from 'vue';
import Router from 'vue-router';
import HomeScreen from '@/components/screen/Home';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeScreen,
    },
    {
      path: '/basic',
      name: 'Basic',
      component: () =>
        import(/* webpackChunkName: "basic" */ '@/components/screen/Basic'),
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
      name: 'Oauth',
      component: () =>
        import(/* webpackChunkName: "oauth" */ '@/components/screen/Oauth'),
    },
    {
      path: '/about',
      name: 'About',
      component: () =>
        import(/* webpackChunkName: "about" */ '@/components/screen/About'),
    },
  ],
});

// router.beforeEach(async (to, from, next) => {
//   if (!authStore.isLogin && to.name !== 'Home') {
//     await authStore.checkAuthStatus();
//     if (authStore.isLogin) {
//       return next();
//     }
//     return next({ name: 'Home' });
//   }
//   return next();
// });

export default router;
