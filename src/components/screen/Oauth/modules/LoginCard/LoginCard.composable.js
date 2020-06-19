// @ts-check

import { ref } from '@vue/composition-api';
import { connectStore } from '@/store';

/**
 * @typedef {{mount: () => void}} LoginButton
 * @typedef {import('@vue/composition-api').Ref} Ref
 */

/**
 * @param {object} params
 * @param {boolean} params.isInvertedColors
 * @returns {{elementId: (string), onMounted: onMounted, message: Ref}}
 */
export default function useLoginCard({ isInvertedColors }) {
  let loginButtonInstance = /** @type {LoginButton|null} */ (null);
  const message = ref('');

  const elementId = isInvertedColors ? 'button-root-inverted' : 'button-root';

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
       * @param {{email: string}} res
       */
      onLogin: (err, res) => {
        if (err) {
          message.value = err.message;
          return;
        }
        message.value = res.email;
      },
    });
  };

  const onMounted = () => {
    loginButtonInstance = createButton();
    loginButtonInstance.mount();
  };

  return {
    elementId,
    message,
    onMounted,
  };
}
