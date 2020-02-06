import * as bech32 from "bech32";
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
    if (prefix !== bech32Prefix.accAddr) {
      throw Error();
    }

    return new AccAddress(bech32.fromWords(words));
  }

  static fromPublicKey(publicKey: Buffer) {
    return new this(this.hash160(publicKey));
  }

  /**
   * For `JSON.stringify`
   */
  toJSON() {
    return this.toBech32();
  }
}
