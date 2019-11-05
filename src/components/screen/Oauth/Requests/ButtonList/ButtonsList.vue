<template>
  <div>
    <button-section
      button-label="Get Accounts"
      :scope-labels="['wallet:accounts:read']"
      data-test="endpass-oauth-get-accounts-button"
      @click="onGetAccounts"
    />
    <button-section
      button-label="Get Email"
      :scope-labels="['user:email:read']"
      data-test="endpass-oauth-get-email-button"
      @click="onGetEmail"
    />
    <button-section
      button-label="Get Documents"
      :scope-labels="['documents:status:read', 'documents:data:read']"
      data-test="endpass-oauth-get-documents"
      @click="onGetDocuments"
    />
  </div>
</template>

<script>
import ButtonSection from '@/components/screen/Oauth/Requests/ButtonList/ButtonSection';

export default {
  name: 'ButtonsList',

  methods: {
    async onGetEmail() {
      this.$emit('email');
    },

    async onGetAccounts() {
      this.$emit('accounts');
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
