<template>
  <div>
    <v-label label="OAuth open mode" />
    <div class="popup-mode-switcher-radios">
      <v-radio
        v-for="option in options"
        :key="option.val"
        :model-value="value"
        :value="option.val"
        :data-test-oauth-mode="option.val"
        @change="onModeSelect"
      >
        {{ option.text }}
      </v-radio>
    </div>
  </div>
</template>

<script>
import VRadio from '@endpass/ui/kit/VRadio';
import VLabel from '@endpass/ui/kit/VLabel';

export default {
  name: 'PopupModeSwitcher',

  props: {
    value: {
      type: String,
      required: true,
    },

    options: {
      type: Array,
      default: () => [],
    },
  },

  methods: {
    onModeSelect(mode) {
      this.$emit('switch', mode);
    },
  },

  components: {
    VLabel,
    VRadio,
  },
};
</script>
<style lang="scss">
.popup-mode-switcher {
}

.popup-mode-switcher-radios {
  display: flex;
}

.popup-mode-switcher-radios > * {
  flex-basis: auto;
  margin-right: 20px;
}
</style>
