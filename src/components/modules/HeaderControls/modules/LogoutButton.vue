<template>
  <v-button
    class="v-logout-button"
    skin="ghost-error"
    is-inline
    @click="onLogout"
  >
    Logout
  </v-button>
</template>

<script>
import VButton from '@endpass/ui/kit/VButton';

import { connectStore } from '@/store';

export default {
  name: 'LogoutButton',

  connectStore,

  methods: {
    async onLogout() {
      this.isLoading = true;
      await this.$options.connectStore.logout();
    },
  },

  components: {
    VButton,
  },
};
</script>
