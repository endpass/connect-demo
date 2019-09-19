<template>
  <div
    class="card app-card main-app-card app-login-card"
    :class="{ 'app-card-inverted': isInvertedColors }"
  >
    <div class="card-content">
      <p class="title">
        <slot />
      </p>
      <div
        :id="elementId"
        class="button-root"
        data-test="login-element"
      />
      <form-field>
        <button
          class="button"
          :class="{ 'is-primary': !isInvertedColors }"
          data-test="button-mount"
          @click="toggleButton"
        >
          {{ mountLabel }}
        </button>
      </form-field>
      <div data-test="user-email">
        {{ userEmail }}
      </div>
    </div>
  </div>
</template>

<script>
import FormField from '@/components/common/FormField';
import { connectStore } from '@/store';

export default {
  name: 'LoginCard',
  props: {
    isInvertedColors: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isMounted: false,
      userEmail: null,
    };
  },
  computed: {
    elementId() {
      return this.isInvertedColors ? 'button-root-inverted' : 'button-root';
    },
    mountLabel() {
      return this.isMounted ? 'Unmount' : 'Mount';
    },
  },
  methods: {
    toggleButton() {
      if (this.isMounted) {
        this.$options.loginButton.unmount();
        this.isMounted = false;
        return;
      }
      this.$options.loginButton.mount();
      this.isMounted = true;
    },
  },
  async mounted() {
    await connectStore.initConnect();
    this.$options.loginButton = connectStore.createLoginButton({
      rootElement: document.getElementById(this.elementId),
      isButtonLight: this.isInvertedColors,
      onLogin: (err, email) => {
        console.log(err, email); // eslint-disable-line
      },
    });
    this.toggleButton();
  },
  components: { FormField },
  loginButton: null,
};
</script>

<style>
.app-card-inverted {
  background-color: #4b0472;
}

.app-login-card {
  margin-bottom: 20px;
}

.app-card-inverted .title {
  color: white;
}

.button-root {
  margin-bottom: 15px;
}
</style>
