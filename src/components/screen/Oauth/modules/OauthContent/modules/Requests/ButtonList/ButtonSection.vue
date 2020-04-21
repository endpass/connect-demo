<template>
  <div class="columns is-vcentered">
    <div class="column is-2">
      <v-button @click="onClick">
        {{ buttonLabel }}
      </v-button>
    </div>
    <div class="column">
      <slot />
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
