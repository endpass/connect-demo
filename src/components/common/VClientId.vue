<template>
  <div>
    <v-label label="Client ID of application" />
    <div class="v-client-id-container">
      <v-input
        v-model="clientId"
        placeholder="type client id here..."
        class="v-client-id-input"
        @keydown.enter="onSet"
      />
      <v-button
        is-inline
        :disabled="disabled"
        :is-loading="isLoading"
        skin="ghost"
        @click="onSet"
      >
        Set
      </v-button>
    </div>
  </div>
</template>

<script>
import VInput from '@endpass/ui/kit/VInput';
import VLabel from '@endpass/ui/kit/VLabel';
import VButton from '@endpass/ui/kit/VButton';

import { connectStore } from '@/store';

export default {
  name: 'VClientId',

  connectStore,

  data() {
    return {
      clientId: this.$options.connectStore.clientId,
      isLoading: false,
    };
  },

  computed: {
    disabled() {
      return this.clientId === this.$options.connectStore.clientId;
    },
  },

  methods: {
    async onSet() {
      if (this.disabled) {
        return;
      }
      this.isLoading = true;
      await this.$options.connectStore.setClientId(this.clientId);
    },
  },

  components: {
    VLabel,
    VInput,
    VButton,
  },
};
</script>

<style lang="scss">
.v-client-id-container {
  display: flex;
}

.v-client-id-input {
  min-width: 310px;
}
</style>
