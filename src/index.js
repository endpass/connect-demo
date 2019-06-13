import React from 'react';
import ReactDOM from 'react-dom';
import Connect from '@endpass/connect';
import e2eSetup from './utils/e2eSetup';
import App from './App';
import './main.css';

(async () => {
  const authUrl = process.env.AUTH_URL || 'https://auth.endpass.com';
  const oauthClientId = process.env.OAUTH_CLIENT_ID;
  const connect = new Connect({
    authUrl,
    oauthClientId,
  });

  if (process.env.NODE_ENV === 'e2e-connect') {
    await e2eSetup(window);
  }

  ReactDOM.render(<App connect={connect} />, document.getElementById('root'));
})();

if (module.hot) {
  module.hot.accept();
}
