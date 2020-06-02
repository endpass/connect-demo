<template>
  <div class="nav-sidebar">
    <ul class="nav-sidebar-list">
      <li>
        <router-link
          v-slot="{ isActive, navigate }"
          :to="{ name: 'Oauth', query: queryWithClientId }"
          exact
        >
          <v-button
            :skin="getSkin(isActive)"
            @click="navigate"
          >
            <v-svg-icon
              slot="iconBefore"
              width="18px"
              height="18px"
              name="keypass"
            />
            Oauth
          </v-button>
        </router-link>
      </li>
      <li>
        <router-link
          v-slot="{ isActive, href, navigate }"
          :to="{ name: 'Examples', query: queryWithClientId }"
        >
          <v-button
            :skin="getSkin(isActive)"
            @click="navigate"
          >
            <v-svg-icon
              slot="iconBefore"
              width="18px"
              height="18px"
              name="file-view"
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
import VSvgIcon from '@endpass/ui/kit/VSvgIcon';

export default {
  name: 'NavSidebarView',

  data: () => ({
    navMenuActive: false,
  }),

  computed: {
    queryWithClientId() {
      const { clientid } = this.$route.query;

      if (clientid) {
        return { clientid };
      }

      return {};
    },
  },

  methods: {
    getSkin(isActive) {
      return isActive ? 'tertiary' : 'ghost';
    },
  },

  components: {
    VSvgIcon,
    VButton,
  },
};
</script>

<style lang="scss">
.nav-sidebar-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-sidebar-list li {
  margin-bottom: 8px;
}
</style>
