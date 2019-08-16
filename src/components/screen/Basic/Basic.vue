<template>
  <div class="home">
    <v-spinner
      v-if="isLoading"
      data-test="endpass-app-loader"
      label="Please wait, basic usage is loading..."
    />
    <div v-else class="section">
      <div class="card app-card main-app-card">
        <div class="card-content">
          <div v-if="!connectStore.isBasicLoggedIn">
            <div class="title">
              Please open web3 form to continue...
            </div>
            <v-button data-test="endpass-sign-in-button" @click="onLogin">
              Open web3 form
            </v-button>
          </div>
          <form-account v-else data-test="endpass-form" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VButton from '@endpass/ui/components/VButton';
import VSpinner from '@endpass/ui/components/VSpinner';
import { connectStore } from '@/store';
import FormAccount from '@/components/screen/Basic/FormAccount';

export default {
  name: 'HomeScreen',
  data() {
    return {
      connectStore,
      isLoading: false,
      error: '',
    };
  },

  methods: {
    async onLogin() {
      this.isLoading = true;

      await connectStore.login();

      this.isLoading = false;
    },
  },

  async mounted() {
    connectStore.bindWidgetEvents();

    await this.onLogin();
  },

  components: { VSpinner, FormAccount, VButton },
};
</script>
