<template>
  <div class="home">
    <v-spinner
      v-if="isLoading"
      data-test="endpass-app-loader"
      label="Please wait, basic usage is loading..."
    />
    <div
      v-else
      class="section"
    >
      <div class="card">
        <div class="card-content">
          <div v-if="formView === FORM_VIEW.LOGIN">
            <form-field>
              Popup mode:
              <span
                class="tag"
                data-test="endpass-oauth-popup-mode"
              >{{
                oauthPopupMode
              }}</span>
            </form-field>
            <form-field>
              <button
                class="button is-primary"
                data-test="endpass-oauth-get-accounts-button"
                @click="onSwitchOauthPopup"
              >
                Switch popup mode
              </button>
            </form-field>
            <p class="title">
              Requests:
            </p>
            <p class="subtitle">
              Each request do "request token" for demonstation as example
            </p>

            <form-field>
              <button
                class="button is-primary"
                data-test="endpass-oauth-get-accounts-button"
                @click="onGetAccounts"
              >
                Get Accounts
              </button>
            </form-field>
            <form-field>
              <button
                class="button is-primary"
                data-test="endpass-oauth-get-email-button"
                @click="onGetEmail"
              >
                Get Email
              </button>
            </form-field>
            <form-field>
              <button
                class="button is-primary"
                data-test="endpass-oauth-get-documents"
                @click="onGetDocuments"
              >
                Get Documents
              </button>
            </form-field>
            <div>
              <p class="title">
                SignIn OAuth button:
              </p>
              <div
                v-if="$options.connectStore.isInited"
                class="columns"
              >
                <login-card class="column">
                  default style
                </login-card>
                <login-card
                  class="column"
                  :is-inverted-colors="true"
                >
                  inverse style
                </login-card>
              </div>
            </div>
          </div>
          <email
            v-if="formView === FORM_VIEW.EMAIL"
            :user="user"
          />
          <accounts
            v-if="formView === FORM_VIEW.ACCOUNTS"
            :accounts="accounts"
          />
          <documents
            v-if="formView === FORM_VIEW.DOCUMENTS"
            :documents="documents"
          />
          <oauth-footer
            v-if="isFooterVisible"
            @back="onBack"
            @clear="onClear"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VSpinner from '@endpass/ui/components/VSpinner';
import FormField from '@/components/common/FormField';
import OauthFooter from './OauthFooter';
import Accounts from './Accounts';
import ErrorNotify from '@/class/ErrorNotify';
import { connectStore } from '@/store';
import createOauthController from './OauthController';
import Documents from '@/components/screen/Oauth/Documents';
import Email from '@/components/screen/Oauth/Email';
import LoginCard from '@/components/screen/Oauth/LoginCard';

const FORM_VIEW = {
  LOADING: 'LOADING',
  LOGIN: 'LOGIN',
  ACCOUNTS: 'ACCOUNTS',
  EMAIL: 'EMAIL',
  DOCUMENTS: 'DOCUMENTS',
};

const POPUP_MODES = {
  IFRAME: 'iframe',
  POPUP: 'popup',
};

export default {
  name: 'Oauth',

  connectStore,
  oauthController: createOauthController(),
  errorNotify: new ErrorNotify(),

  data() {
    return {
      FORM_VIEW,
      formView: FORM_VIEW.LOGIN,
      accounts: [],
      documents: [],
      user: {},
    };
  },

  computed: {
    isFooterVisible() {
      return (
        this.formView !== FORM_VIEW.LOADING && this.formView !== FORM_VIEW.LOGIN
      );
    },
    isLoading() {
      return this.formView === FORM_VIEW.LOADING;
    },

    oauthPopupMode() {
      const { popupMode = POPUP_MODES.IFRAME } = this.$route.query;
      return popupMode;
    },

    nextMode() {
      return this.oauthPopupMode === POPUP_MODES.IFRAME
        ? POPUP_MODES.POPUP
        : POPUP_MODES.IFRAME;
    },
  },

  methods: {
    onBack() {
      this.formView = FORM_VIEW.LOGIN;
    },

    onSwitchOauthPopup() {
      this.$router.push({
        query: {
          popupMode: this.nextMode,
        },
      });
    },

    async onGetEmail() {
      try {
        this.formView = FORM_VIEW.LOADING;

        this.user = await this.$options.oauthController.getUser();

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

        this.accounts = await this.$options.oauthController.getAccountData();

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

      await this.$options.oauthController.logout();

      this.formView = FORM_VIEW.LOGIN;
    },

    async onGetDocuments() {
      try {
        this.formView = FORM_VIEW.LOADING;

        const { data } = await this.$options.oauthController.getDocuments();
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

  async mounted() {
    const popupMode = this.oauthPopupMode;

    await this.$options.connectStore.initConnect({
      oauthPopup: popupMode === POPUP_MODES.POPUP,
    });
  },

  components: {
    LoginCard,
    Email,
    Documents,
    Accounts,
    OauthFooter,
    FormField,
    VSpinner,
  },
};
</script>
