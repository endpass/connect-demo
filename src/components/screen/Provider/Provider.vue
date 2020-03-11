<template>
  <div class="home">
    <v-spinner
      v-if="isLoading"
      data-test="endpass-app-loader"
      label="Please wait, provider usage is loading..."
    />
    <v-content v-else>
      <form-field>
        <v-client-id />
      </form-field>
      <div v-if="!connectStore.isBasicLoggedIn">
        <div class="title">
          Please open web3 form to continue...
        </div>
        <v-button
          is-inline
          data-test="endpass-sign-in-button"
          @click="handleLogin"
        >
          Open web3 form
        </v-button>
      </div>
      <div
        v-else
        data-test="endpass-form"
      >
        <form-info />
        <v-tabs>
          <v-tab
            data-test="endpass-provider-sign-tab"
            label="Sign"
          >
            <form-sign />
          </v-tab>
          <v-tab
            data-test="endpass-provider-transactions-tab"
            label="Transactions"
          >
            <form-transaction />
          </v-tab>
          <v-tab
            data-test="endpass-provider-wallet-tab"
            label="Wallet"
          >
            <generate-wallet />
          </v-tab>
          <v-tab
            data-test="endpass-provider-widget-tab"
            label="Widget"
          >
            <form-widget />
          </v-tab>
        </v-tabs>
      </div>
    </v-content>
  </div>
</template>

<script>
import VTabs from '@endpass/ui/kit/VTabs';
import VTab from '@endpass/ui/kit/VTab';
import VButton from '@endpass/ui/kit/VButton';
import VSpinner from '@endpass/ui/components/VSpinner';
import { connectStore } from '@/store';
import FormInfo from '@/components/screen/Provider/FormInfo';
import FormSign from '@/components/screen/Provider/FormSign';
import GenerateWallet from '@/components/screen/Provider/GenerateWallet';
import FormTransaction from '@/components/screen/Provider/FormTransaction';
import FormWidget from '@/components/screen/Provider/FormWidget';
import VContent from '@/components/common/VContent';
import VClientId from '@/components/common/VClientId';
import FormField from '@/components/common/FormField';

export default {
  name: 'Provider',
  data() {
    return {
      connectStore,
      isLoading: true,
      error: '',
    };
  },

  methods: {
    async handleLogin() {
      this.isLoading = true;

      await this.connectStore.login();

      this.isLoading = false;
    },
  },

  async mounted() {
    await this.connectStore.initConnect();

    this.connectStore.bindWidgetEvents();

    await this.handleLogin();
  },

  components: {
    FormField,
    VClientId,
    VContent,
    VTabs,
    VTab,
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
