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
          <router-link
            v-slot="{ isActive, href }"
            :to="{ name: 'Oauth' }"
            exact
          >
            <v-super-menu-control
              icon="permission"
              :href="href"
              :is-active="isActive"
            >
              Oauth
            </v-super-menu-control>
          </router-link>
        </li>
        <!--        <li>-->
        <!--          <router-link-->
        <!--            v-slot="{ isActive, href }"-->
        <!--            :to="{ name: 'CustomElement' }"-->
        <!--          >-->
        <!--            <v-super-menu-control-->
        <!--              icon="apps"-->
        <!--              :href="href"-->
        <!--              :is-active="isActive"-->
        <!--            >-->
        <!--              Custom element-->
        <!--            </v-super-menu-control>-->
        <!--          </router-link>-->
        <!--        </li>-->
        <li>
          <router-link
            v-slot="{ isActive, href }"
            :to="{ name: 'Examples' }"
          >
            <v-super-menu-control
              icon="menu"
              :href="href"
              :is-active="isActive"
            >
              Examples
            </v-super-menu-control>
          </router-link>
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
    navMenuActive: false,
  }),

  methods: {
    toggleNavMenu() {
      this.navMenuActive = !this.navMenuActive;
    },
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
