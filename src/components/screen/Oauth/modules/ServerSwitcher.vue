<template>
  <div class="server-switcher">
    <v-label label="Choose a server" />
    <div class="server-switcher-container">
      <v-select
        v-model="currentServer"
        :options="availableServers"
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

const AVAILABLE_SERVERS = [
  {
    text: 'https://connect-demo-dev.endpass.com',
    val: 'https://connect-demo-dev.endpass.com',
  },
  {
    text: 'https://connect-demo-staging.endpass.com',
    val: 'https://connect-demo-staging.endpass.com',
  },
  {
    text: 'https://endpass.github.io/connect-demo',
    val: 'https://endpass.github.io/connect-demo',
  },
];

export default {
  name: 'ServerSwitcher',

  connectStore,

  data() {
    return {
      currentServer: this.getCurrentServer(),
      isLoading: false,
    };
  },

  computed: {
    disabled() {
      return this.currentServer === this.getCurrentServer();
    },

    availableServers() {
      return AVAILABLE_SERVERS;
    },
  },

  methods: {
    onServerSwitch() {
      this.$emit('switch', this.currentServer);
    },

    getCurrentServer() {
      return `${window.location.origin}${window.location.pathname}`.replace(
        /\/$/,
        '',
      );
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
.server-switcher-container {
  display: flex;
  align-items: flex-start;
}

.server-switcher-selector {
  flex-basis: auto;
  margin-right: 0;
}
</style>
