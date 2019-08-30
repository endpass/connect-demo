import Web3 from 'web3';
import Network from '@endpass/class/Network';

const defaultUrl = Network.NETWORK_URL_HTTP[Network.NET_ID.MAIN][0];
export default (url = defaultUrl) => {
  const web3 = new Web3(url);

  window.web3 = web3;
};
