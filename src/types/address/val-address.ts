import * as bech32 from 'bech32';
import { config } from '../../config';
import { PubKey } from '../crypto';
import { Address } from './address';

/**
 * ValAddress
 */
export class ValAddress extends Address {
  /**
   *
   */
  toString() {
    const words = bech32.toWords(Buffer.from(this._value));
    return bech32.encode(config.bech32Prefix.valAddr, words);
  }

  /**
   * For `JSON.stringify`
   */
  toJSON() {
    return this.toString();
  }

  /**
   *
   * @param valAddress
   */
  static fromString(valAddress: string) {
    const { words } = bech32.decode(valAddress);

    return new ValAddress(new Uint8Array(bech32.fromWords(words)));
  }

  static fromPublicKey(pubKey: PubKey) {
    return new ValAddress(pubKey.address());
  }
}

declare module './address' {
  interface Address {
    toValAddress(): ValAddress;
  }
}

Address.prototype.toValAddress = function () {
  return new ValAddress(this.value());
};
