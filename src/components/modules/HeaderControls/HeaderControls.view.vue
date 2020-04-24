<template>
  <div class="header-controls">
    <client-id class="header-controls-client-id" />
    <logout-button class="header-controls-logout" />
  </div>
</template>

<script>
import ClientId from './modules/ClientId';
import LogoutButton from './modules/LogoutButton';

export default {
  name: 'HeaderControls',

  components: {
    LogoutButton,
    ClientId,
  },
};
</script>

<style lang="scss">
.header-controls {
  display: flex;
  align-items: flex-end;
}

.header-controls-logout {
  margin-left: auto;
  flex: 0 0 auto;
}

.header-controls-client-id {
  flex: 0 0 auto;
}
</style>
