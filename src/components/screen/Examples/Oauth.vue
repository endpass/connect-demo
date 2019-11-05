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
  oauthClientId: ENV.VUE_APP_OAUTH_CLIENT_ID,
  oauthServer: ENV.VUE_APP_OAUTH_SERVER,
});

export default {
  data: () => ({
    email: null,
  }),

  methods: {
    async onClickRequestButton() {
      const { data } = await connect.request({
        method: 'GET',
        url: `${ENV.VUE_APP_OAUTH_SERVER}/user`,
        scopes: ['user:email:read'],
      });
      this.email = data.email;
    },
  },
};
</script>
