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
      <div class="card app-card main-app-card">
        <div class="card-content">
          <div v-if="formView === FORM_VIEW.LOGIN">
            <div class="title">
              Please log in to continue...
            </div>
            <a
              class="button is-primary"
              @click="onLogin"
            >
              Oauth Log in
            </a>
          </div>
          <div v-if="formView === FORM_VIEW.AUTHORIZED">
            <div class="subtitle">
              Accounts:
            </div>
            <div class="content">
              <ul
                v-for="account in accounts"
                :key="account"
              >
                <li class="subtitle">
                  {{ account }}
                </li>
              </ul>
            </div>
            <div>
              <a
                class="button is-danger"
                @click="onLogout"
              >
                Logout
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { connectStore } from '@/store';
import { createErrorController } from '@/controllers';
import VSpinner from '@endpass/ui/src/components/VSpinner';

const FORM_VIEW = {
  LOADING: 'LOADING',
  LOGIN: 'LOGIN',
  AUTHORIZED: 'AUTHORIZED',
};

export default {
  name: 'Oauth',
  data() {
    return {
      FORM_VIEW,
      formView: FORM_VIEW.LOGIN,
      connectStore,
      accounts: [],
      errorController: createErrorController(),
    };
  },

  computed: {
    isLoading() {
      return this.formView === FORM_VIEW.LOADING;
    },
  },

  methods: {
    async loginOauth() {
      await this.connectStore.connectInstance.loginWithOauth({
        scopes: ['wallet:accounts:read'],
        oauthServer: ENV.VUE_APP_OAUTH_SERVER,
      });
    },

    async loadData() {
      const { data } = await this.connectStore.connectInstance.request({
        method: 'GET',
        url: `${ENV.VUE_APP_ENDPASS_API_URL}/accounts`,
      });
      this.accounts = data;
    },

    async onLogin() {
      try {
        this.formView = FORM_VIEW.LOADING;
        await this.loginOauth();
        await this.loadData();
        this.formView = FORM_VIEW.AUTHORIZED;
      } catch (e) {
        this.formView = FORM_VIEW.LOGIN;
        this.errorController.showError({
          title: 'Oauth Login error',
          text: e.toString(),
        });
      }
    },

    async onLogout() {
      this.formView = FORM_VIEW.LOADING;

      await this.connectStore.connectInstance.logoutFromOauth();

      this.formView = FORM_VIEW.LOGIN;
    },
  },

  mounted() {
    this.onLogin();
  },
  components: {
    VSpinner,
  },
};
</script>
