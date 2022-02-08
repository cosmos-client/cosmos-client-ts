import { config } from '../../config/';
import { PubKey, PrivKey } from '../crypto';
import { PublicKey } from './pubkey';
import * as bech32 from 'bech32';

/**
 * AccAddress
 */
export class AccPubkey extends PublicKey {
  /**
   *
   */
  toString() {
    const words = bech32.toWords(Buffer.from(this._value));
    return bech32.encode(config.bech32Prefix.accPub, words);
  }

  /**
   * For `JSON.stringify`
   */
  toJSON() {
    return this.toString();
  }

  /**
   *
   * @param accPubkey
   */
  static fromString(accPubkey: string) {
    const { words } = bech32.decode(accPubkey);

    console.log('from string', new Uint8Array(bech32.fromWords(words)));
    return new AccPubkey(new Uint8Array(bech32.fromWords(words)));
  }

  static fromPrivateKey(pubKey: PrivKey) {
    return new AccPubkey(pubKey.bytes());
  }
}

declare module './pubkey' {
  interface PublicKey {
    toAccPubKey(): AccPubkey;
  }
}

PublicKey.prototype.toAccPubKey = function () {
  return new AccPubkey(this.value());
};
