<template>
  <div>
    <form-field>
      <button
        class="button"
        data-test="endpass-oauth-back-button"
        @click="onBack"
      >
        Back
      </button>
    </form-field>
    <form-field>
      <button
        class="button is-danger"
        data-test="endpass-oauth-clear-token-button"
        @click="onClear"
      >
        Clear Token
      </button>
    </form-field>
  </div>
</template>

<script>
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
  },
};
</script>
