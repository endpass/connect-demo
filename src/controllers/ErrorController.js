import Vue from 'vue';

export default class ErrorController {
  showNotify(options) {
    Vue.notify(options);
  }

  showInfo(options) {
    this.showNotify({
      ...options,
      type: 'is-info',
    });
  }

  showWarn(options) {
    this.showNotify({
      ...options,
      type: 'is-warn',
    });
  }

  showError(options) {
    this.showNotify({
      type: 'is-danger',
      ...options,
    });
  }

  throwError(title, text, e) {
    this.showError({
      title,
      text,
    });
    throw new Error(e);
  }
}
