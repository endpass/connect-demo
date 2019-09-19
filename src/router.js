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
    {
      path: '/login',
      name: 'Login',
      component: () =>
        import(/* webpackChunkName: "login" */ '@/components/screen/Login'),
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
