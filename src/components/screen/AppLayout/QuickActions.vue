<template>
  <div class="quick-actions">
    <div class="navbar is-fixed-bottom">
      <router-link
        :to="{ name: 'Oauth' }"
        class="navbar-item button"
        active-class="is-active"
      >
        <span class="caption">Oauth</span>
      </router-link>
      <router-link
        :to="{ name: 'Provider' }"
        active-class="is-active"
        class="navbar-item button"
      >
        <span class="caption">Provider</span>
      </router-link>
      <router-link
        :to="{ name: 'CustomElement' }"
        active-class="is-active"
        class="navbar-item button"
      >
        <span class="caption">Custom Element</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'QuickActions',
};
</script>

<style lang="scss">
.quick-actions {
  //flex: 1;

  .navbar {
    background: $white;
    display: flex;
    justify-content: space-between;
    align-items: stretch;

    .navbar-item {
      span {
        display: block;
        margin: 0 auto;
      }
    }

    .button {
      border: none;

      .icon {
        margin: 0 auto;
      }
    }
  }
}
</style>
