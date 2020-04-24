<template>
  <div>
    <button-section
      label="Get User"
      description="receive user details"
      method="GET"
      :path="`${serverUrl}/user`"
      data-test="endpass-oauth-get-user-details-button"
      @click="onGetUserDetails"
    />
    <button-section
      label="Get Documents"
      description="receive only verified documents list"
      method="GET"
      :path="`${serverUrl}/documents`"
      data-test="endpass-oauth-get-documents-button"
      @click="onGetDocuments"
    />
    <button-section
      label="Get Addresses"
      description="receive addresses list"
      method="GET"
      :path="`${serverUrl}/user/address`"
      data-test="endpass-oauth-get-accounts-button"
      @click="onGetAddress"
    />
  </div>
</template>

<script>
import ButtonSection from './ButtonSection';

export default {
  name: 'ButtonsList',

  data: () => ({
    serverUrl: ENV.VUE_APP_OAUTH_SERVER,
  }),

  methods: {
    async onGetUserDetails() {
      this.$emit('user-details');
    },

    async onGetAddress() {
      this.$emit('address');
    },

    async onGetDocuments() {
      this.$emit('documents');
    },
  },

  components: {
    ButtonSection,
  },
};
</script>
