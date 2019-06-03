import React, { Fragment, useState, useEffect } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import CircularProgress from '@material-ui/core/CircularProgress';

import Connect from '@endpass/connect';
import EndpassApp from './components/EndpassApp.jsx';
import EndpassOauthApp from './components/EndpassOauthApp.jsx';
import styles from './styles';

import web3 from './utils/web3';

const App = ({ classes }) => {
  const [isInited, setIsInited] = useState(false);
  const [currentTab, setTab] = useState(0);
  const [connectInstance, setConnectInstance] = useState(null);

  useEffect(() => {
    if (isInited) return;

    window.web3 = web3;

    const authUrl = process.env.AUTH_URL || 'https://auth.endpass.com';
    const oauthClientId = process.env.OAUTH_CLIENT_ID;
    const connect = new Connect({
      authUrl,
      oauthClientId,
    });
    const connectProvider = connect.getProvider();

    window.web3.setProvider(connectProvider);
    setConnectInstance(connect);
    setIsInited(true);
  });

  return (
    <div className={classes.appWrapper}>
      <Card className={classes.card}>
        <Tabs
          className={classes.tabsPanel}
          indicatorColor="primary"
          value={currentTab}
          onChange={(event, val) => setTab(val)}
        >
          <Tab label="Endpass Auth" />
          <Tab label="Endpass Oauth" />
        </Tabs>
        <Grid container>
          <Grid className={classes.contentWrapper} xs={12} item>
            {connectInstance ? (
              <Fragment>
                {currentTab === 0 && <EndpassApp connect={connectInstance} />}
                {currentTab === 1 && (
                  <EndpassOauthApp connect={connectInstance} />
                )}
              </Fragment>
            ) : (
              <div className={classes.loader}>
                <CircularProgress />
              </div>
            )}
          </Grid>
        </Grid>
      </Card>
    </div>
  );
};

export default withStyles(styles)(App);
