import * as crypto from 'crypto';
const bech32  = require('bech32');

export class PublicKey {
  private publicKey: Buffer;

  constructor(
    publicKey: Buffer
  ) {

    this.publicKey = publicKey;
  }

  public get base64PublicKey(): string {
    return this.publicKey.toString('base64');
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

  public get bech32Address(): string {
    const identifier = this.hash160(this.publicKey);

    const words = bech32.toWords(identifier);
	  return bech32.encode('cosmos', words);
  }
}