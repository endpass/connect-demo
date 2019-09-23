import { VuexModule, Module, Action } from 'vuex-class-modules';
import { connectStore } from '@/store';

// manage groups access control
@Module({ generateMutationSetters: true })
class OauthController extends VuexModule {
  constructor(props) {
    super(props);
    this.connectStore = connectStore;
  }

  @Action
  async loginOauth(scopes) {
    await this.connectStore.connectInstance.loginWithOauth({
      scopes,
      oauthServer: ENV.VUE_APP_OAUTH_SERVER,
    });
  }

  @Action
  async getAccountData() {
    await this.loginOauth(['wallet:accounts:read']);
    const { data } = await this.connectStore.connectInstance.request({
      method: 'GET',
      url: `${ENV.VUE_APP_ENDPASS_API_URL}/accounts`,
    });
    return data;
  }

  @Action
  async getUser() {
    await this.loginOauth(['user:email:read']);
    const { data } = await this.connectStore.connectInstance.request({
      method: 'GET',
      url: `${ENV.VUE_APP_ENDPASS_API_URL}/user`,
    });
    return data;
  }

  @Action
  async logout() {
    await this.connectStore.connectInstance.logoutFromOauth();
  }

  @Action
  async getDocuments() {
    await this.loginOauth(['documents:status:read', 'documents:data:read']);
    const res = await this.connectStore.connectInstance.request({
      method: 'GET',
      url: `${ENV.VUE_APP_ENDPASS_API_URL}/documents`,
    });
    return res;
  }
}

export default OauthController;
