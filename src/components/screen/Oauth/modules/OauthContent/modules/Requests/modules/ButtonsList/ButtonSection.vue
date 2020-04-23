<template>
  <div class="button-section">
    <div class="button-section-button">
      <v-button @click="onClick">
        {{ label }}
      </v-button>
    </div>
    <div class="button-section-details">
      <strong class="button-section-details-method">{{ method }}</strong>
      <v-tag skin="green">
        {{ path }}
      </v-tag>
    </div>
  </div>
</template>

<script>
import VButton from '@endpass/ui/kit/VButton';
import VTag from '@endpass/ui/kit/VTag';

export default {
  name: 'ButtonSection',

  props: {
    label: {
      type: String,
      required: true,
    },

    method: {
      type: String,
      required: true,
    },

    path: {
      type: String,
      required: true,
    },
  },

  methods: {
    onClick() {
      this.$emit('click');
    },
  },

  components: {
    VButton,
    VTag,
  },
};
</script>

<style lang="scss">
.button-section {
  box-shadow: inset 0 1px 0 var(--endpass-ui-color-grey-1);
  display: flex;
  padding: 16px 0;
}
.button-section-button {
  width: 204px;
  margin-right: 20px;
}
.button-section-details {
  flex-basis: auto;
  display: flex;
  align-items: center;
}
.button-section-details-method {
  margin-right: 20px;
}
@media screen and (max-width: 768px) {
  .button-section {
    display: block;
  }
  .button-section-details {
    margin-top: 10px;
  }
}
</style>
