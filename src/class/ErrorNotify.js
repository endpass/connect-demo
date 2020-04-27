// @ts-check
import Vue from 'vue';

/**
 * @typedef {import('vue-notification').NotificationOptions} NotificationOptions
 */

export default class ErrorNotify {
  /**
   * Show notify as is
   * @param {NotificationOptions} options
   */
  showNotify(options) {
    Vue.notify(options);
  }

  /**
   * Show info notify
   * @param {NotificationOptions} options
   */
  showInfo(options) {
    this.showNotify({
      ...options,
      type: 'is-info',
    });
  }

  /**
   * Show error notify
   * @param {NotificationOptions} options
   */
  showError(options) {
    this.showNotify({
      type: 'is-danger',
      ...options,
    });
  }
}
