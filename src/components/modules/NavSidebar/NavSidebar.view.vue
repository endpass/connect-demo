<template>
  <div class="nav-sidebar">
    <ul class="nav-sidebar-list">
      <li>
        <router-link
          v-slot="{ isActive, navigate }"
          :to="{ name: 'Oauth' }"
          exact
        >
          <v-button
            :skin="getSkin(isActive)"
            @click="navigate"
          >
            <svg-icon
              slot="iconBefore"
              width="18px"
              height="18px"
              name="oauth"
            />
            Oauth
          </v-button>
        </router-link>
      </li>
      <li>
        <router-link
          v-slot="{ isActive, href, navigate }"
          :to="{ name: 'Examples' }"
        >
          <v-button
            :skin="getSkin(isActive)"
            @click="navigate"
          >
            <svg-icon
              slot="iconBefore"
              width="18px"
              height="18px"
              name="examples"
            />
            Examples
          </v-button>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import VButton from '@endpass/ui/kit/VButton';
import SvgIcon from '@/components/common/SvgIcon';

export default {
  name: 'NavSidebarView',

  data: () => ({
    navMenuActive: false,
  }),

  methods: {
    getSkin(isActive) {
      return isActive ? 'tertiary' : 'ghost';
    },
  },

  components: {
    SvgIcon,
    VButton,
  },
};
</script>

<style lang="scss">
.nav-sidebar {
}

.nav-sidebar-list {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
