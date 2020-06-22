import { VuexModule, Module, Action } from 'vuex-class-modules';
import ConnectError from '@endpass/connect/error';
import { connectStore as connectStoreModule } from '@/store';
import createController from '@/controllers/createController';
import ErrorNotify from '@/class/ErrorNotify';

const { OAUTH_POPUP_CLOSED, CREATE_DOCUMENT } = ConnectError.ERRORS;

@Module({ generateMutationSetters: true })
class RequestsController extends VuexModule {
  errorNotify = new ErrorNotify();

  userDocuments = [];

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

  get isInited() {
    return this.connectStore.isInited;
  }

  @Action
  async initConnect() {
    await this.connectStore.initConnect();
  }

  @Action
  async logout() {
    this.userDocuments = [];
    await this.connectStore.connectInstance.logoutFromOauth();
  }

  @Action
  async loadUserDocuments() {
    try {
      const { data } = await this.connectStore.connectInstance.request({
        method: 'GET',
        url: `${ENV.VUE_APP_OAUTH_SERVER}/documents`,
      });
      this.userDocuments = data;
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
