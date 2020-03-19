<template>
  <div>
    <div class="subtitle">
      Addresses:
    </div>
    <div class="content">
      <ul
        v-for="address in data"
        :key="address.id"
        data-test="endpass-oauth-user-address"
      >
        <pre>{{ address }}</pre>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserAddresses',

  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
