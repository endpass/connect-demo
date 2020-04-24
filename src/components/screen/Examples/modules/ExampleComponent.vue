<template>
  <div id="app">
    <h1>Press button to request email</h1>
    <h2>Result: {{ email }}</h2>
    <v-button @click="onClickRequestButton">
      Request email
    </v-button>
  </div>
</template>

<script>
import EndpassOauth from '@endpass/connect/oauth';
import VButton from '@endpass/ui/kit/VButton';

const connect = new EndpassOauth({
  clientId: ENV.VUE_APP_OAUTH_CLIENT_ID,
  oauthServer: ENV.VUE_APP_OAUTH_SERVER,
  authUrl: ENV.VUE_APP_AUTH_URL,
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
      });
      this.email = data.email;
    },
  },

  components: {
    VButton,
  },
};
</script>
