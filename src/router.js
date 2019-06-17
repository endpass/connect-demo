/* eslint-disable max-len */
import Vue from 'vue';
import Router from 'vue-router';
import HomeScreen from '@/components/screen/Home';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeScreen,
    },
    {
      path: '/basic',
      name: 'Basic',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "basic" */ '@/components/screen/Basic'),
    },
    {
      path: '/oauth',
      name: 'Oauth',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "oauth" */ '@/components/screen/Oauth'),
    },
    {
      path: '/about',
      name: 'About',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
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
