<template>
  <div>
    <buttons-list
      v-if="!currentComponent"
      @address="onGetUserAddress"
      @email="onGetEmail"
      @documents="onGetDocuments"
    />
    <oauth-footer
      v-else
      @back="onBack"
      @clear="onClear"
    />
    <component
      :is="currentComponent"
      :data="currentData"
    />
  </div>
</template>

<script>
import ConnectError from '@endpass/connect/error';
import ErrorNotify from '@/class/ErrorNotify';
import { connectStore } from '@/store';
import ButtonsList from '@/components/screen/Oauth/modules/OauthContent/modules/Requests/ButtonList/ButtonsList';
import OauthFooter from '@/components/screen/Oauth/modules/OauthContent/modules/Requests/OauthFooter';
import UserAddresses from '@/components/screen/Oauth/modules/OauthContent/modules/Requests/UserAddresses';
import Documents from '@/components/screen/Oauth/modules/OauthContent/modules/Requests/Documents';
import Email from '@/components/screen/Oauth/modules/OauthContent/modules/Requests/Email';

import createOauthRequestController from './OauthRequestController';

const { OAUTH_POPUP_CLOSED } = ConnectError.ERRORS;

export default {
  name: 'Requests',

  connectStore,
  oauthRequestController: createOauthRequestController(),
  errorNotify: new ErrorNotify(),

  data() {
    return {
      currentComponent: null,
      currentData: null,
      openModeToggle: false,
    };
  },

  methods: {
    onBack() {
      this.currentComponent = null;
      this.currentData = null;
    },

    onSwitchOauthPopup() {
      this.$router.push({
        query: {
          openMode: this.nextMode,
        },
      });
    },

    startLoading() {
      this.$emit('update:is-loading', true);
      this.currentData = null;
      this.currentComponent = null;
    },

    stopLoading() {
      this.$emit('update:is-loading', false);
    },

    async onGetEmail() {
      try {
        this.startLoading();
        this.currentData = await this.$options.oauthRequestController.getUser();
        this.currentComponent = Email;
      } catch (e) {
        if (e.code === OAUTH_POPUP_CLOSED) {
          this.notifyProcessCancelled();
          return;
        }

        this.$options.errorNotify.showError({
          title: 'Get email error',
          text: e,
        });
      } finally {
        this.stopLoading();
      }
    },

    async onGetUserAddress() {
      try {
        this.startLoading();
        this.currentData = await this.$options.oauthRequestController.getUserAddress();
        this.currentComponent = UserAddresses;
      } catch (e) {
        if (e.code === OAUTH_POPUP_CLOSED) {
          this.notifyProcessCancelled();
          return;
        }

        this.$options.errorNotify.showError({
          title: 'Get address error',
          text: e,
        });
      } finally {
        this.stopLoading();
      }
    },

    async onClear() {
      this.startLoading();

      await this.$options.oauthRequestController.logout();

      this.stopLoading();
    },

    async onGetDocuments() {
      try {
        this.startLoading();
        const {
          data,
        } = await this.$options.oauthRequestController.getDocuments();
        this.currentData = data;
        this.currentComponent = Documents;
      } catch (e) {
        if (e.code === OAUTH_POPUP_CLOSED) {
          this.notifyProcessCancelled();
          return;
        }

        this.$options.errorNotify.showError({
          title: 'Get documents error',
          text: e,
        });
      } finally {
        this.stopLoading();
      }
    },

    notifyProcessCancelled() {
      this.$options.errorNotify.showInfo({
        title: 'Operation cancelled',
        text: 'Popup was closed',
      });
    },
  },

  components: {
    ButtonsList,
    OauthFooter,
  },
};
</script>
