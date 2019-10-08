<template>
  <div>
    <form-field
      label="Email:"
      data-test="endpass-oauth-user-email"
    >
      {{ user.email }}
    </form-field>
  </div>
</template>

<script>
import FormField from '@/components/common/FormField';

export default {
  name: 'Email',
  props: {
    user: {
      type: Object,
      default: () => {},
    },
  },

  components: { FormField },
};
</script>
