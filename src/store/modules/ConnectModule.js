import { VuexModule, Module, Action, Mutation } from 'vuex-class-modules';
import Network from '@endpass/class/Network';
import ConnectCompose from '@endpass/connect/compose';
import ConnectProvider from '@endpass/connect/provider';
import ConnectOauth from '@endpass/connect/oauth';
import ConnectLoginButton from '@endpass/connect/login-button';
import ConnectDocument from '@endpass/connect/document';
import ConnectWallet from '@endpass/connect/wallet';
import ErrorNotify from '@/class/ErrorNotify';

@Module({ generateMutationSetters: true })
class ConnectModule extends VuexModule {
  isInited = false;

  connectInstance = null;

  basicActiveAccount = null;

  basicActiveNet = null;

  isBasicLoggedIn = false;

  initialPromise = null;

  errorNotify = new ErrorNotify();

  onWidgetLogout() {
    if (ENV.VUE_APP_IS_E2E_CONNECT) {
      // eslint-disable-next-line no-unused-expressions
      window.e2eLogout && window.e2eLogout();
    }

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
      this.errorNotification('Logout error', e);
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
        text: err,
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
  async initConnect(options = {}) {
    if (this.isInited) return;

    if (this.initialPromise) {
      await this.initialPromise;
      return;
    }

    let resolver;
    this.initialPromise = new Promise(resolve => {
      resolver = resolve;
    });

    const connect = new ConnectCompose({
      authUrl: ENV.VUE_APP_AUTH_URL || 'https://auth.endpass.com',
      clientId: ENV.VUE_APP_OAUTH_CLIENT_ID,
      oauthServer: ENV.VUE_APP_OAUTH_SERVER,
      // widget: false,
      plugins: [
        ConnectProvider,
        ConnectOauth,
        ConnectDocument,
        ConnectLoginButton,
        ConnectWallet,
      ],
      ...options,
    });

    this.connectInstance = connect;

    const connectProvider = await connect.getProvider();
    window.web3.setProvider(connectProvider);

    resolver();
    this.isInited = true;
  }

  async generateWallet() {
    const data = await this.connectInstance.generateWallet();
    return data;
  }

  bindWidgetEvents() {
    this.connectInstance.getWidgetNode().then(node => {
      node.addEventListener('logout', this.onWidgetLogout);
      node.addEventListener('update', this.onWidgetUpdate);
    });
  }

  async mountWidget() {
    await this.connectInstance.mountWidget();
    this.bindWidgetEvents();
  }

  unmountWidget() {
    this.connectInstance.getWidgetNode().then(node => {
      node.removeEventListener('logout', this.onWidgetLogout);
      node.removeEventListener('update', this.onWidgetUpdate);
    });
    this.connectInstance.unmountWidget();
  }

  createLoginButton(options) {
    return this.connectInstance.createLoginButton(options);
  }
}

export default ConnectModule;
