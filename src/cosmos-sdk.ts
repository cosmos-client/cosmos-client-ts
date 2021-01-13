import { codec } from "./codec";
import { AxiosPromise, AxiosResponse } from "axios";
import * as bip32 from "bip32";
import * as bip39 from "bip39";

/**
 *
 */
export class CosmosSDK {
  /**
   * @param url
   * @param chainID
   */
  constructor(public url: string, public chainID: string) {}

  async generatePrivKeyFromMnemonic(mnemonic: string) {
    const seed = await bip39.mnemonicToSeed(mnemonic);
    const node = bip32.fromSeed(seed);
    const child = node.derivePath("44'/118'/0'/0/0");

    return child.privateKey!;
  }

  wrapResponseWithHeight<T>(res: AxiosPromise<T>) {
    return (res as any) as AxiosPromise<{ height: number; result: T }>;
  }

  reparseAxiosResponse<T>(res: AxiosResponse) {
    const ret: AxiosResponse<T> = {
      ...res,
      data: codec.unpackAny(res.data),
    };

    return ret;
  }
}
