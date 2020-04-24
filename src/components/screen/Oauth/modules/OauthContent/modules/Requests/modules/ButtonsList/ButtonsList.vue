<template>
  <table>
    <tbody>
      <row
        label="Get email"
        description="receive user's email'"
        method="GET"
        :path="`${serverUrl}/user`"
        data-test="endpass-oauth-get-user-details-button"
        @click="onGetUserDetails"
      />
      <row
        label="Get Documents"
        description="receive only verified documents list"
        method="GET"
        :path="`${serverUrl}/documents`"
        data-test="endpass-oauth-get-documents-button"
        @click="onGetDocuments"
      />
      <row
        label="Get Addresses"
        description="receive addresses list"
        method="GET"
        :path="`${serverUrl}/user/address`"
        data-test="endpass-oauth-get-accounts-button"
        @click="onGetAddress"
      />
    </tbody>
  </table>
</template>

<script>
import Row from './Row';

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
    Row,
  },
};
</script>
