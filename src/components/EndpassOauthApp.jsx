import React from 'react';
import Connect from '@endpass/connect';

import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';

import web3 from '../utils/web3';

import AuthForm from './AuthForm';
import EndpassForm from './EndpassForm';
import OauthForm from './OauthForm';
import styles from '../styles';

const FORM_VIEW = {
  LOADING: 'LOADING',
  LOGIN: 'LOGIN',
  AUTH: 'AUTH',
  OAUTH: 'OAUTH',
};

class EndpassOauthApp extends React.Component {
  render() {
    const { error } = this.state;
    const { classes } = this.props;

    return <div>oauth</div>;
  }
}

export default withStyles(styles)(EndpassOauthApp);
