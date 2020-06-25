// @ts-check

import { ref, onMounted } from '@vue/composition-api';
import { connectStore } from '@/store';

/**
 * @typedef {{mount: () => void}} LoginButton
 * @typedef {import('@vue/composition-api').Ref} Ref
 */

/**
 * @param {object} params
 * @param {boolean} params.isInvertedColors
 * @param {function} params.onLogin
 * @param {function} params.onError
 * @returns {{elementId: (string), message: Ref}}
 */
export default function useLoginCard({ isInvertedColors, onLogin, onError }) {
  let loginButtonInstance = /** @type {LoginButton|null} */ (null);
  const message = ref('');

  const elementId = isInvertedColors ? 'button-root-inverted' : 'button-root';

  const elementSelector = `#${elementId}`;

  const onLoginEnd = () => {
    // hacky solution for return enable state for button
    setTimeout(() => {
      const button = document.querySelector(`${elementSelector} button`);
      if (!button) return;
      button.removeAttribute('disabled');
    }, 10);

    onLogin();
  };

  /**
   *
   * @returns {LoginButton}
   */
  const createButton = () => {
    return connectStore.createLoginButton({
      element: `#${elementId}`,
      isLight: isInvertedColors,
      /**
       * @param {Error} err
       */
      onLogin: err => {
        if (err) {
          message.value = err.message;
          onError(err);
          return;
        }
        onLoginEnd();
      },
    });
  };

  onMounted(() => {
    loginButtonInstance = createButton();
    loginButtonInstance.mount();
  });

  return {
    elementId,
    message,
  };
}
