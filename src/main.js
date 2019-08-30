import Vue from 'vue';
import UIComponents from '@endpass/ui';
import Notifications from 'vue-notification';

import App from './App.vue';
import router from './router';
import store from './store';
import web3Setup from '@/utils/web3Setup';
import e2eSetup from '@/utils/e2eSetup';

Vue.use(Notifications);
Vue.use(UIComponents);

require('./css/main.scss');

Vue.config.productionTip = false;

web3Setup();
e2eSetup(window);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
