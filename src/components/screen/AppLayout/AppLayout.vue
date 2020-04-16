<template>
  <div
    :id="id"
    class="app-layout"
  >
    <header class="app-layout-header">
      <app-header />
    </header>

    <nav class="app-layout-nav">
      <nav-sidebar />
    </nav>

    <main class="app-layout-content">
      <router-view />
    </main>

    <footer class="app-layout-footer" />

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
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 200px auto auto;
  grid-template-areas:
    'header  header  header'
    'nav content content'
    'footer  footer  footer';
}

.app-layout-header {
  grid-area: header;
  margin: 30px;
}

.app-layout-content {
  grid-area: content;
}

.app-layout-nav {
  grid-area: nav;
}

.app-layout-footer {
  height: 50px;
  grid-area: footer;
}

// Responsive layout on mobile/tablet
@media screen and (max-width: 1023px) {
  .app-layout {
    grid-template-columns: 100%;
    grid-template-rows: 2fr 2fr auto 1fr;
    grid-template-areas: 'header' 'nav' 'content' 'footer';
  }
}
</style>
