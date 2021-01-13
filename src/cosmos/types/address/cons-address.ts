import * as bech32 from "bech32";
import { PubKey } from "../../crypto";
import { Address, bech32Prefix } from "./address";

/**
 * ConsAddress
 */
export class ConsAddress extends Address {
  /**
   *
   */
  toString() {
    const words = bech32.toWords(Buffer.from(this._value));
    return bech32.encode(bech32Prefix.consAddr, words);
  }

  /**
   * For `JSON.stringify`
   */
  toJSON() {
    return this.toString();
  }

  /**
   *
   * @param consAddress
   */
  static fromString(consAddress: string) {
    const { prefix, words } = bech32.decode(consAddress);

    return new ConsAddress(bech32.fromWords(words));
  }

  static fromPublicKey(pubKey: PubKey) {
    return new ConsAddress(pubKey.address());
  }
}
