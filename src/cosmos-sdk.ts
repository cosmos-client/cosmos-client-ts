import { codec } from "./codec";
import { AxiosPromise } from "axios";
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

  instancifyObjectWithoutAminoJSON<T>(
    constructor: Function,
    promise: AxiosPromise<any>,
  ): AxiosPromise<T> {
    const type = codec.maps.type.get(constructor);
    return promise.then((res) => ({
      ...res,
      data: codec.fromJSONString(
        JSON.stringify({ type: type, value: res.data }),
      ) as T,
    }));
  }

  objectifyInstanceWithoutAminoJSON(data: any) {
    const obj = JSON.parse(codec.toJSONString(data));

    if (obj.type && codec.maps.fromJSON[obj.type]) {
      return obj.value;
    }

    return obj;
  }
}
