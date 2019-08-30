<template>
  <section class="content">
    <form-field label="Widget">
      <div class="columns">
        <div class="column">
          <div class="columns">
            <div class="column is-narrow">
              <button
                class="button is-primary"
                data-test="endpass-form-widget-hide"
                @click="onWidgetHide"
              >
                Hide Widget
              </button>
            </div>
            <div class="column is-narrow">
              <button
                class="button is-primary"
                data-test="endpass-form-widget-show"
                @click="onWidgetShow"
              >
                Show Widget
              </button>
            </div>
          </div>
        </div>
      </div>
    </form-field>
  </section>
</template>

<script>
import { connectStore } from '@/store';
import FormField from '@/components/common/FormField.vue';

export default {
  name: 'FormWidget',

  data() {
    return {
      connectStore,
    };
  },

  methods: {
    onWidgetHide() {
      this.connectStore.unmountWidget();
    },

    onWidgetShow() {
      this.connectStore.mountWidget();
    },
  },

  components: {
    FormField,
  },
};
</script>
