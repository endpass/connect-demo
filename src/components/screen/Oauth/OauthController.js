import { VuexModule, Module, Action } from 'vuex-class-modules';
import { connectStore as connectStoreModule } from '@/store';
import createController from '@/controllers/createController';

@Module({ generateMutationSetters: true })
class OauthController extends VuexModule {
  constructor(props, { connectStore = connectStoreModule }) {
    super(props);
    this.connectStore = connectStore;
  }

  @Action
  async initConnect() {
    await this.connectStore.initConnect();
  }

  @Action
  async loginOauth(scopes) {
    await this.connectStore.connectInstance.loginWithOauth({
      scopes,
    });
  }

  @Action
  async getAccountData() {
    const { data } = await this.connectStore.connectInstance.request({
      method: 'GET',
      url: `${ENV.VUE_APP_ENDPASS_API_URL}/accounts`,
      scopes: ['wallet:accounts:read'],
    });
    return data;
  }

  @Action
  async getUser() {
    const { data } = await this.connectStore.connectInstance.request({
      method: 'GET',
      url: `${ENV.VUE_APP_ENDPASS_API_URL}/user`,
      scopes: ['user:email:read'],
    });
    return data;
  }

  @Action
  async logout() {
    await this.connectStore.connectInstance.logoutFromOauth();
  }

  @Action
  async getDocuments() {
    const res = await this.connectStore.connectInstance.request({
      method: 'GET',
      url: `${ENV.VUE_APP_ENDPASS_API_URL}/documents`,
      scopes: ['documents:status:read', 'documents:data:read'],
    });
    return res;
  }
}

export default () => createController(OauthController);
