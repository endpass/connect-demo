<template>
  <div class="host-switcher">
    <v-label label="Choose a server" />
    <div class="host-switcher-container">
      <v-select
        v-model="currentHost"
        :options="availableHostList"
        class="host-switcher-selector"
      />
      <v-button
        is-inline
        :disabled="disabled"
        :is-loading="isLoading"
        class="host-switcher-button"
        @click="onSwitch"
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

const AVAILABLE_HOST_LIST = [
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
  name: 'HostSwitcherView',

  data() {
    return {
      currentHost: this.getCurrentHost(),
      isLoading: false,
    };
  },

  computed: {
    disabled() {
      return this.currentHost === this.getCurrentHost();
    },

    availableHostList() {
      return AVAILABLE_HOST_LIST;
    },
  },

  methods: {
    onSwitch() {
      this.$emit('switch', this.currentHost);
    },

    getCurrentHost() {
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
.host-switcher-container {
  display: flex;
  align-items: flex-start;
}

.host-switcher-selector {
  flex-basis: auto;
  margin-right: 0;
}
</style>
