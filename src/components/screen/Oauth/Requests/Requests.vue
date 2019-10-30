<template>
  <div>
    <v-spinner
      v-if="formView === FORM_VIEW.LOADING"
      data-test="endpass-request-loader"
    />
    <oauth-footer
      v-else-if="isFooterVisible"
      @back="onBack"
      @clear="onClear"
    />
    <div v-if="formView === FORM_VIEW.LOGIN">
      <button-section
        button-label="Get Accounts"
        :scope-labels="['wallet:accounts:read']"
        data-test="endpass-oauth-get-accounts-button"
        @click="onGetAccounts"
      />
      <button-section
        button-label="Get Email"
        :scope-labels="['user:email:read']"
        data-test="endpass-oauth-get-email-button"
        @click="onGetEmail"
      />
      <button-section
        button-label="Get Documents"
        :scope-labels="['documents:status:read', 'documents:data:read']"
        data-test="endpass-oauth-get-documents"
        @click="onGetDocuments"
      />
    </div>
    <email
      v-else-if="formView === FORM_VIEW.EMAIL"
      :user="user"
    />
    <accounts
      v-else-if="formView === FORM_VIEW.ACCOUNTS"
      :accounts="accounts"
    />
    <documents
      v-else-if="formView === FORM_VIEW.DOCUMENTS"
      :documents="documents"
    />
  </div>
</template>

<script>
import VSpinner from '@endpass/ui/components/VSpinner';
import ErrorNotify from '@/class/ErrorNotify';
import { connectStore } from '@/store';
import createRequestController from './RequestController';
import OauthFooter from '@/components/screen/Oauth/Requests/OauthFooter';
import Accounts from '@/components/screen/Oauth/Requests/Accounts';
import Documents from '@/components/screen/Oauth/Requests/Documents';
import Email from '@/components/screen/Oauth/Requests/Email';
import ButtonSection from '@/components/screen/Oauth/Requests/ButtonSection';

const FORM_VIEW = {
  LOADING: 'LOADING',
  LOGIN: 'LOGIN',
  ACCOUNTS: 'ACCOUNTS',
  EMAIL: 'EMAIL',
  DOCUMENTS: 'DOCUMENTS',
};

export default {
  name: 'Requests',

  connectStore,
  requestController: createRequestController(),
  errorNotify: new ErrorNotify(),

  data() {
    return {
      FORM_VIEW,
      formView: FORM_VIEW.LOGIN,
      accounts: [],
      documents: [],
      user: {},
      openModeToggle: false,
    };
  },

  computed: {
    isFooterVisible() {
      return (
        this.formView !== FORM_VIEW.LOADING && this.formView !== FORM_VIEW.LOGIN
      );
    },
  },

  methods: {
    onBack() {
      this.formView = FORM_VIEW.LOGIN;
    },

    onSwitchOauthPopup() {
      this.$router.push({
        query: {
          openMode: this.nextMode,
        },
      });
    },

    async onGetEmail() {
      try {
        this.formView = FORM_VIEW.LOADING;

        this.user = await this.$options.requestController.getUser();

        this.formView = FORM_VIEW.EMAIL;
      } catch (e) {
        this.formView = FORM_VIEW.LOGIN;
        this.$options.errorNotify.showError({
          title: 'Get email error',
          text: e,
        });
      }
    },

    async onGetAccounts() {
      try {
        this.formView = FORM_VIEW.LOADING;

        this.accounts = await this.$options.requestController.getAccountData();

        this.formView = FORM_VIEW.ACCOUNTS;
      } catch (e) {
        this.formView = FORM_VIEW.LOGIN;
        this.$options.errorNotify.showError({
          title: 'Get accounts error',
          text: e,
        });
      }
    },

    async onClear() {
      this.formView = FORM_VIEW.LOADING;

      await this.$options.requestController.logout();

      this.formView = FORM_VIEW.LOGIN;
    },

    async onGetDocuments() {
      try {
        this.formView = FORM_VIEW.LOADING;

        const { data } = await this.$options.requestController.getDocuments();
        this.documents = data;

        this.formView = FORM_VIEW.DOCUMENTS;
      } catch (e) {
        this.formView = FORM_VIEW.LOGIN;
        this.$options.errorNotify.showError({
          title: 'Get documents error',
          text: e,
        });
      }
    },
  },

  components: {
    VSpinner,
    ButtonSection,
    Email,
    Documents,
    Accounts,
    OauthFooter,
  },
};
</script>
