<template>
  <div>
    <buttons-list
      v-if="!currentComponent"
      @address="onGetUserAddress"
      @user-details="onGetUserDetails"
      @user-documents="onGetUserDocuments"
    />
    <data-controls
      v-else
      is-back-available
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
import ButtonsList from './modules/RequestButtons';
import DataControls from '../DataControls';
import UserAddresses from './modules/UserAddresses';
import DocumentsList from '@/components/screen/Oauth/modules/DocumentsList';
import UserDetails from './modules/UserDetails';

import createOauthRequestController from './Requests.controller';

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

    async onGetUserDetails() {
      try {
        this.startLoading();
        this.currentData = await this.$options.oauthRequestController.getUser();
        this.currentComponent = UserDetails;
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

    async onGetUserDocuments() {
      try {
        this.startLoading();
        this.currentData = await this.$options.oauthRequestController.getUserDocuments();
        this.currentComponent = DocumentsList;
      } finally {
        this.stopLoading();
      }
    },
  },

  components: {
    ButtonsList,
    DataControls,
  },
};
</script>
