<template>
  <section class="content">
    <div class="columns">
      <div class="column">
        <p>
          Network:
          <span
            class="tag"
            data-test="endpass-form-network-name"
          >{{
            connectStore.networkNameById
          }}</span>
        </p>
        <p>
          Account:
          <span
            class="tag"
            data-test="endpass-form-basic-active-account"
          >{{
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

    <div class="columns">
      <div class="column">
        <div class="form-field">
          <p class="form-field__label">
            Widget
          </p>
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
    </div>
  </section>
</template>

<script>
import { connectStore, web3Store } from '@/store';
import FormField from '@/components/common/FormField.vue';
import VTextarea from '@endpass/ui/components/VTextarea';
import ErrorNotify from '@/class/ErrorNotify';

export default {
  name: 'FormAccount',
  data() {
    return {
      fromMessage: '',
      signature: '',
      connectStore,
      errorNotify: new ErrorNotify(),
    };
  },

  computed: {
    hasActiveAccount() {
      return !!connectStore.basicActiveAccount;
    },
    canSign() {
      return this.hasActiveAccount && !!this.fromMessage;
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
    FormField,
  },
};
</script>
