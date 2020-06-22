<template>
  <div
    :id="id"
    class="app-layout"
  >
    <div class="app-layout-bg-header" />
    <div class="app-layout-bg-footer" />
    <div class="app-layout-area">
      <header class="app-layout-header">
        <app-header />
      </header>

      <nav class="app-layout-nav">
        <nav-sidebar />
      </nav>

      <main class="app-layout-content">
        <router-view />
      </main>
    </div>
    <notifications />
  </div>
</template>

<script>
import Notifications from '@/components/modules/Notifications';
import NavSidebar from '@/components/modules/NavSidebar';
import AppHeader from './AppHeader';

export default {
  name: 'AppLayout',

  props: {
    id: {
      type: String,
      required: true,
    },
  },

  components: {
    AppHeader,
    Notifications,
    NavSidebar,
  },
};
</script>

<style lang="scss" scoped>
.app-layout {
  background-color: var(--endpass-ui-color-grey-1);
  position: relative;
  min-height: 100vh;
}

.app-layout-area {
  position: relative;
  display: grid;
  grid-gap: 30px;
  grid-template-columns: 200px auto auto;
  grid-template-areas:
    'header  header  header'
    'nav content content';
  max-width: 1080px;
  margin: 0 auto;
}

.app-layout-bg-header {
  position: absolute;
  width: 276px;
  height: 244px;
  background-image: url(../../../assets/bg/bg-header.svg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.app-layout-bg-footer {
  position: absolute;
  width: 276px;
  height: 244px;
  bottom: 0;
  right: 0;
  background-image: url(../../../assets/bg/bg-footer.svg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.app-layout-header {
  grid-area: header;
  margin-top: 30px;
  margin-bottom: 42px;
}

.app-layout-content {
  grid-area: content;
  margin-right: 30px;
}

.app-layout-nav {
  grid-area: nav;
  margin-left: 30px;
}

@media screen and (max-width: 1023px) {
  .app-layout-area {
    grid-template-columns: 100%;
    grid-template-rows: 2fr 2fr auto;
    grid-template-areas: 'header' 'nav' 'content';
  }

  .app-layout-nav,
  .app-layout-content {
    margin: 0;
  }
}
</style>
