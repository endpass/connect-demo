<template>
  <div class="home">
    <v-spinner
      v-if="isLoading"
      data-test="endpass-app-loader"
      label="Please wait, oauth usage is loading..."
    />
    <div
      v-if="isInited"
      class="section"
    >
      <div class="card">
        <div class="card-content">
          <div>
            <form-field>
              <div>
                <v-toggle
                  v-model="openModeToggle"
                  data-test="endpass-oauth-switch-mode"
                  @change="onSwitchOauthPopup"
                >
                  <div class="tags has-addons">
                    <span class="tag">OAuth open mode</span>
                    <span
                      class="tag"
                      :class="openModeClass"
                    >{{
                      openModeTitle
                    }}</span>
                  </div>
                </v-toggle>
              </div>
            </form-field>
            <v-tabs>
              <v-tab
                label="Requests"
                data-test="endpass-oauth-requests-tab"
              >
                <p class="subtitle">
                  Each button can do request to oauth server with different
                  scopes
                </p>
                <requests @loading="onLoadingRequest" />
              </v-tab>
              <v-tab
                label="SignIn button"
                data-test="endpass-oauth-signin-button-tab"
              >
                <div v-if="$options.connectStore.isInited">
                  <p class="subtitle">
                    This section have buttons in different styles, which can
                    make a signIn request to Endpass service
                  </p>
                  <login-card>
                    default style
                  </login-card>
                  <login-card :is-inverted-colors="true">
                    inverse style
                  </login-card>
                </div>
              </v-tab>
            </v-tabs>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VTabs from '@endpass/ui/kit/VTabs';
import VTab from '@endpass/ui/kit/VTab';
import VToggle from '@endpass/ui/kit/VToggle';
import VSpinner from '@endpass/ui/components/VSpinner';
import FormField from '@/components/common/FormField';
import Requests from '@/components/screen/Oauth/Requests';
import { connectStore } from '@/store';
import LoginCard from '@/components/screen/Oauth/LoginCard';

const OPEN_MODES = {
  IFRAME: 'iframe',
  POPUP: 'popup',
};

export default {
  name: 'Oauth',

  connectStore,

  data() {
    return {
      isLoadingRequest: false,
      openModeToggle: false,
    };
  },

  computed: {
    isInited() {
      return this.$options.connectStore.isInited;
    },

    isLoading() {
      return !this.isInited || this.isLoadingRequest;
    },

    openModeClass() {
      return this.isIframe ? 'is-success' : 'is-info';
    },

    openModeTitle() {
      return this.isIframe
        ? 'modal (using iframe)'
        : 'popup (using without iframe)';
    },

    openMode() {
      const { openMode = OPEN_MODES.IFRAME } = this.$route.query;
      return openMode;
    },

    isIframe() {
      return this.openMode === OPEN_MODES.IFRAME;
    },

    nextMode() {
      return this.isIframe ? OPEN_MODES.POPUP : OPEN_MODES.IFRAME;
    },
  },

  methods: {
    onLoadingRequest(state) {
      this.isLoadingRequest = state;
    },

    onSwitchOauthPopup() {
      this.$router.push({
        query: {
          openMode: this.nextMode,
        },
      });
    },
  },

  async mounted() {
    this.openModeToggle = this.isIframe;
    await this.$options.connectStore.initConnect({
      oauthPopup: !this.isIframe,
    });
  },

  components: {
    Requests,
    VTabs,
    VTab,
    VToggle,
    LoginCard,
    FormField,
    VSpinner,
  },
};
</script>
