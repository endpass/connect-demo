<template>
  <div>
    <v-label
      label="Paste in your application's Client ID to get started with the demo"
    />
    <div class="client-id-container">
      <v-input
        v-model="newClientId"
        placeholder="type client id here..."
        class="client-id-input"
        @keydown.enter="onConfirm"
      />
      <v-button
        is-inline
        :disabled="disabled"
        :is-loading="isLoading"
        @click="onConfirm"
      >
        Set
      </v-button>
    </div>
  </div>
</template>

<script>
import VInput from '@endpass/ui/kit/VInput';
import VLabel from '@endpass/ui/kit/VLabel';
import VButton from '@endpass/ui/kit/VButton';

export default {
  name: 'ClientIdView',

  props: {
    clientId: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      newClientId: this.$props.clientId,
      isLoading: false,
    };
  },

  computed: {
    disabled() {
      return this.clientId === this.newClientId;
    },
  },

  methods: {
    async onConfirm() {
      if (this.disabled) {
        return;
      }

      this.isLoading = true;
      this.$emit('confirm', this.newClientId);
    },
  },

  components: {
    VLabel,
    VInput,
    VButton,
  },
};
</script>

<style lang="scss">
.client-id-container {
  display: flex;
}

.client-id-input {
  min-width: 310px;
  flex: 0 0 auto;
}
</style>
