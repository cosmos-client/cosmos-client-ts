import * as bech32 from "bech32";
import { Address, bech32Prefix } from "./address";

/**
 * ValAddress
 */
export class ValAddress extends Address {
  /**
   * Bech32フォーマットのアドレスに変換する。
   */
  toBech32() {
    const words = bech32.toWords(Buffer.from(this._value));
    return bech32.encode(bech32Prefix.valAddr, words);
  }

  /**
   *
   * @param valAddress
   */
  static fromBech32(valAddress: string) {
    const { prefix, words } = bech32.decode(valAddress);
    if (prefix !== bech32Prefix.valAddr) {
      throw Error();
    }

    return new ValAddress(bech32.fromWords(words));
  }

  static fromPublicKey(publicKey: Buffer) {
    return new this(this.hash160(publicKey));
  }

  /**
   * JSON.stringify
   */
  toJSON() {
    return this.toBech32();
  }
}
