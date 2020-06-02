<template>
  <div class="custom-element">
    <v-card class="custom-element-content">
      <form-field>
        <client-id class="custom-element-client-id" />
        <logout-button class="header-controls-logout" />
      </form-field>

      <v-button
        is-inline
        data-test="endpass-sign-in-button"
        @click="onClick"
      >
        Login again
      </v-button>
      <div id="endpass-form" />
    </v-card>
  </div>
</template>

<script>
/* eslint-disable no-console */

import VButton from '@endpass/ui/kit/VButton';
import VCard from '@endpass/ui/kit/VCard';
import { connectStore } from '@/store';
import FormField from '@/components/modules/FormField';
import LogoutButton from '@/components/modules/LogoutButton';

export default {
  name: 'CustomElement',

  methods: {
    async onClick() {
      await connectStore.customAction();
    },
  },

  async mounted() {
    const elementSelector = '#endpass-form';
    await connectStore.initConnect({
      widget: false,
      element: elementSelector,
    });

    const node = document.querySelector(elementSelector);
    node.addEventListener('open', () => {
      console.log('open');
    });

    node.addEventListener('close', () => {
      console.log('close');
    });
  },

  components: {
    FormField,
    VCard,
    VButton,
    LogoutButton,
  },
};
</script>

<style lang="scss" scoped>
.custom-element {
  position: relative;
}
</style>
