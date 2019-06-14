import React, { Fragment, useState, useEffect } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import CircularProgress from '@material-ui/core/CircularProgress';

import EndpassApp from './components/EndpassApp.jsx';
import EndpassOauthApp from './components/EndpassOauthApp.jsx';
import styles from './styles';

import web3 from './utils/web3';

const App = ({ classes, connect }) => {
  const [isInited, setIsInited] = useState(false);
  const [currentTab, setTab] = useState(0);

  useEffect(() => {
    if (isInited) return;

    const connectProvider = connect.getProvider();

    window.web3 = web3;
    window.web3.setProvider(connectProvider);
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
          <Tab label="Endpass Auth" data-test="endpass-auth-tab" />
          <Tab label="Endpass Oauth" data-test="endpass-oauth-tab" />
        </Tabs>
        <Grid container>
          <Grid className={classes.contentWrapper} xs={12} item>
            {connect ? (
              <Fragment>
                {currentTab === 0 && <EndpassApp connect={connect} />}
                {currentTab === 1 && <EndpassOauthApp connect={connect} />}
              </Fragment>
            ) : (
              <div className={classes.loader}>
                <CircularProgress data-test="root-loader" />
              </div>
            )}
          </Grid>
        </Grid>
      </Card>
    </div>
  );
};

export default withStyles(styles)(App);
