<template>
  <div class="v-client-id">
    <v-input
      v-model="clientId"
      label="Client id of application"
      placeholder="type client id here..."
      class="v-client-id-input"
    />
    <v-button
      is-inline
      :disabled="disabled"
      skin="ghost"
      @click="onSet"
    >
      Set
    </v-button>
  </div>
</template>

<script>
import VInput from '@endpass/ui/kit/VInput';
import VButton from '@endpass/ui/kit/VButton';

import { connectStore } from '@/store';

export default {
  name: 'VClientId',

  connectStore,

  data() {
    return {
      clientId: this.$options.connectStore.clientId,
    };
  },

  computed: {
    disabled() {
      return this.clientId === this.$options.connectStore.clientId;
    },
  },

  methods: {
    onSet() {
      this.$options.connectStore.setClientId(this.clientId);
      window.location.reload();
    },
  },

  components: {
    VInput,
    VButton,
  },
};
</script>

<style lang="scss">
.v-client-id {
  display: flex;
}

.v-client-id-input {
  min-width: 290px;
}
</style>
