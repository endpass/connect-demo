<template>
  <theme-provider>
    <app-layout id="app" />
  </theme-provider>
</template>

<script>
import ThemeProvider from '@endpass/ui/kit/ThemeProvider';
import AppLayout from '@/components/modules/AppLayout';

export default {
  name: 'App',

  components: {
    AppLayout,
    ThemeProvider,
  },
};
</script>
