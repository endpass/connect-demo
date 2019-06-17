import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import EndpassForm from './EndpassForm';
import styles from '../styles';

const FORM_VIEW = {
  LOADING: 'LOADING',
  LOGIN: 'LOGIN',
  AUTHORIZED: 'AUTHORIZED',
};

class EndpassApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {
        from: '',
        message: '',
        signature: '',
      },
      accounts: [],
      currentId: 1,
      authorized: null,
      formView: FORM_VIEW.LOADING,
      error: null,
    };
  }

  async componentDidMount() {
    this.subscribeOnWidgetEvents();
    await this.getAccountData();
  }

  subscribeOnWidgetEvents() {
    this.props.connect.getWidgetNode().then(node => {
      node.addEventListener('logout', this.onWidgetLogout);
      node.addEventListener('update', this.onWidgetUpdate);
    });
  }

  async getAccountData() {
    try {
      const {
        activeAccount,
        activeNet,
      } = await this.props.connect.getAccountData();

      this.setState({
        formView: FORM_VIEW.AUTHORIZED,
        accounts: [activeAccount],
        form: {
          ...this.state.form,
          from: activeAccount,
        },
      });
    } catch (err) {
      this.setState({
        formView: FORM_VIEW.LOGIN,
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

      this.setState({
        form: {
          ...this.state.form,
          signature: res,
        },
      });
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

      this.setState({
        form: {
          ...this.state.form,
          signature: res.result,
        },
      });
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

      this.setState({
        form: {
          ...this.state.form,
          signature: res,
        },
      });
    });
  };

  requestAccount = () => {
    window.web3.eth.getAccounts((err, res) => {
      if (err) {
        this.errorNotification();
        console.error(err);
        return;
      }

      this.setState({
        accounts: res,
        form: {
          ...this.state.form,
          from: res[0] || null,
        },
      });
    });
  };

  onWidgetLogout = () => {
    window.location.reload();
  };

  onWidgetUpdate = ({ detail }) => {
    this.setState({
      accounts: [detail.activeAccount],
      form: {
        ...this.state.form,
        from: detail.activeAccount,
      },
    });
  };

  onChangeEndpassForm = data => {
    this.setState({
      form: {
        ...this.state.form,
        ...data,
      },
    });
  };

  onBackToLogin = () => {
    this.setState({
      formView: FORM_VIEW.LOGIN,
    });
  };

  onClickSignInButton = async () => {
    try {
      await this.props.connect.auth();
      await this.getAccountData();

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
    const data = await this.props.connect.openAccount();
    if (data.type === 'update') {
      await this.getAccountData();
    }
  };

  onClickSignOutButton = async () => {
    try {
      await this.props.connect.logout();

      this.setState({
        form: {
          from: '',
          message: '',
          signature: '',
        },
        authorized: false,
        formView: FORM_VIEW.LOGIN,
        accountData: null,
      });
    } catch (err) {
      this.setState({
        error: err.toString(),
      });
    }
  };

  renderContent() {
    const {
      formView,
      authorized,
      form,
      message,
      signature,
      accounts,
    } = this.state;
    const { classes } = this.props;

    if (formView === FORM_VIEW.LOADING) {
      return (
        <div className={classes.loader}>
          <CircularProgress data-test="endpass-app-loader" />
        </div>
      );
    }

    return (
      <div>
        {formView === FORM_VIEW.AUTHORIZED && (
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
        )}

        {formView === FORM_VIEW.LOGIN && (
          <Button
            variant="contained"
            className={classes.fluid}
            onClick={this.onClickSignInButton}
            data-test="endpass-sign-in-button"
          >
            Sign in with Endpass
          </Button>
        )}
      </div>
    );
  }

  render() {
    const { error } = this.state;
    const { classes } = this.props;

    return (
      <div data-test="endpass-form">
        {error && (
          <Typography
            className={classes.row}
            color="error"
            variant="caption"
            data-test="endpass-form-error"
          >
            {error}
          </Typography>
        )}
        {this.renderContent()}
      </div>
    );
  }
}

export default withStyles(styles)(EndpassApp);
