<template>
  <div class="columns is-vcentered">
    <div class="column is-2">
      <v-button v-on="$listeners">
        {{ buttonLabel }}
      </v-button>
    </div>
    <div class="column">
      <div class="tags">
        <span
          v-for="scopeLabel in scopeLabels"
          :key="scopeLabel"
          class="tag"
        >{{
          scopeLabel
        }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import VButton from '@endpass/ui/kit/VButton';

export default {
  name: 'ButtonSection',

  props: {
    buttonLabel: {
      type: String,
      default: '',
    },
    scopeLabels: {
      type: Array,
      default: () => [],
    },
  },

  methods: {
    onClick() {
      this.$emit('click');
    },
  },

  components: {
    VButton,
  },
};
</script>
