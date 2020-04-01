<template>
  <div class="v-header-controls">
    <v-client-id class="v-header-controls-client-id" />
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
  align-items: flex-end;
}

.v-header-controls-logout {
  margin-left: auto;
  flex: 0 0 auto;
}

.v-header-controls-client-id {
  flex: 0 0 auto;
}
</style>
