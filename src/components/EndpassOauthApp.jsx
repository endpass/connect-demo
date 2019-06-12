import React from 'react';
import Connect from '@endpass/connect';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import web3 from '../utils/web3';
import AuthForm from './AuthForm';
import EndpassForm from './EndpassForm';
import OauthForm from './OauthForm';
import styles from '../styles';

const FORM_VIEW = {
  LOADING: 'LOADING',
  LOGIN: 'LOGIN',
  AUTHORIZED: 'AUTHORIZED',
};

class EndpassOauthApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formView: null,
      accounts: null,
      error: null,
    };

    this.onClickSignInButton = this.onClickSignInButton.bind(this);
    this.onOauthSignOut = this.onOauthSignOut.bind(this);
  }

  async componentDidMount() {
    await this.getOauthData();
  }

  async getOauthData() {
    this.setState({
      formView: FORM_VIEW.LOADING,
    });

    try {
      await this.props.connect.loginWithOauth({
        scopes: ['wallet:accounts:read'],
        oauthServer: process.env.OAUTH_SERVER,
      });
      const { data } = await this.props.connect.request({
        method: 'GET',
        url: `${process.env.ENDPASS_API_URL}/accounts`
      });

      this.setState({
        accounts: data,
        formView: FORM_VIEW.AUTHORIZED,
      });
    } catch (err) {
      this.setState({
        formView: FORM_VIEW.LOGIN,
      });
    }
  }

  async onClickSignInButton() {
    await this.getOauthData();
  }

  async onClickGetData() {
    const { data } = await this.props.connect.request({
      method: 'GET',
      url: `${process.env.ENDPASS_API_URL}/accounts`
    });

    this.setState({
      accounts: data,
      formView: FORM_VIEW.OAUTH,
    });
  }

  async onOauthSignOut() {
    this.setState({
      formView: FORM_VIEW.LOADING,
    });

    await this.props.connect.logoutFromOauth();

    this.setState({
      formView: FORM_VIEW.LOGIN,
    });
  }

  renderContent() {
    const { formView, authorized, accounts } = this.state;
    const { classes, connect } = this.props;

    if (formView === FORM_VIEW.LOADING) {
      return (
        <div className={classes.loader}>
          <CircularProgress />
        </div>
      );
    }

    return (
      <div>
        {formView === FORM_VIEW.AUTHORIZED && (
          <OauthForm accounts={accounts} onSignOut={this.onOauthSignOut} />
        )}
        {formView === FORM_VIEW.LOGIN && (
          <Button
            variant="contained"
            className={classes.fluid}
            onClick={this.onClickSignInButton}
          >
            Get accounts via OAuth
  	  </Button>
        )}
      </div>
    );
  }

  render() {
    const { error } = this.state;
    const { classes } = this.props;

    return (
      <div>
        {error && (
          <Typography className={classes.row} color="error" variant="caption">
            {error}
          </Typography>
        )}
        {this.renderContent()}
      </div>
    );
  }
}

export default withStyles(styles)(EndpassOauthApp);
