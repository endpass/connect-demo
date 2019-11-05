<template>
  <div>
    <buttons-list
      v-if="!currentForm"
      @accounts="onGetAccounts"
      @email="onGetEmail"
      @documents="onGetDocuments"
    />
    <oauth-footer
      v-else
      @back="onBack"
      @clear="onClear"
    />
    <component
      :is="currentForm"
      :data="currentData"
    />
  </div>
</template>

<script>
import VSpinner from '@endpass/ui/components/VSpinner';
import ErrorNotify from '@/class/ErrorNotify';
import { connectStore } from '@/store';
import createOauthRequestController from './OauthRequestController';
import OauthFooter from '@/components/screen/Oauth/Requests/OauthFooter';
import Accounts from '@/components/screen/Oauth/Requests/Accounts';
import Documents from '@/components/screen/Oauth/Requests/Documents';
import Email from '@/components/screen/Oauth/Requests/Email';
import ButtonSection from '@/components/screen/Oauth/Requests/ButtonList/ButtonSection';
import ButtonsList from '@/components/screen/Oauth/Requests/ButtonList/ButtonsList';

export default {
  name: 'Requests',

  connectStore,
  oauthRequestController: createOauthRequestController(),
  errorNotify: new ErrorNotify(),

  data() {
    return {
      currentForm: null,
      currentData: null,
      openModeToggle: false,
    };
  },

  methods: {
    onBack() {
      this.currentForm = null;
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
      this.currentForm = null;
    },

    stopLoading() {
      this.$emit('update:is-loading', false);
    },

    async onGetEmail() {
      try {
        this.startLoading();
        this.currentData = await this.$options.oauthRequestController.getUser();
        this.currentForm = Email;
      } catch (e) {
        this.$options.errorNotify.showError({
          title: 'Get email error',
          text: e,
        });
      } finally {
        this.stopLoading();
      }
    },

    async onGetAccounts() {
      try {
        this.startLoading();
        this.currentData = await this.$options.oauthRequestController.getAccountData();
        this.currentForm = Accounts;
      } catch (e) {
        this.$options.errorNotify.showError({
          title: 'Get accounts error',
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
        this.currentForm = Documents;
      } catch (e) {
        this.$options.errorNotify.showError({
          title: 'Get documents error',
          text: e,
        });
      } finally {
        this.stopLoading();
      }
    },
  },

  components: {
    ButtonsList,
    VSpinner,
    ButtonSection,
    Email,
    Documents,
    Accounts,
    OauthFooter,
  },
};
</script>
