<template>
  <div class="content-loader">
    <slot />
    <div
      v-if="isLoading"
      data-test="endpass-app-loader"
      class="content-loader-overlay"
    >
      <span class="content-loader-label">
        <slot name="label" />
      </span>
      <v-progress-circle
        progress="25"
        line-thickness="1"
      />
    </div>
  </div>
</template>

<script>
import VProgressCircle from '@endpass/ui/kit/VProgressCircle';

export default {
  name: 'ContentLoaderView',

  props: {
    isLoading: {
      type: Boolean,
      default: false,
    },
  },

  components: {
    VProgressCircle,
  },
};
</script>

<style lang="scss">
.content-loader-overlay {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 100;
}
.content-loader-label {
  color: var(--endpass-ui-color-white);
}
</style>
