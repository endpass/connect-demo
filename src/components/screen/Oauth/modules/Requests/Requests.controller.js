import { VuexModule, Module, Action } from 'vuex-class-modules';
import ConnectError from '@endpass/connect/error';
import { connectStore as connectStoreModule } from '@/store';
import createController from '@/controllers/createController';
import ErrorNotify from '@/class/ErrorNotify';

const { OAUTH_POPUP_CLOSED } = ConnectError.ERRORS;

@Module({ generateMutationSetters: true })
class RequestsController extends VuexModule {
  errorNotify = new ErrorNotify();

  constructor(props, { connectStore = connectStoreModule }) {
    super(props);
    this.connectStore = connectStore;
  }

  notifyProcessCancelled() {
    this.errorNotify.showInfo({
      title: 'Operation cancelled',
      text: 'Popup was closed',
    });
  }

  @Action
  async initConnect() {
    await this.connectStore.initConnect();
  }

  @Action
  async getUserAddress() {
    try {
      const { data } = await this.connectStore.connectInstance.request({
        method: 'GET',
        url: `${ENV.VUE_APP_OAUTH_SERVER}/user/address`,
      });
      return data;
    } catch (e) {
      if (e.code === OAUTH_POPUP_CLOSED) {
        this.notifyProcessCancelled();
        throw e;
      }

      this.errorNotify.showError({
        title: 'Get address error',
        text: e,
      });
      throw e;
    }
  }

  @Action
  async getUser() {
    try {
      const { data } = await this.connectStore.connectInstance.request({
        method: 'GET',
        url: `${ENV.VUE_APP_OAUTH_SERVER}/user`,
      });
      return data;
    } catch (e) {
      if (e.code === OAUTH_POPUP_CLOSED) {
        this.notifyProcessCancelled();
        throw e;
      }

      this.errorNotify.showError({
        title: 'Get email error',
        text: e,
      });
      throw e;
    }
  }

  @Action
  async logout() {
    await this.connectStore.connectInstance.logoutFromOauth();
  }

  @Action
  async getUserDocuments() {
    try {
      const { data } = await this.connectStore.connectInstance.request({
        method: 'GET',
        url: `${ENV.VUE_APP_OAUTH_SERVER}/documents`,
      });
      return data;
    } catch (e) {
      if (e.code === OAUTH_POPUP_CLOSED) {
        this.notifyProcessCancelled();
        throw e;
      }

      this.errorNotify.showError({
        title: 'Get documents error',
        text: e,
      });
      throw e;
    }
  }
}

export default () => createController(RequestsController);
