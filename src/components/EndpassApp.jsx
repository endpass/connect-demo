import React from 'react';
import Connect from '@endpass/connect';

import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';

import web3 from '../utils/web3';

import AuthForm from './AuthForm.jsx';
import EndpassForm from './EndpassForm.jsx';
import styles from '../styles';

class EndpassApp extends React.Component {
  constructor(props) {
    super(props);

    this.initConnect();
    this.state = {
      form: {
        from: '',
        message: '',
        signature: '',
      },
      accounts: [],
      currentId: 1,
      authorized: null,
      error: null,
    };

    this.onWidgetLogout = this.onWidgetLogout.bind(this)
    this.onWidgetUpdate = this.onWidgetUpdate.bind(this)
  }

  async componentDidMount() {
    await this.getAccountDataAndUpdateProviderSettings();
  }

  initConnect() {
    const authUrl = process.env.AUTH_URL || 'https://auth.endpass.com';

    this.connect = new Connect({
      authUrl,
    });

    window.web3 = web3;

    this.subscribeOnWidgetEvents()
  }

  subscribeOnWidgetEvents() {
    this.connect.getWidgetNode()
      .then(node => {
        node.addEventListener('logout', this.onWidgetLogout)
        node.addEventListener('update', this.onWidgetUpdate)
      })
  }

  async getAccountDataAndUpdateProviderSettings() {
    try {
      const { activeAccount, activeNet } = await this.connect.getAccountData();
      const connectProvider = this.connect.getProvider();

      this.connect.setProviderSettings({
        activeAccount,
        activeNet,
      });

      web3.setProvider(connectProvider);

      this.setState({
        authorized: true,
        accounts: [activeAccount],
        form: {
          ...this.state.form,
          from: activeAccount,
        },
      });
    } catch (err) {
      this.setState({
        authorized: false,
        accounts: [],
        accountData: null,
      });
    }
  }

  /* eslint-disable-next-line */
  errorNotification = () => {
    /* eslint-disable */
    new Notification('Action denied', {
      body: 'An error occured, see console for more details',
    });
    /* eslint-enable */
  };

  makeRequest(method, params, callback) {
    const { currentId } = this.state;
    (window.ethereum || window.web3.currentProvider).sendAsync(
      {
        id: currentId,
        jsonrpc: '2.0',
        method,
        params,
      },
      callback,
    );
  }

  personalRecover = () => {
    const { message, signature } = this.state.form;

    window.web3.eth.personal.ecRecover(message, signature, (err, res) => {
      if (err) {
        this.errorNotification();
        console.error(err);
        return;
      }

      alert(`Address verified. Recovered address: ${res}`);
    });
  };

  sign = () => {
    const { from, message } = this.state.form;

    window.web3.eth.sign(message, from, (err, res) => {
      if (err) {
        this.errorNotification();
        console.error(err);
        return;
      }
      
      this.setState(state => ({
        form: {
          ...state.form,
          signature: res,
        },
      }));
    });
  };

  // legacy EIP
  signTypedData = () => {
    const { from } = this.state;
    const typedData = [
      {
        type: 'string',
        name: 'Message',
        value: 'Hi, Alice!',
      },
      {
        type: 'uint32',
        name: 'A number',
        value: '1337',
      },
    ];

    this.setState({
      form: {
        ...this.state.form,
        message: JSON.stringify(typedData, null, 2),
      },
    });

    this.makeRequest('eth_signTypedData', [typedData, from], (err, res) => {
      if (err) {
        this.errorNotification();
        console.error(err);
        return;
      }

      this.setState(state => ({
        form: {
          ...state.form,
          signature: res.result,
        },
      }));
    });
  };

  personalSign = () => {
    const { form } = this.state;

    window.web3.eth.personal.sign(form.message, form.from, '', (err, res) => {
      if (err) {
        this.errorNotification();
        console.error(err);
        return;
      }

      this.setState(state => ({
        form: {
          ...state.form,
          signature: res,
        },
      }));
    });
  };

  requestAccount = () => {
    window.web3.eth.getAccounts((err, res) => {
      if (err) {
        this.errorNotification();
        console.error(err);
        return;
      }

      this.setState(state => ({
        accounts: res,
        form: {
          ...state.form,
          from: res[0] || null,
        },
      }));
    });
  };

  onWidgetLogout() {
    window.location.reload()
  }

  onWidgetUpdate({ detail }) {
    this.setState(state => ({
      ...state,
      accounts: [detail.activeAccount],
      form: {
        ...state.form,
        from: [detail.activeAccount], 
      }
    }))
  }

  onChangeEndpassForm = (data) => {
    this.setState({
      form: {
        ...this.state.form,
        ...data,
      },
    });
  };

  onClickOauthButton = async () => {
    await this.connect.loginWithOauth({
      clientId: process.env.OAUTH_CLIENT_ID,
      scopes: ['wallet:accounts:read'],
      oauthServer: process.env.OAUTH_SERVER,
    });
  };

  onClickGetData = async () => {
    const { data } = await this.connect.request({
      method: 'GET',
      url: 'https://api-dev.endpass.com/v1/accounts',
    });
    alert(data);
    console.log(data);
  };

  onClickSignInButton = async () => {
    try {
      await this.connect.auth();
      await this.getAccountDataAndUpdateProviderSettings();

      this.setState({
        error: null,
      });
    } catch (err) {
      this.setState({
        error: err.toString(),
      });
    }
  };

  onOpenAccount = async () => {
    const data = await this.connect.openAccount();
    if (data.type === 'update') {
      await this.getAccountDataAndUpdateProviderSettings();
    }
  };

  onClickSignOutButton = async () => {
    try {
      await this.connect.logout();

      this.setState({
        form: {
          from: '',
          message: '',
          signature: '',
        },
        authorized: false,
        accountData: null,
      });
    } catch (err) {
      this.setState({
        error: err.toString(),
      });
    }
  };

  renderContent() {
    const { authorized, form, message, signature, accounts } = this.state;
    const { classes } = this.props;

    if (authorized === null) {
      return (
        <div className={classes.loader}>
          <CircularProgress />
        </div>
      );
    }

    return (
      <div>
        {authorized ? (
          <EndpassForm
            form={form}
            message={message}
            signature={signature}
            accounts={accounts}
            onSign={this.sign}
            onSignTypedData={this.signTypedData}
            onPersonalRecover={this.personalRecover}
            onPersonalSign={this.personalSign}
            onRequestAccount={this.requestAccount}
            onSignOut={this.onClickSignOutButton}
            onOpenAccont={this.onOpenAccount}
            onChange={this.onChangeEndpassForm}
          />
        ) : (
          <AuthForm
            onSignIn={this.onClickSignInButton}
            onOauth={this.onClickOauthButton}
            onGetData={this.onClickGetData}
          />
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

export default withStyles(styles)(EndpassApp);
