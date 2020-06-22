<template>
  <oauth-view
    :is-inited="isInited"
    :is-loading-documents="isLoadingDocuments"
    :open-mode="openMode"
    :open-mode-options="$options.MODE_OPTIONS"
    :user-documents="userDocuments"
    @clear-token="onClearToken"
    @login-end="loadUserDocuments"
    @switch-open-mode="onSwitchOpenMode"
    @switch-host="onSwitchHost"
  />
</template>

<script>
import createOauthController from './Oauth.controller';
import OauthView from '@/components/screen/Oauth/Oauth.view';

const OPEN_MODES = {
  IFRAME: 'iframe',
  POPUP: 'popup',
};

const MODE_OPTIONS = [
  {
    text: 'Modal (using iframe)',
    val: OPEN_MODES.IFRAME,
  },
  {
    text: 'Popup (open a new window)',
    val: OPEN_MODES.POPUP,
  },
];

export default {
  name: 'OauthInterface',

  MODE_OPTIONS,

  oauthController: createOauthController(),

  data: () => ({
    isLoadingDocuments: false,
  }),

  computed: {
    isInited() {
      return this.$options.oauthController.isInited;
    },

    openMode() {
      const { openMode = OPEN_MODES.IFRAME } = this.$route.query;
      return openMode;
    },

    userDocuments() {
      return this.$options.oauthController.userDocuments;
    },
  },

  methods: {
    async onClearToken() {
      await this.$options.oauthController.logout();
    },

    async loadUserDocuments() {
      try {
        this.isLoadingDocuments = true;
        await this.$options.oauthController.loadUserDocuments();
      } finally {
        this.isLoadingDocuments = false;
      }
    },

    async onSwitchOpenMode(openMode) {
      await this.$router.push({
        query: {
          ...this.$route.query,
          openMode,
        },
      });

      this.$nextTick(() => {
        window.location.reload();
      });
    },

    onSwitchHost(host) {
      window.location.replace(host);
    },
  },

  async mounted() {
    await this.$options.oauthController.initConnect({
      isPopup: this.openMode === OPEN_MODES.POPUP,
    });
  },

  components: {
    OauthView,
  },
};
</script>
