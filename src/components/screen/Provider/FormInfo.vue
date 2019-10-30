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
            <v-button
              is-inline
              data-test="endpass-form-open-account"
              @click="onOpenAccount"
            >
              Open Account
            </v-button>
          </div>
          <div class="column is-narrow">
            <v-button
              is-inline
              skin="error"
              data-test="endpass-form-sign-out-button"
              @click="onLogout"
            >
              Sign out
            </v-button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import VButton from '@endpass/ui/kit/VButton';
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
      // eslint-disable-next-line no-alert
      const res = window.confirm('Are you sure want to logout?');
      if (!res) {
        return;
      }

      await this.connectStore.logout();
    },
  },

  components: {
    VButton,
  },
};
</script>
