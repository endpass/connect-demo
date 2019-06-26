<template>
  <div>
    <form-field>
      <a class="button" @click="onBack">
        Back
      </a>
    </form-field>
    <form-field>
      <a class="button is-danger" @click="onLogout">
        Logout
      </a>
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

    async onLogout() {
      this.$emit('logout');
    },
  },

  components: {
    FormField,
  },
};
</script>
