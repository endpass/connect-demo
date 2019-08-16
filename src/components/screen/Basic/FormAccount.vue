<template>
  <section class="content">
    <div class="columns">
      <div class="column">
        <p>
          Network:
          <span class="tag"
data-test="endpass-form-network-name">{{
            connectStore.networkNameById
          }}</span>
        </p>
        <p>
          Account:
          <span class="tag"
data-test="endpass-form-basic-active-account">{{
            connectStore.basicActiveAccount
          }}</span>
        </p>
        <div class="columns">
          <div class="column is-narrow">
            <button
              class="button is-primary"
              data-test="endpass-form-open-account"
              @click="onOpenAccount"
            >
              Open Account
            </button>
          </div>
          <div class="column is-narrow">
            <button
              class="button is-danger"
              data-test="endpass-form-sign-out-button"
              @click="onLogout"
            >
              Sign out
            </button>
          </div>
        </div>
      </div>
    </div>

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

    <form-field label="Widget">
      <div class="columns">
        <div class="column">
          <div class="columns">
            <div class="column is-narrow">
              <button
                class="button is-primary"
                data-test="endpass-form-widget-hide"
                @click="onWidgetHide"
              >
                Hide Widget
              </button>
            </div>
            <div class="column is-narrow">
              <button
                class="button is-primary"
                data-test="endpass-form-widget-show"
                @click="onWidgetShow"
              >
                Show Widget
              </button>
            </div>
          </div>
        </div>
      </div>
    </form-field>
  </section>
</template>

<script>
import VTextarea from '@endpass/ui/components/VTextarea';
import VInput from '@endpass/ui/components/VInput';
import { connectStore, web3Store } from '@/store';
import FormField from '@/components/common/FormField.vue';
import ErrorNotify from '@/class/ErrorNotify';

export default {
  name: 'FormAccount',

  data() {
    return {
      fromMessage: '',
      signature: '',
      trxTo: '',
      trxValue: 0,
      trxSignature: '',
      errorNotify: new ErrorNotify(),
      connectStore,
    };
  },

  computed: {
    hasActiveAccount() {
      return !!connectStore.basicActiveAccount;
    },

    canSign() {
      return this.hasActiveAccount && !!this.fromMessage;
    },

    isRopsten() {
      return this.connectStore.basicActiveNet === '3';
    },

    isValidTrxReceiverAddress() {
      return /^(0x)[a-z0-9]{40,}/i.test(this.trxTo);
    },
  },

  methods: {
    async onWeb3EthSign() {
      try {
        this.signature = await web3Store.EthSign({
          from: connectStore.basicActiveAccount,
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
          from: connectStore.basicActiveAccount,
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

    async onWeb3SendTransaction() {
      try {
        const trxHash = await web3Store.EthSendTransaction({
          from: connectStore.basicActiveAccount,
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
          text: e.toString(),
        });
      }
    },

    async onOpenAccount() {
      await connectStore.openAccount();
    },

    async onLogout() {
      await connectStore.logout();
    },

    onWidgetHide() {
      connectStore.unbindWidgetEvents();
      connectStore.connectInstance.unmountWidget();
    },

    onWidgetShow() {
      connectStore.connectInstance.mountWidget();
      connectStore.bindWidgetEvents();
    },
  },

  components: {
    VTextarea,
    VInput,
    FormField,
  },
};
</script>
