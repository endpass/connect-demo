<template>
  <section class="content">
    <form-field label="Data">
      <div class="columns">
        <div class="column is-one-quarter">
          <v-textarea
            v-model="fromMessage"
            :disabled="!hasActiveAccount"
            placeholder="Enter message to sign..."
            data-test="endpass-form-message-input"
          />
        </div>
        <div class="column is-one-quarter">
          <v-textarea
            v-model="signature"
            readonly
            :disabled="!hasActiveAccount"
            placeholder="Signed data..."
            data-test="endpass-form-signature-input"
          />
        </div>
      </div>
    </form-field>
    <form-field label="Sign & Recover">
      <div class="columns">
        <div class="column is-narrow">
          <button
            class="button is-primary"
            :disabled="!canSign"
            data-test="endpass-form-sign-button"
            @click="onWeb3EthSign"
          >
            web3.eth.sign
          </button>
        </div>
        <div class="column is-narrow">
          <button
            class="button is-primary"
            :disabled="!canSign"
            data-test="endpass-form-personal-sign-button"
            @click="onWeb3PersonalSign"
          >
            web3.eth.personal.sign
          </button>
        </div>
        <div class="column is-narrow">
          <button
            class="button is-primary"
            :disabled="!signature"
            data-test="endpass-form-personal-recover-button"
            @click="onWeb3PersonRecover"
          >
            web3.eth.personal.ecRecover
          </button>
        </div>
      </div>
    </form-field>
  </section>
</template>

<script>
import VTextarea from '@endpass/ui/components/VTextarea';
import { web3Store, connectStore } from '@/store';
import FormField from '@/components/common/FormField.vue';
import ErrorNotify from '@/class/ErrorNotify';

export default {
  name: 'FormSign',

  data() {
    return {
      fromMessage: '',
      signature: '',
      errorNotify: new ErrorNotify(),
      connectStore,
    };
  },

  computed: {
    hasActiveAccount() {
      return !!this.connectStore.basicActiveAccount;
    },

    canSign() {
      return this.hasActiveAccount && !!this.fromMessage;
    },
  },

  methods: {
    async onWeb3EthSign() {
      try {
        this.signature = await web3Store.EthSign({
          from: this.connectStore.basicActiveAccount,
          message: this.fromMessage,
        });
      } catch (e) {
        this.errorNotify.showError({
          title: 'Web3 ETH Sign error',
          text: e.toString(),
        });
      }
    },

    async onWeb3PersonalSign() {
      try {
        this.signature = await web3Store.EthPersonalSign({
          from: this.connectStore.basicActiveAccount,
          message: this.fromMessage,
        });
      } catch (e) {
        this.errorNotify.showError({
          title: 'Personal Web3 ETH Sign error',
          text: e.toString(),
        });
      }
    },

    async onWeb3PersonRecover() {
      try {
        const recoveredText = await web3Store.EthPersonalRecover({
          message: this.fromMessage,
          signature: this.signature,
        });
        this.errorNotify.showWarn({
          title: 'Recovered!',
          text: recoveredText,
        });
      } catch (e) {
        this.errorNotify.showError({
          title: 'Personal Web3 ETH Recover error',
          text: e.toString(),
        });
      }
    },
  },

  components: {
    VTextarea,
    FormField,
  },
};
</script>
