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
  async getUserAddress() {
    const { data } = await this.connectStore.connectInstance.request({
      method: 'GET',
      url: `${ENV.VUE_APP_OAUTH_SERVER}/user/address`,
    });
    return data;
  }

  @Action
  async getUser() {
    const { data } = await this.connectStore.connectInstance.request({
      method: 'GET',
      url: `${ENV.VUE_APP_OAUTH_SERVER}/user`,
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
    });
    return res;
  }
}

export default () => createController(OauthRequestController);
