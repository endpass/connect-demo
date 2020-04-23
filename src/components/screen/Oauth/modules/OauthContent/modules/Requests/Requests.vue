<template>
  <div>
    <buttons-list
      v-if="!currentComponent"
      @address="onGetUserAddress"
      @email="onGetEmail"
      @documents="onGetDocuments"
    />
    <oauth-controls
      v-else
      @back="onBack"
      @clear="onClear"
    />
    <component
      :is="currentComponent"
      :data="currentData"
    />
  </div>
</template>

<script>
import ButtonsList from './modules/ButtonsList';
import OauthControls from './modules/OauthControls';
import UserAddresses from './modules/UserAddresses';
import Documents from './modules/Documents';
import Email from './modules/Email';

import createOauthRequestController from './OauthRequestController';

export default {
  name: 'Requests',

  oauthRequestController: createOauthRequestController(),

  data() {
    return {
      currentComponent: null,
      currentData: null,
    };
  },

  methods: {
    onBack() {
      this.currentComponent = null;
      this.currentData = null;
    },

    startLoading() {
      this.$emit('update:is-loading', true);
      this.currentData = null;
      this.currentComponent = null;
    },

    stopLoading() {
      this.$emit('update:is-loading', false);
    },

    async onGetEmail() {
      try {
        this.startLoading();
        this.currentData = await this.$options.oauthRequestController.getUser();
        this.currentComponent = Email;
      } finally {
        this.stopLoading();
      }
    },

    async onGetUserAddress() {
      try {
        this.startLoading();
        this.currentData = await this.$options.oauthRequestController.getUserAddress();
        this.currentComponent = UserAddresses;
      } finally {
        this.stopLoading();
      }
    },

    async onClear() {
      this.startLoading();

      await this.$options.oauthRequestController.logout();

      this.stopLoading();
    },

    async onGetDocuments() {
      try {
        this.startLoading();
        this.currentData = await this.$options.oauthRequestController.getDocuments();
        this.currentComponent = Documents;
      } finally {
        this.stopLoading();
      }
    },
  },

  components: {
    ButtonsList,
    OauthControls,
  },
};
</script>
