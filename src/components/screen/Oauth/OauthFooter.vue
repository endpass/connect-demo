<template>
  <div>
    <form-field>
      <button class="button" @click="onBack">
        Back
      </button>
    </form-field>
    <form-field>
      <button class="button is-danger" @click="onClear">
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
