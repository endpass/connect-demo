<template>
  <section class="content">
    <p class="subtitle">
      Just generate new wallet account
    </p>
    <div class="columns">
      <div class="column is-narrow">
        <v-button
          is-inline
          data-test="generate-wallet-button"
          @click="onGenerate"
        >
          Generate
        </v-button>
      </div>
      <div class="column">
        <v-textarea
          v-model="walletData"
          readonly
          placeholder="generated wallet data..."
        />
      </div>
    </div>
  </section>
</template>

<script>
import VButton from '@endpass/ui/kit/VButton';
import VTextarea from '@endpass/ui/kit/VTextarea';
import { connectStore } from '@/store';
import ErrorNotify from '@/class/ErrorNotify';

export default {
  name: 'CreateWallet',

  errorNotify: new ErrorNotify(),
  connectStore,

  data() {
    return {
      walletData: '',
    };
  },

  methods: {
    async onGenerate() {
      try {
        const data = await this.$options.connectStore.generateWallet();
        this.walletData = JSON.stringify(data);
      } catch (e) {
        this.$options.errorNotify.showError({
          title: 'Wallet generate error',
          text: e,
        });
      }
    },
  },

  components: {
    VButton,
    VTextarea,
  },
};
</script>
