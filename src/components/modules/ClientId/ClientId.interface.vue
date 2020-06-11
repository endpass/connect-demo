<template>
  <client-id-interactor #default="{ onConfirm }">
    <client-id-view
      :client-id="clientId"
      @confirm="onConfirm"
    />
  </client-id-interactor>
</template>

<script>
import { connectStore } from '@/store';
import ClientIdView from './ClientId.view';
import ClientIdInteractor from './ClientId.interactor';

export default {
  name: 'ClientIdInterface',

  connectStore,

  provide() {
    const self = this;
    return {
      gateway: {
        async setClientId(clientId) {
          const query = {
            ...self.$route.query,
            clientId,
          };

          if (!clientId) delete query.clientId;

          try {
            await self.$router.push({
              query,
            });
          } catch (e) {}

          self.$nextTick(async () => {
            window.location.reload();
          });
        },
      },
    };
  },

  computed: {
    clientId() {
      return this.$options.connectStore.clientId;
    },
  },

  components: {
    ClientIdInteractor,
    ClientIdView,
  },
};
</script>
