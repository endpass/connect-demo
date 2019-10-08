<template>
  <div>
    <div class="subtitle">
      Accounts:
    </div>
    <div class="content">
      <ul
        v-for="account in accounts"
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
    accounts: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
