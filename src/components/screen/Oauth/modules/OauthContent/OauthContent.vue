<template>
  <v-tabs>
    <v-tab
      label="SignIn button"
      data-test="endpass-oauth-signin-button-tab"
    >
      <div class="oauth-content-header">
        This section have buttons in different styles, which can make a signIn
        request to Endpass service
      </div>
      <login-card label="default style" />
      <login-card
        label="inverse style"
        :is-inverted-colors="true"
      />
    </v-tab>
    <v-tab
      label="Requests"
      data-test="endpass-oauth-requests-tab"
    >
      <div class="oauth-content-header">
        Each button can do request to oauth server
      </div>
      <requests :is-loading.sync="isLoadingRequest" />
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

<style lang="scss">
.oauth-content-header {
  font-size: 14px;
  color: var(--endpass-ui-color-grey-7);
  margin-top: 16px;
  margin-bottom: 24px;
}
</style>
