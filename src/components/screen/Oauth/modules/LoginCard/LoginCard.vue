<template>
  <div
    class="app-login-card"
    :class="{ 'app-card-inverted': isInvertedColors }"
  >
    <div>
      <div class="app-login-card-label">
        {{ label }}
      </div>
      <div
        :id="elementId"
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
import useLoginCard from './LoginCard.composable';

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

  setup(props) {
    const { elementId, message, onMounted } = useLoginCard({
      isInvertedColors: props.isInvertedColors,
    });

    return {
      message,
      elementId,
      onMounted,
    };
  },
};
</script>

<style>
.app-login-card {
  background-color: #f8f9fb;
  padding: 20px;
  display: flex;
  flex: 1;
}

.app-card-inverted {
  background-color: #6e32c9;
}

.app-login-card-label {
  font-size: 12px;
  margin-bottom: 10px;
  font-weight: bold;
}

.app-card-inverted .app-login-card-label {
  color: white;
}

.app-card-inverted .app-login-card-login-message {
  color: white;
}
</style>
