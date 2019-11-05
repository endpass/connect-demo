<template>
  <div>
    <div class="subtitle">
      Accounts:
    </div>
    <div class="content">
      <ul
        v-for="account in data"
        :key="account"
        data-test="endpass-oauth-accounts-list"
      >
        <li class="subtitle">
          {{ account }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Accounts',

  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
