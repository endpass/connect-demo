<template>
  <footer class="app-footer section is-narrow">
    <div class="container">
      <div class="footer-links level is-mobile">
        <div class="level-left">
          <p class="level-item">
&copy; {{ year }} Endpass, Inc
</p>
          <p class="level-item">
            <a target="_blank" href="https://help.endpass.com">
              Support
            </a>
          </p>
        </div>
        <div class="level-right" />
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  data: () => ({
    year: new Date().getFullYear(),
  }),
};
</script>

<style lang="scss">
.app-footer {
  font-size: 0.85rem;
  color: $dark-grey;

  a {
    color: $dark-grey;

    &:hover {
      color: $primary;
    }
  }

  .icon {
    vertical-align: middle;
  }

  .disclaimer {
    margin-bottom: 0.5rem;
  }
}
</style>
