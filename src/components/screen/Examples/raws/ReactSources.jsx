import React, { useState } from 'react';
import EndpassOauth from '@endpass/connect/oauth';

export default () => {
  const [email, changeEmail] = useState(null);
  const connect = new EndpassOauth({
    clientId: ENV.VUE_APP_OAUTH_CLIENT_ID,
  });
  const onClickRequestButton = async () => {
    const { data } = await connect.request({
      method: 'GET',
      url: ENV.VUE_APP_OAUTH_SERVER + '/user',
      scopes: ['user:email:read'],
    });

    changeEmail(data.email);
  };

  return (
    <div>
      <h1>Press button to request email</h1>
      <h2>Result: {email}</h2>
      <button onClick={onClickRequestButton}>Request email</button>
    </div>
  );
};
