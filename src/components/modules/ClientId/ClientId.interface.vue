<template>
  <client-id-view
    :client-id="clientId"
    @confirm="onConfirm"
  />
</template>

<script>
import { connectStore } from '@/store';
import ClientIdView from './ClientId.view';

export default {
  name: 'ClientIdInterface',

  connectStore,

  computed: {
    clientId() {
      return this.$options.connectStore.clientId;
    },
  },

  methods: {
    async onConfirm(clientId) {
      const query = {
        ...this.$route.query,
        clientId,
      };

      if (!clientId) delete query.clientId;

      await this.$router.push({ query }).catch(() => {});

      this.$nextTick(async () => {
        window.location.reload();
      });
    },
  },

  components: {
    ClientIdView,
  },
};
</script>
