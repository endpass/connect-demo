import { VuexModule, Module, Action, Mutation } from 'vuex-class-modules';
import Connect from '@endpass/connect';
import web3 from '@/utils/web3';
import e2eSetup from '@/utils/e2eSetup';
import { createErrorController } from '@/controllers';

@Module({ generateMutationSetters: true })
class ConnectModule extends VuexModule {
  isInited = false;

  isWidgetInited = false;

  connectInstance = null;

  basicActiveAccount = null;

  isBasicLoggedIn = false;

  errorController = createErrorController();

  onWidgetLogout() {
    window.location.reload();
  }

  @Mutation
  onWidgetUpdate({ detail }) {
    this.basicActiveAccount = detail.basicActiveAccount;
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
      this.errorController.showError({
        title: 'Auth Error',
        text: err.toString(),
      });
    }
  }

  @Action
  async loadAccountData() {
    const accountData = await this.connectInstance.getAccountData();
    const { activeAccount } = accountData;

    this.basicActiveAccount = activeAccount;
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

  @Action
  initWidget() {
    if (this.isWidgetInited) {
      return;
    }

    this.connectInstance.getWidgetNode().then(node => {
      node.addEventListener('logout', this.onWidgetLogout);
      node.addEventListener('update', this.onWidgetUpdate);
    });

    this.isWidgetInited = true;
  }
}

export default ConnectModule;
