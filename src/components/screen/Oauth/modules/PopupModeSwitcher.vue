<template>
  <div>
    <v-label label="OAuth open mode" />
    <div class="popup-mode-switcher-radios">
      <v-radio
        :model-value="value"
        :value="$options.OPEN_MODES.IFRAME"
        data-test="endpass-oauth-mode-iframe"
        @change="onModeSelect"
      >
        Modal (using iframe)
      </v-radio>
      <v-radio
        :model-value="value"
        :value="$options.OPEN_MODES.POPUP"
        data-test="endpass-oauth-mode-popup"
        @change="onModeSelect"
      >
        Popup (using without iframe)
      </v-radio>
    </div>
  </div>
</template>

<script>
import VRadio from '@endpass/ui/kit/VRadio';
import VLabel from '@endpass/ui/kit/VLabel';
import { OPEN_MODES } from '@/components/screen/Oauth/Oauth.constants';

export default {
  name: 'PopupModeSwitcher',

  OPEN_MODES,

  props: {
    value: {
      type: String,
      required: true,
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
