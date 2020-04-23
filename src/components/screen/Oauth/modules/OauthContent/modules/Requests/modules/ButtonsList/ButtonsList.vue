<template>
  <div>
    <button-section
      label="Get Addresses"
      method="GET"
      :path="`${serverUrl}/user/address`"
      data-test="endpass-oauth-get-accounts-button"
      @click="onGetAddress"
    />
    <button-section
      label="Get Email"
      method="GET"
      :path="`${serverUrl}/user`"
      data-test="endpass-oauth-get-email-button"
      @click="onGetEmail"
    />
    <button-section
      label="Get Documents"
      method="GET"
      :path="`${serverUrl}/documents`"
      data-test="endpass-oauth-get-documents"
      @click="onGetDocuments"
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
    async onGetEmail() {
      this.$emit('email');
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
