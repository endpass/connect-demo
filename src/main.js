import Vue from 'vue';
import UIComponents from '@endpass/ui';
import Notifications from 'vue-notification';
import VueCompositionApi from '@vue/composition-api';

import App from './App.vue';
import router from './router';
import store from './store';
import e2eSetup from '@/utils/e2eSetup';
import 'prismjs/themes/prism.css';
import '@endpass/ui/kit/kit.theme-default.css';

import './css/main.scss';

Vue.use(Notifications);
Vue.use(UIComponents);
Vue.use(VueCompositionApi);

Vue.config.productionTip = false;

e2eSetup(window);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
