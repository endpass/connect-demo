<template>
  <section class="content">
    <form-field label="Transactions">
      <p>
        All transactions works with <strong>Ropsten TEST-ETH</strong>. Be sure
        what your account using <strong>Ropsten network</strong>. If it is not –
        all transactions buttons should be disabled.
      </p>
      <p>
        If you have not any TEST-ETH – you can request it from faucet in account
        settings. Just press <strong>Open account</strong> button, switch to
        <strong>Ropsten</strong> test network and hit
        <strong>Request 1 ETH from fauset</strong> button
      </p>
      <div class="columns">
        <div class="column">
          <v-input
            v-model="trxTo"
            :disabled="!isRopsten"
            label="Transaction receiver address:"
            placeholder="Enter reciever account address"
            data-test="endpass-form-send-transaction-address"
          />
        </div>
        <div class="column">
          <v-input
            v-model="trxValue"
            :disabled="!isRopsten"
            type="number"
            label="Transaction value:"
            min="0"
            step="0.1"
            data-test="endpass-form-send-transaction-value"
          />
        </div>
      </div>
      <div class="columns">
        <div class="column is-narrow">
          <button
            class="button is-primary"
            :disabled="!isRopsten || !isValidTrxReceiverAddress"
            data-test="endpass-form-send-transaction-button"
            @click="onWeb3SendTransaction"
          >
            web3.eth.sendTransaction
          </button>
        </div>
      </div>
    </form-field>
  </section>
</template>

<script>
import Network from '@endpass/class/Network';
import VInput from '@endpass/ui/components/VInput';
import { web3Store, connectStore } from '@/store';
import FormField from '@/components/common/FormField.vue';
import ErrorNotify from '@/class/ErrorNotify';

export default {
  name: 'FormTransaction',

  data() {
    return {
      trxTo: '',
      trxValue: 0,
      errorNotify: new ErrorNotify(),
      connectStore,
    };
  },

  computed: {
    isRopsten() {
      /* eslint-disable-next-line */
      return this.connectStore.basicActiveNet == Network.NET_ID.ROPSTEN;
    },

    isValidTrxReceiverAddress() {
      return /^(0x)[a-z0-9]{40,}/i.test(this.trxTo);
    },
  },

  methods: {
    async onWeb3SendTransaction() {
      try {
        const trxHash = await web3Store.EthSendTransaction({
          from: this.connectStore.basicActiveAccount,
          to: this.trxTo,
          value: this.trxValue,
        });
        this.errorNotify.showWarn({
          title: 'Transaction sent!',
          text: `You can <a href="https://ropsten.etherscan.io/tx/${trxHash}" target="_blank">inspect it</a> with etherscan.`,
        });
      } catch (e) {
        this.errorNotify.showError({
          title: 'Personal Web3 ETH Recover error',
          text: e,
        });
      }
    },
  },

  components: {
    VInput,
    FormField,
  },
};
</script>
