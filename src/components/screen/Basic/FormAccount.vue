<template>
  <section class="content">
    <div class="columns">
      <div class="column">
        <p class="subtitle">
          Account
        </p>
        <p>
          {{ connectStore.basicActiveAccount }}
        </p>
        <div class="columns">
          <div class="column is-narrow">
            <a
              class="button is-primary"
              data-test="endpass-form-open-account"
              @click="onOpenAccount"
            >
              Open Account
            </a>
          </div>
          <div class="column is-narrow">
            <a
              class="button is-danger"
              data-test="endpass-form-sign-out-button"
              @click="onLogout"
            >
              Sign out
            </a>
          </div>
        </div>
      </div>
    </div>

    <form-field label="Data">
      <div class="columns">
        <div class="column is-one-quarter">
          <v-textarea
            v-model="fromMessage"
            :disabled="connectStore.activeAccount"
            placeholder="Enter message to sign..."
            data-test="endpass-form-message-input"
          />
        </div>
        <div class="column is-one-quarter">
          <v-textarea
            v-model="signature"
            readonly
            placeholder="Signed data..."
            data-test="endpass-form-signature-input"
          />
        </div>
      </div>
    </form-field>

    <form-field label="Sign & Recover">
      <div class="columns">
        <div class="column is-narrow">
          <a
            class="button is-primary"
            :disabled="!!connectStore.activeAccount"
            data-test="endpass-form-sign-button"
            @click="onWeb3EthSign"
          >
            web3.eth.sign
          </a>
        </div>
        <div class="column is-narrow">
          <a
            class="button is-primary"
            :disabled="!fromMessage"
            data-test="endpass-form-personal-sign-button"
            @click="onWeb3PersonalSign"
          >
            web3.eth.personal.sign
          </a>
        </div>
        <div class="column is-narrow">
          <a
            class="button is-primary"
            :disabled="!signature"
            data-test="endpass-form-personal-recover-button"
            @click="onWeb3PersonRecover"
          >
            web3.eth.personal.ecRecover
          </a>
        </div>
      </div>
    </form-field>

    <div class="columns">
      <div class="column">
        <form-field label="Widget">
          <div class="columns">
            <div class="column is-narrow">
              <a
                class="button is-primary"
                data-test="endpass-form-widget-hide"
                @click="onWidgetHide"
              >
                Hide Widget
              </a>
            </div>
            <div class="column is-narrow">
              <a
                class="button is-primary"
                data-test="endpass-form-widget-show"
                @click="onWidgetShow"
              >
                Show Widget
              </a>
            </div>
          </div>
        </form-field>
      </div>
    </div>
  </section>
</template>

<script>
import { connectStore, web3Store } from '@/store';
import { createErrorController } from '@/controllers';
import FormField from '@/components/common/FormField.vue';
import VTextarea from '@endpass/ui/components/VTextarea';

export default {
  name: 'FormAccount',
  data() {
    return {
      fromMessage: '',
      signature: '',
      connectStore,
      errorController: createErrorController(),
    };
  },

  methods: {
    async onWeb3EthSign() {
      try {
        this.signature = await web3Store.EthSign({
          from: connectStore.basicActiveAccount,
          message: this.fromMessage,
        });
      } catch (e) {
        this.errorController.showError({
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
        this.errorController.showError({
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
        this.errorController.showWarn({
          title: 'Recovered!',
          text: recoveredText,
        });
      } catch (e) {
        this.errorController.showError({
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
      connectStore.connectInstance.unmountWidget();
    },
    onWidgetShow() {
      connectStore.connectInstance.mountWidget();
    },
  },

  components: {
    VTextarea,
    FormField,
  },
};
</script>
