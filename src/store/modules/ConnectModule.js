import { VuexModule, Module, Action } from 'vuex-class-modules';
import ConnectCompose from '@endpass/connect/compose';
import ConnectOauth from '@endpass/connect/oauth';
import ConnectLoginButton from '@endpass/connect/loginButton';
import ConnectDocument from '@endpass/connect/document';
import ConnectAuth from '@endpass/connect/auth';
import ErrorNotify from '@/class/ErrorNotify';

const DEFAULT_CLIENT_ID = ENV.VUE_APP_OAUTH_CLIENT_ID;

@Module({ generateMutationSetters: true })
class ConnectModule extends VuexModule {
  isInited = false;

  connectInstance = null;

  initialPromise = null;

  clientId = DEFAULT_CLIENT_ID;

  errorNotify = new ErrorNotify();

  @Action
  async setClientId(clientId) {
    const savedValue = clientId ? clientId.trim() : '';
    this.clientId = savedValue || DEFAULT_CLIENT_ID;
  }

  @Action
  async customAction() {
    try {
      await this.connectInstance.logout();
    } catch (e) {}
    await this.connectInstance.auth();
  }

  @Action
  async logout() {
    try {
      await this.connectInstance.logout();
      window.location.reload();
    } catch (e) {}
  }

  @Action
  async login() {
    try {
      await this.connectInstance.auth();
    } catch (err) {
      this.errorNotify.showError({
        title: 'Auth Error',
        text: err,
      });
    }
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

    // eslint-disable-next-line no-console
    console.log(`using clientId as: ${this.clientId}`);

    this.connectInstance = new ConnectCompose({
      authUrl: ENV.VUE_APP_AUTH_URL || 'https://auth.endpass.com',
      clientId: this.clientId,
      oauthServer: ENV.VUE_APP_OAUTH_SERVER,
      widget: false,
      plugins: [ConnectOauth, ConnectDocument, ConnectLoginButton, ConnectAuth],
      ...options,
    });

    resolver();
    this.isInited = true;
  }

  createLoginButton(options) {
    return this.connectInstance.createLoginButton(options);
  }
}

export default ConnectModule;
