<template>
  <div>
    <buttons-list
      v-if="!currentForm"
      @accounts="onGetAccounts"
      @email="onGetEmail"
      @documents="onGetDocuments"
    />
    <oauth-footer
      v-if="!!currentForm"
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
      isLoading: false,
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

    handleLoading(state) {
      this.isLoading = state;
      this.$emit('loading', state);
    },

    async onGetEmail() {
      try {
        this.handleLoading(true);
        this.currentForm = null;
        this.currentData = await this.$options.oauthRequestController.getUser();
        this.currentForm = Email;
      } catch (e) {
        this.$options.errorNotify.showError({
          title: 'Get email error',
          text: e,
        });
      } finally {
        this.handleLoading(false);
      }
    },

    async onGetAccounts() {
      try {
        this.handleLoading(true);
        this.currentForm = null;
        this.currentData = await this.$options.oauthRequestController.getAccountData();
        this.currentForm = Accounts;
      } catch (e) {
        this.$options.errorNotify.showError({
          title: 'Get accounts error',
          text: e,
        });
      } finally {
        this.handleLoading(false);
      }
    },

    async onClear() {
      this.currentForm = null;
      this.currentData = null;
      this.handleLoading(true);

      await this.$options.oauthRequestController.logout();

      this.handleLoading(false);
    },

    async onGetDocuments() {
      try {
        this.handleLoading(true);
        this.currentForm = null;

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
        this.handleLoading(false);
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
