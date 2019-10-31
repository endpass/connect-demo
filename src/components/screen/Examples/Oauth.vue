<template>
  <div id="app">
    <h1>Press button to request email</h1>
    <h2>Result: {{ email }}</h2>
    <button @click="onClickRequestButton">
      Request email
    </button>
  </div>
</template>

<script>
import EndpassOauthPlugin from '@endpass/connect/oauth';

const connect = new EndpassOauthPlugin({
  authUrl: 'https://auth.endpass.com',
  oauthClientId: '2c9e1025-0dd0-484c-8595-43decb680684',
  oauthServer: 'https://identity.endpass.com/api/v1.1/oauth',
});

export default {
  data: () => ({
    email: null,
  }),

  methods: {
    async onClickRequestButton() {
      const { data } = await connect.request({
        method: 'GET',
        url: 'https://api.endpass.com/v1/user',
        scopes: ['user:email:read'],
      });
      this.email = data.email;
    },
  },
};
</script>
