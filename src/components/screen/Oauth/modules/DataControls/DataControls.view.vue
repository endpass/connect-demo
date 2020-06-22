<template>
  <div>
    <form-field>
      <v-button
        skin="error"
        is-inline
        data-test="endpass-oauth-clear-token-button"
        @click="onClear"
      >
        Clear Token
      </v-button>
    </form-field>
  </div>
</template>

<script>
import VButton from '@endpass/ui/kit/VButton';
import FormField from '@/components/modules/FormField';

export default {
  name: 'DataControlsView',

  methods: {
    onClear() {
      // eslint-disable-next-line no-alert
      const res = window.confirm('Are you sure want to clear token?');
      if (!res) {
        return;
      }
      this.$emit('clear');
    },
  },

  components: {
    FormField,
    VButton,
  },
};
</script>
