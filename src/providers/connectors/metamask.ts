import { IAbstractConnectorOptions } from "../../helpers";

interface MetamaskOptions extends IAbstractConnectorOptions {
}

const ConnectToMetmask = async (
  MetamaskProvider: any,
  opts: MetamaskOptions
) => {
  let provider = null;
  if (typeof window.ethereum !== 'undefined') {
    provider = window.ethereum;
    try {
      await provider.request({ method: 'eth_requestAccounts' })
    } catch (error) {
      throw new Error("User Rejected");
    }
  } else if (window.web3) {
    provider = window.web3.currentProvider;
  } else if (window.celo) {
    provider = window.celo;
  } else {
    throw new Error("No Web3 Provider found");
  }
  return provider;
};

export default ConnectToMetmask;