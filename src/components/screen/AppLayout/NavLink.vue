<template>
  <a :href="to" :class="cssClass">
    <slot />
  </a>
</template>

<script>
export default {
  name: 'NavLink',
  props: {
    to: {
      type: String,
      default: '',
    },
    activeClass: {
      type: String,
      default: '',
    },
  },

  data: () => ({
    navMenuActive: false,
  }),

  computed: {
    cssClass() {
      return {
        [this.activeClass]: window.location.pathname === this.to,
      };
    },
  },
};
</script>
