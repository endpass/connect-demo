// import React from 'react';
// import ReactDOM from 'react-dom';
import Connect from '@endpass/connect';
import e2eSetup from '../utils/e2eSetup';
import App from './App';
import './main.css';

const ReactDOM = () => {};

(async () => {
  const authUrl = ENV.VUE_APP_AUTH_URL || 'https://auth.endpass.com';
  const oauthClientId = ENV.VUE_APP_OAUTH_CLIENT_ID;
  const connect = new Connect({
    authUrl,
    oauthClientId,
  });

  if (ENV.VUE_APP_IS_E2E_CONNECT) {
    await e2eSetup(window);
  }

  ReactDOM.render(<App connect={connect} />, document.getElementById('root'));
})();

if (module.hot) {
  module.hot.accept();
}
