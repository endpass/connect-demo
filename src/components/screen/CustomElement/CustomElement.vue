<template>
  <div class="custom-element">
    <v-card class="custom-element-content">
      <form-field>
        <client-id class="custom-element-client-id" />
        <logout-button class="custom-element-logout" />
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
import ClientId from '@/components/modules/ClientId';

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
    ClientId,
  },
};
</script>

<style lang="scss" scoped>
.custom-element {
  position: relative;
}
.custom-element-logout {
  position: absolute;
  right: 25px;
  top: 48px;
}
</style>
