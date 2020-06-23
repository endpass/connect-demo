<template>
  <div class="oauth-container">
    <content-loader
      :is-loading="isLoading"
      label="Please wait, Oauth usage is loading..."
    />
    <div v-if="isInited">
      <section class="oauth-section">
        <v-card class="card-content">
          <logout-button class="oauth-logout" />
          <form-field v-if="isServerSwitcherVisible">
            <server-switcher @switch="onServerSwitch" />
          </form-field>
          <form-field>
            <client-id />
          </form-field>
          <form-field>
            <popup-mode-switcher
              :value="openMode"
              :options="$options.modeOptions"
              @switch="onSwitchOauthPopup"
            />
          </form-field>
        </v-card>
      </section>
      <section class="oauth-section">
        <v-card class="card-content">
          <div class="oauth-content-header">
            Here are a few examples of how our Sign In button would look to a
            user inside your application, when beginning the Identity
            Verification process:
          </div>
          <div class="oauth-content-login-cards-list">
            <login-card label="Default style" />
            <login-card
              label="Inverse style"
              :is-inverted-colors="true"
            />
          </div>
        </v-card>
      </section>
      <section class="oauth-section">
        <v-card class="card-content">
          <div class="oauth-content-header">
            The following buttons are examples of workflows to get various
            identity details from a user:
          </div>
          <requests :is-loading.sync="isLoadingContent" />
        </v-card>
      </section>
    </div>
  </div>
</template>

<script>
import VCard from '@endpass/ui/kit/VCard';
import FormField from '@/components/modules/FormField';
import ContentLoader from '@/components/modules/ContentLoader';
import ClientId from '@/components/modules/ClientId';
import LogoutButton from '@/components/modules/LogoutButton';
import PopupModeSwitcher from './modules/PopupModeSwitcher';
import ServerSwitcher from './modules/ServerSwitcher';
import Requests from './modules/Requests';
import LoginCard from './modules/LoginCard';

import { connectStore } from '@/store';

const OPEN_MODES = {
  IFRAME: 'iframe',
  POPUP: 'popup',
};

export default {
  name: 'Oauth',

  connectStore,

  modeOptions: [
    {
      text: 'Modal (using iframe)',
      val: OPEN_MODES.IFRAME,
    },
    {
      text: 'Popup (open a new window)',
      val: OPEN_MODES.POPUP,
    },
  ],

  data: () => ({
    isLoadingContent: false,
  }),

  computed: {
    isInited() {
      return this.$options.connectStore.isInited;
    },

    isLoading() {
      return !this.isInited || this.isLoadingContent;
    },

    isServerSwitcherVisible() {
      return !ENV.VUE_APP_IS_PRODUCTION;
    },

    openMode() {
      const { openMode = OPEN_MODES.IFRAME } = this.$route.query;
      return openMode;
    },
  },

  methods: {
    async onSwitchOauthPopup(openMode) {
      const query = {
        ...this.$route.query,
        openMode,
      };

      await this.$router.push({
        query,
      });

      this.$nextTick(() => {
        window.location.reload();
      });
    },

    onServerSwitch(server) {
      window.location.replace(server);
    },
  },

  async mounted() {
    await this.$options.connectStore.initConnect({
      isPopup: this.openMode === OPEN_MODES.POPUP,
    });
  },

  components: {
    FormField,
    LoginCard,
    Requests,
    PopupModeSwitcher,
    ContentLoader,
    VCard,
    ServerSwitcher,
    ClientId,
    LogoutButton,
  },
};
</script>

<style lang="scss">
.oauth-section:not(:last-child) {
  margin-bottom: 16px;
}
.oauth-content-login-cards-list {
  display: flex;
}
.oauth-container {
  margin-bottom: 16px;
}
.oauth-section {
  position: relative;
}
.oauth-logout {
  position: absolute;
  right: 25px;
  top: 48px;
}
</style>
