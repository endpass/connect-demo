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
  </section>
</template>

<script>
import { connectStore } from '@/store';

export default {
  name: 'FormInfo',

  data() {
    return {
      connectStore,
    };
  },

  methods: {
    async onOpenAccount() {
      await this.connectStore.openAccount();
    },

    async onLogout() {
      await this.connectStore.logout();
    },
  },
};
</script>
