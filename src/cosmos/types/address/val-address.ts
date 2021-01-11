import * as bech32 from "bech32";
import { Address, bech32Prefix } from "./address";
import { PubKey } from "../../base/tendermint";

/**
 * ValAddress
 */
export class ValAddress extends Address {
  /**
   *
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

    return new ValAddress(bech32.fromWords(words));
  }

  static fromPublicKey(pubKey: PubKey) {
    return new ValAddress(pubKey.getAddress());
  }

  /**
   * For `JSON.stringify`
   */
  toJSON() {
    return this.toBech32();
  }
}
