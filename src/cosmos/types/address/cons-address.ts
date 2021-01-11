import * as bech32 from "bech32";
import { Address, bech32Prefix } from "./address";
import { PubKey } from "../../base/tendermint";

/**
 * ConsAddress
 */
export class ConsAddress extends Address {
  /**
   *
   */
  toBech32() {
    const words = bech32.toWords(Buffer.from(this._value));
    return bech32.encode(bech32Prefix.consAddr, words);
  }

  /**
   *
   * @param consAddress
   */
  static fromBech32(consAddress: string) {
    const { prefix, words } = bech32.decode(consAddress);

    return new ConsAddress(bech32.fromWords(words));
  }

  static fromPublicKey(pubKey: PubKey) {
    return new ConsAddress(pubKey.getAddress());
  }

  /**
   * For `JSON.stringify`
   */
  toJSON() {
    return this.toBech32();
  }
}
