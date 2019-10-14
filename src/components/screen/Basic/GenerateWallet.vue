<template>
  <section class="content">
    <form-field label="Generate wallet">
      <div class="columns">
        <div class="column is-narrow">
          <button
            class="button is-primary"
            data-test="generate-wallet-button"
            @click="onGenerate"
          >
            Generate wallet account
          </button>
        </div>
        <div class="column">
          <v-textarea
            v-model="walletData"
            readonly
            placeholder="generated wallet data..."
          />
        </div>
      </div>
    </form-field>
  </section>
</template>

<script>
import { connectStore } from '@/store';
import FormField from '@/components/common/FormField.vue';

export default {
  name: 'CreateWallet',

  data() {
    return {
      connectStore,
      walletData: '',
    };
  },

  methods: {
    async onGenerate() {
      const data = await this.connectStore.generateWallet();
      this.walletData = JSON.stringify(data);
    },
  },

  components: {
    FormField,
  },
};
</script>
