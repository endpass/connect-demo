<template>
  <section class="content">
    <p class="subtitle">
      Widget have only two interactive actions:
    </p>
    <div class="columns">
      <div class="column is-narrow">
        <v-button
          data-test="endpass-form-widget-hide"
          @click="onWidgetHide"
        >
          Hide Widget
        </v-button>
      </div>
      <div class="column is-narrow">
        <v-button
          data-test="endpass-form-widget-show"
          @click="onWidgetShow"
        >
          Show Widget
        </v-button>
      </div>
    </div>
  </section>
</template>

<script>
import VButton from '@endpass/ui/kit/VButton';
import { connectStore } from '@/store';

export default {
  name: 'FormWidget',

  connectStore,

  methods: {
    onWidgetHide() {
      this.$options.connectStore.unmountWidget();
    },

    onWidgetShow() {
      this.$options.connectStore.mountWidget();
    },
  },

  components: {
    VButton,
  },
};
</script>
