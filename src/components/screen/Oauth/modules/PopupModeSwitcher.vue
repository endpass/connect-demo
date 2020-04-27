<template>
  <div class="popup-mode-switcher">
    <v-label label="OAuth open mode" />
    <div class="popup-mode-switcher-radio-list">
      <v-radio
        v-for="option in options"
        :key="option.val"
        :model-value="value"
        :value="option.val"
        :data-test-oauth-mode="option.val"
        class="popup-mode-switcher-radio"
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
.popup-mode-switcher-radio-list {
  display: flex;
}

.popup-mode-switcher-radio {
  flex-basis: auto;
  margin-right: 20px;
}
</style>
