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

.header-controls-client-id {
  flex: 1 1 auto;
  margin-right: 16px;
}

.header-controls-logout {
  flex: 0 0 auto;
}
</style>
