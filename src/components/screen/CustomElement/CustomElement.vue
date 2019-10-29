<template>
  <div class="home">
    <div class="section">
      <div class="card">
        <div class="card-content">
          <div class="is-inline-block">
            <v-button data-test="endpass-sign-in-button" @click="onOpen">
              Open account
            </v-button>
          </div>
          <div id="endpass-form" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-console */

import VButton from '@endpass/ui/kit/VButton';
import { connectStore } from '@/store';

export default {
  name: 'CustomElement',

  methods: {
    async onOpen() {
      await connectStore.openAccount();
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
      console.log('dialog is open');
    });

    node.addEventListener('close', () => {
      console.log('dialog is close');
    });
  },

  components: { VButton },
};
</script>
