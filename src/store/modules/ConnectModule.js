import { VuexModule, Module, Action, Mutation } from 'vuex-class-modules';
import Network from '@endpass/class/Network';
import Connect from '@endpass/connect';
import web3 from '@/utils/web3';
import e2eSetup from '@/utils/e2eSetup';
import ErrorNotify from '@/class/ErrorNotify';

@Module({ generateMutationSetters: true })
class ConnectModule extends VuexModule {
  isInited = false;

  connectInstance = null;

  basicActiveAccount = null;

  basicActiveNet = null;

  isBasicLoggedIn = false;

  errorNotify = new ErrorNotify();

  onWidgetLogout() {
    window.location.reload();
  }

  get networkNameById() {
    const net = Network.DEFAULT_NETWORKS[this.basicActiveNet];
    if (!net) {
      return 'Not defined network';
    }
    return net.name;
  }

  @Mutation
  onWidgetUpdate({ detail }) {
    const { activeAccount, activeNet } = detail;
    this.basicActiveAccount = activeAccount;
    this.basicActiveNet = activeNet;
  }

  @Action
  async openAccount() {
    const data = await this.connectInstance.openAccount();
    if (data.type === 'update') {
      await this.loadAccountData();
    }
  }

  @Action
  async logout() {
    try {
      await this.connectInstance.logout();

      this.basicActiveAccount = null;
      this.basicActiveNet = null;
      this.isBasicLoggedIn = false;
    } catch (e) {
      this.errorNotification('Logout error', e.toString());
    }
  }

  @Action
  async login() {
    try {
      await this.connectInstance.auth();
      await this.loadAccountData();
      this.isBasicLoggedIn = true;
    } catch (err) {
      this.isBasicLoggedIn = false;
      this.errorNotify.showError({
        title: 'Auth Error',
        text: err.toString(),
      });
    }
  }

  @Action
  async loadAccountData() {
    const accountData = await this.connectInstance.getAccountData();
    const { activeAccount, activeNet } = accountData;

    this.basicActiveAccount = activeAccount;
    this.basicActiveNet = activeNet;
  }

  @Action
  async initConnect() {
    if (this.isInited) return;

    window.web3 = web3;

    const connect = new Connect({
      authUrl: ENV.VUE_APP_AUTH_URL || 'https://auth.endpass.com',
      oauthClientId: ENV.VUE_APP_OAUTH_CLIENT_ID,
    });

    if (ENV.VUE_APP_IS_E2E_CONNECT) {
      await e2eSetup(window);
    }

    const connectProvider = connect.getProvider();
    window.web3.setProvider(connectProvider);

    this.connectInstance = connect;

    this.isInited = true;
  }

  bindWidgetEvents() {
    this.connectInstance.getWidgetNode().then(node => {
      node.addEventListener('logout', this.onWidgetLogout);
      node.addEventListener('update', this.onWidgetUpdate);
    });
  }

  unbindWidgetEvents() {
    this.connectInstance.getWidgetNode().then(node => {
      node.removeEventListener('logout', this.onWidgetLogout);
      node.removeEventListener('update', this.onWidgetUpdate);
    });
  }
}

export default ConnectModule;
