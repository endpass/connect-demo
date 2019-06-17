import { VuexModule, Module, Action } from 'vuex-class-modules';

@Module({ generateMutationSetters: true })
class Web3Module extends VuexModule {
  @Action
  EthPersonalRecover({ signature, message }) {
    return new Promise((resolve, reject) => {
      window.web3.eth.personal.ecRecover(message, signature, (err, res) => {
        if (err) {
          return reject(err);
        }

        return resolve(res);
      });
    });
  }

  @Action
  EthPersonalSign({ from, message }) {
    return new Promise((resolve, reject) => {
      window.web3.eth.personal.sign(message, from, '', (err, res) => {
        if (err) {
          return reject(err);
        }

        return resolve(res);
      });
    });
  }

  @Action
  EthSign({ from, message }) {
    return new Promise((resolve, reject) => {
      window.web3.eth.sign(message, from, (err, res) => {
        if (err) {
          return reject(err);
        }

        return resolve(res);
      });
    });
  }

  @Action
  loadAccounts() {
    return new Promise((resolve, reject) => {
      window.web3.eth.getAccounts((err, res) => {
        if (err) {
          return reject(err);
        }

        return resolve(res);
      });
    });
  }
}

export default Web3Module;
