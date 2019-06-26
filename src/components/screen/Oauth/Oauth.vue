<template>
  <div class="home">
    <v-spinner
      v-if="isLoading"
      data-test="endpass-app-loader"
      label="Please wait, basic usage is loading..."
    />
    <div v-else class="section">
      <div class="card app-card main-app-card">
        <div class="card-content">
          <div v-if="formView === FORM_VIEW.LOGIN">
            <p class="title">
              Each request do "request token" for demonstation as example
            </p>
            <p class="subtitle">
              Please select action to continue...
            </p>

            <form-field>
              <a class="button is-primary" @click="onGetAccounts">
                Get Accounts
              </a>
            </form-field>
            <form-field>
              <a class="button is-primary" @click="onGetEmail">
                Get Email
              </a>
            </form-field>
          </div>
          <div v-if="formView === FORM_VIEW.EMAIL">
            <form-field label="Email:">
              {{ user.email }}
            </form-field>
            <oauth-footer @back="onBack" @logout="onLogout" />
          </div>
          <div v-if="formView === FORM_VIEW.ACCOUNTS">
            <div class="subtitle">
              Accounts:
            </div>
            <div class="content">
              <ul v-for="account in accounts" :key="account">
                <li class="subtitle">
                  {{ account }}
                </li>
              </ul>
            </div>
            <oauth-footer @back="onBack" @logout="onLogout" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VSpinner from '@endpass/ui/src/components/VSpinner';
import FormField from '@/components/common/FormField';
import OauthFooter from '@/components/screen/Oauth/OauthFooter';
import ErrorNotify from '@/class/ErrorNotify';
import { createOauthController } from '@/controllers';

const FORM_VIEW = {
  LOADING: 'LOADING',
  LOGIN: 'LOGIN',
  ACCOUNTS: 'ACCOUNTS',
  EMAIL: 'EMAIL',
};

export default {
  name: 'Oauth',
  data() {
    return {
      FORM_VIEW,
      formView: FORM_VIEW.LOGIN,
      accounts: [],
      user: {},
      errorNotify: new ErrorNotify(),
      oauthController: createOauthController(),
    };
  },

  computed: {
    isLoading() {
      return this.formView === FORM_VIEW.LOADING;
    },
  },

  methods: {
    onBack() {
      this.formView = FORM_VIEW.LOGIN;
    },

    async onGetEmail() {
      try {
        this.formView = FORM_VIEW.LOADING;

        await this.oauthController.loginOauth(['user:email:read']);
        this.user = await this.oauthController.getUser();

        this.formView = FORM_VIEW.EMAIL;
      } catch (e) {
        this.formView = FORM_VIEW.LOGIN;
        this.errorNotify.showError({
          title: 'Get email error',
          text: e.toString(),
        });
      }
    },

    async onGetAccounts() {
      try {
        this.formView = FORM_VIEW.LOADING;

        await this.oauthController.loginOauth(['wallet:accounts:read']);
        this.accounts = await this.oauthController.getAccountData();

        this.formView = FORM_VIEW.ACCOUNTS;
      } catch (e) {
        this.formView = FORM_VIEW.LOGIN;
        this.errorNotify.showError({
          title: 'Get accounts error',
          text: e.toString(),
        });
      }
    },

    async onLogout() {
      this.formView = FORM_VIEW.LOADING;

      await this.oauthController.logout();

      this.formView = FORM_VIEW.LOGIN;
    },
  },

  components: {
    OauthFooter,
    FormField,
    VSpinner,
  },
};
</script>
