<template>
  <div class="home">
    <v-spinner
      v-if="isLoading"
      data-test="endpass-app-loader"
      label="Please wait, basic usage is loading..."
    />
    <div
      v-else
      class="section"
    >
      <login-card>Login OAuth default style</login-card>
      <login-card :is-inverted-colors="true">
        Login OAuth inverse style
      </login-card>
    </div>
  </div>
</template>

<script>
import LoginCard from './LoginCard';

export default {
  name: 'Login',
  data() {
    return {
      isLoading: false,
    };
  },
  components: { LoginCard },
};
</script>
