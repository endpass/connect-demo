<template>
  <div>
    <form-field>
      <v-button
        is-inline
        data-test="endpass-oauth-back-button"
        @click="onBack"
      >
        Back
      </v-button>
    </form-field>
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
import FormField from '@/components/common/FormField';

export default {
  name: 'OauthControls',

  methods: {
    onBack() {
      this.$emit('back');
    },

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
