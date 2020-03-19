<template>
  <div class="home">
    <v-content>
      <form-field>
        <v-client-id />
      </form-field>

      <v-button
        is-inline
        data-test="endpass-sign-in-button"
        @click="onClick"
      >
        Login again
      </v-button>
      <div id="endpass-form" />
    </v-content>
  </div>
</template>

<script>
/* eslint-disable no-console */

import VButton from '@endpass/ui/kit/VButton';
import { connectStore } from '@/store';
import VContent from '@/components/common/VContent';
import VClientId from '@/components/common/VClientId';
import FormField from '@/components/common/FormField';

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

  components: { FormField, VClientId, VContent, VButton },
};
</script>
