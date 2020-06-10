<template>
  <div>
    <v-label
      label="Paste in your application's Client ID to get started with the demo"
    />
    <div class="client-id-container">
      <v-input
        v-model="clientId"
        placeholder="type client id here..."
        class="client-id-input"
        @keydown.enter="onSet"
      />
      <v-button
        is-inline
        :disabled="disabled"
        :is-loading="isLoading"
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
  name: 'ClientIdView',

  connectStore,

  data() {
    return {
      clientId: this.$route.query.clientid,
      isLoading: false,
    };
  },

  computed: {
    disabled() {
      return this.clientId === this.$route.query.clientId;
    },
  },

  methods: {
    async onSet() {
      if (this.disabled) {
        return;
      }
      this.isLoading = true;

      this.$router.push({
        name: this.$route.name,
        query: {
          clientid: this.clientId,
        },
      });

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
.client-id-container {
  display: flex;
}

.client-id-input {
  min-width: 310px;
  flex: 0 0 auto;
}
</style>
