<template>
  <div class="home">
    <v-spinner
      v-if="isLoading"
      data-test="endpass-app-loader"
      label="Please wait, provider usage is loading..."
    />
    <div
      v-else
      class="section"
    >
      <div class="card">
        <div class="card-content">
          <div v-if="!connectStore.isBasicLoggedIn">
            <div class="title">
              Please open web3 form to continue...
            </div>
            <v-button
              data-test="endpass-sign-in-button"
              @click="onLogin"
            >
              Open web3 form
            </v-button>
          </div>
          <div
            v-else
            data-test="endpass-form"
          >
            <form-info />
            <form-sign />
            <form-transaction />
            <generate-wallet />
            <form-widget />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VButton from '@endpass/ui/components/VButton';
import VSpinner from '@endpass/ui/components/VSpinner';
import { connectStore } from '@/store';
import FormInfo from '@/components/screen/Provider/FormInfo';
import FormSign from '@/components/screen/Provider/FormSign';
import GenerateWallet from '@/components/screen/Provider/GenerateWallet';
import FormTransaction from '@/components/screen/Provider/FormTransaction';
import FormWidget from '@/components/screen/Provider/FormWidget';

export default {
  name: 'Basic',
  data() {
    return {
      connectStore,
      isLoading: true,
      error: '',
    };
  },

  methods: {
    async onLogin() {
      this.isLoading = true;

      await this.connectStore.login();

      this.isLoading = false;
    },
  },

  async mounted() {
    await this.connectStore.initConnect();

    this.connectStore.bindWidgetEvents();

    await this.onLogin();
  },

  components: {
    FormWidget,
    FormTransaction,
    FormSign,
    FormInfo,
    VSpinner,
    VButton,
    GenerateWallet,
  },
};
</script>
