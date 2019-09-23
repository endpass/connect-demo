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
      <button
        class="button"
        :class="{ 'is-primary': !isInvertedColors }"
        data-test="button-mount"
        @click="toggleButton"
      >
        {{ mountLabel }}
      </button>
      <div
        class="user-email"
        data-test="user-email"
      >
        {{ message }}
      </div>
    </div>
  </div>
</template>

<script>
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
      message: null,
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
        this.message = null;
        return;
      }
      this.$options.loginButton.mount();
      this.isMounted = true;
    },
  },
  loginButton: null,
  async mounted() {
    const self = this;
    await connectStore.initConnect();
    this.$options.loginButton = connectStore.createLoginButton({
      rootElement: document.getElementById(this.elementId),
      isButtonLight: this.isInvertedColors,
      onLogin: (err, res) => {
        if (err) {
          self.message = err.message;
          return;
        }
        self.message = res.email;
      },
    });
    this.toggleButton();
  },
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

.app-card-inverted .user-email {
  color: white;
}
</style>
