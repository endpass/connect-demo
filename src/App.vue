<template>
  <v-page-loader
    v-if="isLoading"
    :is-loading="isLoading"
  />
  <app-layout
    v-else
    id="app"
  />
</template>

<script>
import VPageLoader from '@endpass/ui/components/VPageLoader';
import AppLayout from '@/components/screen/AppLayout';
import { connectStore } from '@/store';

export default {
  name: 'App',

  data() {
    return {
      isLoading: true,
    };
  },

  async mounted() {
    this.isLoading = true;

    await connectStore.initConnect();

    this.isLoading = false;
  },

  components: {
    AppLayout,
    VPageLoader,
  },
};
</script>
