import { PubKey } from '../crypto';

/**
 * Base class
 */
export class Address {
  protected _value: Uint8Array;

  /**
   *
   * @param value
   */
  constructor(value: Uint8Array) {
    const addressLength = 20;
    if (value.length !== addressLength) {
      throw Error('Address must be 20 bytes length.');
    }
    this._value = value;
  }

  value() {
    return this._value;
  }

  /**
   *
   * @param pubKey
   */
  static fromPublicKey(pubKey: PubKey) {
    return new Address(pubKey.address());
  }
}
