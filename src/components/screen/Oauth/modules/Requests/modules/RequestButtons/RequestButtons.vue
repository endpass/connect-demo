<template>
  <table>
    <tbody>
      <row
        label="Get email"
        description="receive user's email address"
        method="GET"
        :path="`${$options.serverUrl}/user`"
        data-test="endpass-oauth-get-user-details-button"
        @click="onGetUserDetails"
      />
      <row
        label="Get Documents"
        description="receive user's verified documents"
        method="GET"
        :path="`${$options.serverUrl}/documents`"
        data-test="endpass-oauth-get-documents-button"
        @click="onGetUserDocuments"
      />
      <row
        label="Get Addresses"
        description="receive user's address(es)"
        method="GET"
        :path="`${$options.serverUrl}/user/address`"
        data-test="endpass-oauth-get-accounts-button"
        @click="onGetAddress"
      />
    </tbody>
  </table>
</template>

<script>
import Row from './modules/Row';

export default {
  name: 'RequestButtons',

  serverUrl: ENV.VUE_APP_OAUTH_SERVER,

  methods: {
    async onGetUserDetails() {
      this.$emit('user-details');
    },

    async onGetAddress() {
      this.$emit('address');
    },

    async onGetUserDocuments() {
      this.$emit('user-documents');
    },
  },

  components: {
    Row,
  },
};
</script>
