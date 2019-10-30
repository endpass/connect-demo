<template>
  <section class="content">
    <p class="subtitle">
      Check sign and recover messages by web3 account
    </p>
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
          <v-button
            :disabled="!canSign"
            data-test="endpass-form-sign-button"
            @click="onWeb3EthSign"
          >
            web3.eth.sign
          </v-button>
        </div>
        <div class="column is-narrow">
          <v-button
            :disabled="!canSign"
            data-test="endpass-form-personal-sign-button"
            @click="onWeb3PersonalSign"
          >
            web3.eth.personal.sign
          </v-button>
        </div>
        <div class="column is-narrow">
          <v-button
            :disabled="!signature"
            data-test="endpass-form-personal-recover-button"
            @click="onWeb3PersonRecover"
          >
            web3.eth.personal.ecRecover
          </v-button>
        </div>
      </div>
    </form-field>
  </section>
</template>

<script>
import VButton from '@endpass/ui/kit/VButton';
import VTextarea from '@endpass/ui/kit/VTextarea';
import { web3Store, connectStore } from '@/store';
import FormField from '@/components/common/FormField';
import ErrorNotify from '@/class/ErrorNotify';

export default {
  name: 'FormSign',

  errorNotify: new ErrorNotify(),
  connectStore,

  data() {
    return {
      fromMessage: '',
      signature: '',
    };
  },

  computed: {
    hasActiveAccount() {
      return !!this.$options.connectStore.basicActiveAccount;
    },

    canSign() {
      return this.hasActiveAccount && !!this.fromMessage;
    },
  },

  methods: {
    async onWeb3EthSign() {
      try {
        this.signature = await web3Store.EthSign({
          from: this.$options.connectStore.basicActiveAccount,
          message: this.fromMessage,
        });
      } catch (e) {
        this.$options.errorNotify.showError({
          title: 'Web3 ETH Sign error',
          text: e,
        });
      }
    },

    async onWeb3PersonalSign() {
      try {
        this.signature = await web3Store.EthPersonalSign({
          from: this.$options.connectStore.basicActiveAccount,
          message: this.fromMessage,
        });
      } catch (e) {
        this.$options.errorNotify.showError({
          title: 'Personal Web3 ETH Sign error',
          text: e,
        });
      }
    },

    async onWeb3PersonRecover() {
      try {
        const recoveredText = await web3Store.EthPersonalRecover({
          message: this.fromMessage,
          signature: this.signature,
        });
        this.$options.errorNotify.showWarn({
          title: 'Recovered!',
          text: recoveredText,
        });
      } catch (e) {
        this.$options.errorNotify.showError({
          title: 'Personal Web3 ETH Recover error',
          text: e,
        });
      }
    },
  },

  components: {
    VButton,
    VTextarea,
    FormField,
  },
};
</script>
