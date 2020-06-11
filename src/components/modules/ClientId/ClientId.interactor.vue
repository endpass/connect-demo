<template>
  <div>
    <slot :onConfirm="onConfirm" />
  </div>
</template>

<script>
export default {
  name: 'ClientIdInteractor',

  inject: ['gateway'],

  methods: {
    async onConfirm(clientId) {
      await this.gateway.setClientId(clientId);
    },
  },
};
</script>
