<template>
  <content-loader :is-loading="isLoading">
    <span slot="label">Please wait, Oauth usage is loading...</span>
    <section v-if="isInited">
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
        <oauth-content :is-loading.sync="isLoadingContent" />
      </v-card>
    </section>
  </content-loader>
</template>

<script>
import VCard from '@endpass/ui/kit/VCard';
import FormField from '@/components/modules/FormField';
import VHeaderControls from '@/components/modules/HeaderControls';
import ContentLoader from '@/components/modules/ContentLoader';
import PopupModeSwitcher from './modules/PopupModeSwitcher';
import OauthContent from './modules/OauthContent';
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
    OauthContent,
    PopupModeSwitcher,
    ContentLoader,
    VHeaderControls,
    VCard,
  },
};
</script>
