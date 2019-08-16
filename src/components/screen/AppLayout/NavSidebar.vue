<template>
  <div class="nav-sidebar">
    <div class="navbar-brand nav-sidebar-header">
      <a
        :class="{ 'is-active': navMenuActive }"
        class="navbar-burger"
        @click="toggleNavMenu"
      >
        <span />
        <span />
        <span />
      </a>
      <router-link class="logo logo-icon" to="/" exact>
        <img src="@/img/logo-light.png"
alt="Endpass Wallet"
/>
      </router-link>
    </div>

    <div
      :class="{ 'is-active': navMenuActive }"
      class="nav-sidebar-content navbar-menu"
    >
      <div
        class="nav-sidebar-item menu"
        data-test="nav-sidebar-menu"
        @click="closeNavMenu"
      >
        <ul class="menu-list">
          <li>
            <router-link active-class="is-active" class="nav-link" to="/" exact>
              Home
            </router-link>
          </li>
          <li>
            <router-link
              :to="{ name: 'Basic' }"
              active-class="is-active"
              class="nav-link"
            >
              Web3 provider
            </router-link>
          </li>
          <li>
            <router-link
              :to="{ name: 'Oauth' }"
              active-class="is-active"
              class="nav-link"
            >
              Oauth
            </router-link>
          </li>
        </ul>
      </div>

      <div class="nav-sidebar-footer" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavSidebar',

  data: () => ({
    navMenuActive: false,
  }),

  methods: {
    toggleNavMenu() {
      this.navMenuActive = !this.navMenuActive;
    },

    closeNavMenu() {
      this.navMenuActive = false;
    },
  },
};
</script>

<style lang="scss">
.nav-sidebar {
  height: 100%;
  background-color: $white;
  display: grid;
  grid-template-rows: auto 1fr;

  .nav-sidebar-item.menu {
    width: 100%;
    padding: 0;
    .menu-list {
      font-family: $heading-font-family;
      font-size: 1.2em;
      width: 100%;

      a.is-active {
        background-color: $purple;
      }
    }
    a.is-active .icon svg {
      fill: $white;
    }
  }

  .nav-sidebar-item {
    display: block;
    padding: 0.5em 0.75em;
  }

  .buttons .button {
    margin-right: 0.5em;
  }

  .menu-label {
    padding: 0 0.75em;
  }

  .nav-sidebar-header {
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 74px;
    padding: 0.5rem;

    .logo {
      flex: 1;
    }
  }
  .navbar-burger {
    margin-left: 0;
    margin-right: auto;
    span {
      height: 3px;
    }
  }

  .nav-sidebar-content {
    flex-direction: column;
    align-items: center;
  }

  .network-options {
    //background-color: $dark-blue;
    //color: $white;
  }
}
</style>
