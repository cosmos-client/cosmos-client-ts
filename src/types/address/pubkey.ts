import { cosmos } from '../../proto';
import { PrivKey } from '../crypto';
import * as secp256k1 from 'secp256k1';

/**
 * Base class
 */
export class PublicKey {
  protected _value: Uint8Array;

  /**
   *
   * @param value
   */
  constructor(value: Uint8Array) {
    const pubKeyLength = 33;
    if (value.length !== pubKeyLength) {
      throw Error('Public key must be 33 bytes length.');
    }
    this._value = value;
  }

  value() {
    return this._value;
  }

  /**
   *
   * @param privateKey
   */
  static fromPrivateKey(privKey: PrivKey) {
    if (privKey instanceof cosmos.crypto.secp256k1.PrivKey) {
      const publicKey = new cosmos.crypto.secp256k1.PubKey({
        key: secp256k1.publicKeyCreate(privKey.key),
      });
      //const publicKey = privKey.pubKey();
      return new PublicKey(publicKey.bytes());
    } else if (privKey instanceof cosmos.crypto.ed25519.PrivKey) {
      const publicKey = privKey.pubKey();
      return new PublicKey(publicKey.bytes());
    } else {
      throw Error();
    }
  }
}
