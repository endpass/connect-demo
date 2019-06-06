function registerE2EWorker() {
  if (navigator.serviceWorker) {
    navigator.serviceWorker.register('/e2e-sw.js');
  }
}

export default registerE2EWorker;
