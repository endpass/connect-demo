<template>
  <div>
    <form-field>
      <div class="is-inline-block">
        <v-button
          data-test="endpass-oauth-back-button"
          @click="onBack"
        >
          Back
        </v-button>
      </div>
    </form-field>
    <form-field>
      <div class="is-inline-block">
        <v-button
          skin="error"
          data-test="endpass-oauth-clear-token-button"
          @click="onClear"
        >
          Clear Token
        </v-button>
      </div>
    </form-field>
  </div>
</template>

<script>
import VButton from '@endpass/ui/kit/VButton';
import FormField from '@/components/common/FormField';

export default {
  name: 'OauthFooter',

  methods: {
    onBack() {
      this.$emit('back');
    },

    async onClear() {
      this.$emit('clear');
    },
  },

  components: {
    FormField,
    VButton,
  },
};
</script>
