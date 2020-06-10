<template>
  <v-button
    class="logout-button"
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
  name: 'LogoutButtonView',

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
