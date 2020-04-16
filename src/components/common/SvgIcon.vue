<template>
  <svg
    :class="className"
    :width="width"
    :height="height"
    xmlns="http://www.w3.org/2000/svg"
  >
    <use :xlink:href="iconPath" xmlns:xlink="http://www.w3.org/1999/xlink" />
  </svg>
</template>

<script>
export default {
  name: 'SvgIcon',

  props: {
    name: {
      type: String,
      required: true,
    },

    width: {
      type: String,
      default: '100%',
    },

    height: {
      type: String,
      default: '100%',
    },
  },

  computed: {
    iconPath() {
      // eslint-disable-next-line global-require,import/no-dynamic-require
      let icon = require(`@/assets/icons/${this.name}.svg`);
      if (Object.prototype.hasOwnProperty.call(icon, 'default')) {
        icon = icon.default;
      }
      return icon.url;
    },

    className() {
      return `svg-icon svg-icon--${this.name}`;
    },
  },
};
</script>

<style>
.svg-icon {
  fill: currentColor;
}
</style>
