import * as bech32 from "bech32";
import { PubKey } from "../../crypto";
import { Address, bech32Prefix } from "./address";

/**
 * AccAddress
 */
export class AccAddress extends Address {
  /**
   *
   */
  toBech32() {
    const words = bech32.toWords(Buffer.from(this._value));
    return bech32.encode(bech32Prefix.accAddr, words);
  }

  /**
   *
   * @param accAddress
   */
  static fromBech32(accAddress: string) {
    const { prefix, words } = bech32.decode(accAddress);

    return new AccAddress(bech32.fromWords(words));
  }

  static fromPublicKey(pubKey: PubKey) {
    return new AccAddress(pubKey.address());
  }

  /**
   * For `JSON.stringify`
   */
  toJSON() {
    return this.toBech32();
  }
}
