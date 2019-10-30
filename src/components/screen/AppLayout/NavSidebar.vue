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
      <router-link
        class="logo logo-icon"
        to="/"
        exact
      >
        <v-logo :is-white="false" />
      </router-link>
    </div>

    <v-super-menu-section>
      <ul class="nav-sidebar-list">
        <li>
          <v-super-menu-control
            icon="permission"
            :is-active="isActiveRoute('Oauth')"
          >
            <router-link
              :to="{ name: 'Oauth' }"
              active-class="is-active"
              exact
            >
              Oauth
            </router-link>
          </v-super-menu-control>
        </li>
        <li>
          <v-super-menu-control
            icon="action"
            :is-active="isActiveRoute('Provider')"
          >
            <router-link
              :to="{ name: 'Provider' }"
              active-class="is-active"
            >
              Web3 provider
            </router-link>
          </v-super-menu-control>
        </li>
        <li>
          <v-super-menu-control
            icon="apps"
            :is-active="isActiveRoute('CustomElement')"
          >
            <router-link
              :to="{ name: 'CustomElement' }"
              active-class="is-active"
            >
              Custom element
            </router-link>
          </v-super-menu-control>
        </li>
      </ul>
    </v-super-menu-section>
  </div>
</template>

<script>
import VLogo from '@endpass/ui/kit/VLogo';
import VSuperMenuSection from '@endpass/ui/kit/VSuperMenuSection';
import VSuperMenuControl from '@endpass/ui/kit/VSuperMenuControl';

export default {
  name: 'NavSidebar',

  data: () => ({
    activeRouteName: null,
    navMenuActive: false,
  }),

  methods: {
    isActiveRoute(routeName) {
      return this.activeRouteName === routeName;
    },

    toggleNavMenu() {
      this.navMenuActive = !this.navMenuActive;
    },

    closeNavMenu() {
      this.navMenuActive = false;
    },
  },

  mounted() {
    /**
     * Hack, because layout places upper than router-view component and it can't
     * react on any changes in computed
     */
    this.$router.afterEach(to => {
      this.activeRouteName = to.name;
    });
  },

  components: {
    VLogo,
    VSuperMenuSection,
    VSuperMenuControl,
  },
};
</script>

<style lang="scss">
.nav-sidebar {
  height: 100%;
  background-color: $white;
  display: grid;
  grid-template-rows: auto 1fr;

  .nav-sidebar-header {
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 74px;
    padding: 16px;
  }

  .navbar-burger {
    margin-left: 0;
    margin-right: auto;

    span {
      height: 3px;
    }
  }
}

.nav-sidebar {
  position: sticky;
  position: -webkit-sticky;
  top: 78px;
}

.nav-sidebar-list {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
