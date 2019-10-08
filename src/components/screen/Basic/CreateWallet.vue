<template>
  <section class="content">
    <form-field label="Create wallet">
      <div class="columns">
        <div class="column">
          <div class="columns">
            <div class="column is-narrow">
              <button
                class="button is-primary"
                data-test="endpass-form-widget-hide"
                @click="onCreate"
              >
                Create wallet account
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
  name: 'CreateWallet',

  data() {
    return {
      connectStore,
    };
  },

  methods: {
    async onCreate() {
      await this.connectStore.createWallet();
    },
  },

  components: {
    FormField,
  },
};
</script>
