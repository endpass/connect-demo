<template>
  <div>
    <button-section
      button-label="Get Addresses"
      data-test="endpass-oauth-get-accounts-button"
      @click="onGetAddress"
    >
      GET
      <v-tag skin="green">
        {{ `${serverUrl}/user/address` }}
      </v-tag>
    </button-section>
    <button-section
      button-label="Get Email"
      data-test="endpass-oauth-get-email-button"
      @click="onGetEmail"
    >
      GET
      <v-tag skin="green">
        {{ `${serverUrl}/user` }}
      </v-tag>
    </button-section>
    <button-section
      button-label="Get Documents"
      data-test="endpass-oauth-get-documents"
      @click="onGetDocuments"
    >
      GET
      <v-tag skin="green">
        {{ `${serverUrl}/documents` }}
      </v-tag>
    </button-section>
  </div>
</template>

<script>
import VTag from '@endpass/ui/kit/VTag';
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
    VTag,
  },
};
</script>
