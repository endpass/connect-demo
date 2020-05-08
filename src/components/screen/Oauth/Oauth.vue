<template>
  <div class="oauth-container">
    <content-loader
      :is-loading="isLoading"
      label="Please wait, Oauth usage is loading..."
    />
    <div v-if="isInited">
      <section class="oauth-section">
        <v-card class="card-content">
          <form-field>
            <v-header-controls />
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
            Here are a few examples of how the "Sign In with Endpass" button
            would look to a user inside your application
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
            Each button can do request to OAuth server
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
import VHeaderControls from '@/components/modules/HeaderControls';
import ContentLoader from '@/components/modules/ContentLoader';
import PopupModeSwitcher from './modules/PopupModeSwitcher';
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
      text: 'Popup (using without iframe)',
      val: OPEN_MODES.POPUP,
    },
  ],

  data() {
    return {
      isLoadingContent: false,
    };
  },

  computed: {
    isInited() {
      return this.$options.connectStore.isInited;
    },

    isLoading() {
      return !this.isInited || this.isLoadingContent;
    },

    openMode() {
      const { openMode = OPEN_MODES.IFRAME } = this.$route.query;
      return openMode;
    },
  },

  methods: {
    onSwitchOauthPopup(openMode) {
      this.$router.push({
        query: {
          openMode,
        },
      });
      window.location.reload();
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
    VHeaderControls,
    VCard,
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
</style>
