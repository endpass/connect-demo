<template>
  <div class="server-switcher">
    <v-label label="Choose a server" />
    <div class="server-switcher-container">
      <v-select
        v-model="currentServer"
        :options="options"
        class="server-switcher-selector"
      />
      <v-button
        is-inline
        :disabled="disabled"
        :is-loading="isLoading"
        class="server-switcher-button"
        @click="onServerSwitch"
      >
        Set
      </v-button>
    </div>
  </div>
</template>

<script>
import VSelect from '@endpass/ui/kit/VSelect';
import VLabel from '@endpass/ui/kit/VLabel';
import VButton from '@endpass/ui/kit/VButton';

import { connectStore } from '@/store';

export default {
  name: 'PopupModeSwitcher',

  connectStore,

  props: {
    options: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {
      currentServer: this.$options.connectStore.server,
      isLoading: false,
    };
  },

  computed: {
    disabled() {
      return this.currentServer === this.$options.connectStore.server;
    },
  },

  methods: {
    onServerSwitch() {
      this.$emit('switch', this.currentServer);
    },
  },

  components: {
    VLabel,
    VSelect,
    VButton,
  },
};
</script>

<style lang="scss" scoped>
.server-switcher {
  // display: flex;
}

.server-switcher-container {
  display: flex;
}

.server-switcher-selector {
  flex-basis: auto;
  margin-right: 0;
}
</style>
