<template>
  <div>
    <form-field
      label="Email:"
      data-test="endpass-oauth-user-email"
    >
      {{ data.email }}
    </form-field>
  </div>
</template>

<script>
import FormField from '@/components/common/FormField';

export default {
  name: 'UserDetails',
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },

  components: { FormField },
};
</script>
