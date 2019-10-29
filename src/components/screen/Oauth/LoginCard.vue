<template>
  <div
    class="app-login-card"
    :class="{ 'app-card-inverted': isInvertedColors }"
  >
    <div>
      <p class="subtitle">
        <slot />
      </p>
      <div class="is-inline-block">
        <v-button
          :class="{ 'is-primary': !isInvertedColors }"
          data-test="button-mount"
          @click="toggleButton"
        >
          {{ mountLabel }}
        </v-button>
      </div>
      <div
        :id="elementId"
        class="button-root"
        data-test="login-element"
      />
      <div
        class="login-message"
        data-test="login-message"
      >
        {{ message }}
      </div>
    </div>
  </div>
</template>

<script>
import VButton from '@endpass/ui/kit/VButton';
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
      loginButton: null,
      message: null,
    };
  },

  computed: {
    elementId() {
      return this.isInvertedColors ? 'button-root-inverted' : 'button-root';
    },
    isMounted() {
      return !!this.loginButton;
    },
    mountLabel() {
      return this.isMounted ? 'Unmount' : 'Mount';
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

  components: {
    VButton,
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

.app-card-inverted .subtitle {
  color: white;
}

.button-root {
  margin-left: 15px;
  display: inline-block;
}

.app-card-inverted .login-message {
  color: white;
}
</style>
