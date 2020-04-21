<template>
  <v-tabs>
    <v-tab
      label="Requests"
      data-test="endpass-oauth-requests-tab"
    >
      <p class="subtitle">
        Each button can do request to oauth server
      </p>
      <requests :is-loading.sync="isLoadingRequest" />
    </v-tab>
    <v-tab
      label="SignIn button"
      data-test="endpass-oauth-signin-button-tab"
    >
      <p class="subtitle">
        This section have buttons in different styles, which can make a signIn
        request to Endpass service
      </p>
      <login-card>
        default style
      </login-card>
      <login-card :is-inverted-colors="true">
        inverse style
      </login-card>
    </v-tab>
  </v-tabs>
</template>

<script>
import VTabs from '@endpass/ui/kit/VTabs';
import VTab from '@endpass/ui/kit/VTab';
import { connectStore } from '@/store';
import Requests from './modules/Requests';
import LoginCard from './modules/LoginCard';

export default {
  name: 'OauthContent',

  connectStore,

  props: {
    isLoading: {
      type: Boolean,
      required: true,
    },
  },

  data() {
    return {
      isLoadingRequest: false,
      openModeToggle: false,
    };
  },

  watch: {
    isLoadingRequest: {
      handler(val) {
        this.$emit('update:is-loading', val);
      },
      immediate: true,
    },
  },

  components: {
    Requests,
    VTabs,
    VTab,
    LoginCard,
  },
};
</script>
