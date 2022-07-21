import { IAbstractConnectorOptions } from "../../helpers";

interface MetamaskOptions extends IAbstractConnectorOptions {
}

const ConnectToMetmask = async (
  FireboxProvider: any,
  opts: MetamaskOptions
) => {
  return window.ethereum;
};
