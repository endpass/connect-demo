import { VuexModule, Module, Action } from 'vuex-class-modules';
import { connectStore as connectStoreModule } from '@/store';
import createController from '@/controllers/createController';

@Module({ generateMutationSetters: true })
class OauthRequestController extends VuexModule {
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
      url: `${ENV.VUE_APP_OAUTH_SERVER}/accounts`,
      scopes: ['wallet:accounts:read'],
    });
    return data;
  }

  @Action
  async getUser() {
    const { data } = await this.connectStore.connectInstance.request({
      method: 'GET',
      url: `${ENV.VUE_APP_OAUTH_SERVER}/user`,
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
      url: `${ENV.VUE_APP_OAUTH_SERVER}/documents`,
      scopes: [
        'documents:id_card:status:read',
        'documents:passport:status:read',
        'documents:proof_address:status:read',
        'documents:driver_license:status:read',
      ],
    });
    return res;
  }
}

export default () => createController(OauthRequestController);
