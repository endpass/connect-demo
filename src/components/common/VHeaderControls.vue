<template>
  <div class="v-header-controls">
    <v-client-id />
    <v-logout-button class="v-header-controls-logout" />
  </div>
</template>

<script>
import VClientId from '@/components/common/VClientId';
import VLogoutButton from '@/components/common/VLogoutButton';

export default {
  name: 'VHeaderControls',

  components: {
    VLogoutButton,
    VClientId,
  },
};
</script>

<style lang="scss">
.v-header-controls {
  display: flex;
}

.v-header-controls-logout {
  margin-left: auto;
}
</style>
