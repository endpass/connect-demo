<template>
  <div
    class="app-login-card"
    :class="{ 'app-card-inverted': isInvertedColors }"
  >
    <div>
      <span class="app-login-card-label">
        {{ label }}
      </span>
      <div
        :id="elementId"
        class="button-root"
        data-test="login-element"
      />
      <div
        class="app-login-card-login-message"
        data-test="login-message"
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
    label: {
      type: String,
      default: '',
    },

    isInvertedColors: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      loginButton: null,
      message: null,
    };
  },

  computed: {
    elementId() {
      return this.isInvertedColors ? 'button-root-inverted' : 'button-root';
    },
  },

  methods: {
    toggleButton() {
      if (this.loginButton) {
        this.loginButton.unmount();
        this.loginButton = null;
        this.message = null;
        return;
      }
      this.loginButton = this.createButton();
      this.loginButton.mount();
    },

    createButton() {
      return connectStore.createLoginButton({
        element: `#${this.elementId}`,
        isLight: this.isInvertedColors,
        onLogin: (err, res) => {
          if (err) {
            this.message = err.message;
            return;
          }
          this.message = res.email;
        },
      });
    },
  },

  mounted() {
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
  padding: 20px;
}

.app-card-inverted .app-login-card-label {
  color: white;
}

.button-root {
  margin-left: 15px;
  display: inline-block;
}

.app-card-inverted .app-login-card-login-message {
  color: white;
}
</style>
