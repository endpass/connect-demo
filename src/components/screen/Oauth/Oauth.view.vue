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
          <form-field v-if="isHostSwitcherVisible">
            <host-switcher @switch="onHostSwitch" />
          </form-field>
          <form-field>
            <client-id />
          </form-field>
          <form-field>
            <open-mode-switcher
              :value="openMode"
              :options="openModeOptions"
              @switch="onSwitchOpenMode"
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
            <login-card
              label="Default style"
              @login-start="onLoginStart"
              @login-end="onLoginEnd"
            />
            <login-card
              label="Inverse style"
              :is-inverted-colors="true"
              @login-start="onLoginStart"
              @login-end="onLoginEnd"
            />
          </div>
        </v-card>
      </section>
      <section
        v-if="isDocumentsListVisible"
        class="oauth-section"
      >
        <v-card class="card-content">
          <data-controls @clear="onClearToken" />
          <documents-list :documents-list="userDocuments" />
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
import OpenModeSwitcher from './modules/OpenModeSwitcher';
import HostSwitcher from './modules/HostSwitcher';
import LoginCard from './modules/LoginCard';
import DataControls from './modules/DataControls';
import DocumentsList from './modules/DocumentsList';

export default {
  name: 'OauthView',

  props: {
    isInited: {
      type: Boolean,
      required: true,
    },

    openMode: {
      type: String,
      required: true,
    },

    openModeOptions: {
      type: Array,
      required: true,
    },

    userDocuments: {
      type: Array,
      required: true,
    },

    isLoadingDocuments: {
      type: Boolean,
      default: false,
    },
  },

  data: () => ({
    isLoginning: false,
  }),

  computed: {
    isLoading() {
      return !this.isInited || this.isLoadingDocuments || this.isLoginning;
    },

    isHostSwitcherVisible() {
      return !ENV.VUE_APP_IS_PRODUCTION;
    },

    isDocumentsListVisible() {
      return this.userDocuments.length !== 0;
    },
  },

  methods: {
    onClearToken() {
      this.$emit('clear-token');
    },

    onLoginStart() {
      this.isLoginning = true;
      this.$emit('login-start');
    },

    onLoginEnd() {
      this.isLoginning = false;
      this.$emit('login-end');
    },

    async onSwitchOpenMode(openMode) {
      this.$emit('switch-open-mode', openMode);
    },

    onHostSwitch(host) {
      this.$emit('switch-host', host);
    },
  },

  components: {
    DocumentsList,
    DataControls,
    FormField,
    LoginCard,
    OpenModeSwitcher,
    ContentLoader,
    VCard,
    HostSwitcher,
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
