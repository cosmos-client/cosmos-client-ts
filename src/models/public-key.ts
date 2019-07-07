import * as crypto from 'crypto';
import * as bech32 from 'bech32';
import { AccAddress } from '../cosmos-sdk/address';

export class PublicKey {
  private _publicKey: Buffer;

  constructor(
    publicKey: Buffer
  ) {
    this._publicKey = publicKey;
  }

  public get base64PublicKey(): string {
    return this._publicKey.toString('base64');
  }

  private hash160(buffer: Buffer): Buffer {
    const sha256Hash: Buffer = crypto.createHash('sha256')
      .update(buffer)
      .digest();
    try {
      return crypto.createHash('rmd160')
        .update(sha256Hash)
        .digest();
    } catch (err) {
      return crypto.createHash('ripemd160')
        .update(sha256Hash)
        .digest();
    }
  }

  public get accAddress(): AccAddress {
    const identifier = this.hash160(this._publicKey);

    const words = bech32.toWords(identifier);
    return bech32.encode('cosmos', words);
  }
}