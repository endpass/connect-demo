<template>
  <div
    :id="id"
    class="app-container"
  >
    <header class="app-header">
      <info-bar class="app-section" />
    </header>

    <nav class="app-nav">
      <nav-sidebar />
    </nav>

    <main class="app-content">
      <div class>
        <div class="notify-container">
          <notifications
            :speed="500"
            :duration="5000"
            width="auto"
            position="top center"
            data-test="app-notification"
            classes="notification app-notification"
          />
        </div>

        <div class="main app-content app-section">
          <router-view />
        </div>
      </div>
    </main>

    <quick-actions class="is-hidden-desktop" />
    <app-footer class="is-hidden-touch" />
    <slot name="modal" />
  </div>
</template>

<script>
import NavSidebar from '@/components/screen/AppLayout/NavSidebar';
import InfoBar from '@/components/screen/AppLayout/InfoBar';
import QuickActions from '@/components/screen/AppLayout/QuickActions';
import AppFooter from '@/components/screen/AppLayout/AppFooter';

export default {
  name: 'AppLayout',

  props: {
    id: {
      type: String,
      required: true,
    },
  },

  components: {
    NavSidebar,
    InfoBar,
    QuickActions,
    AppFooter,
  },
};
</script>

<style lang="scss">
.main {
  background: $light-grey;
  height: 100%;
}

.app-container {
  height: 100vh;
  width: 100vw;

  display: grid;
  // grid-template-rows: 40px 300px auto minmax(auto, 60px);
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr auto;

  grid-template-areas: 'nav header' 'nav main' 'nav footer';

  background: $light-grey;
  overflow-x: hidden;

  // Direct child of app container, a major element
  & > .app-header {
    grid-area: header;
  }

  & > .app-nav {
    grid-area: nav;
  }

  & > .app-content {
    grid-area: main;
  }

  & > .app-footer {
    grid-area: footer;
  }

  .app-section {
  }
}

// Responsive layout on mobile/tablet
@media screen and (max-width: 1023px) {
  .app-container {
    grid-template-columns: 100%;
    grid-template-rows: 2fr 2fr auto 1fr;
    grid-template-areas: 'nav' 'header' 'main' 'footer';
  }
}
</style>
