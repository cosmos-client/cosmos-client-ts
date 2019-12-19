import { PubKey } from "../pub-key";
import * as crypto from 'crypto';
import * as secp256k1 from 'tiny-secp256k1';

/**
 * secp256k1公開鍵。
 */
export class PubKeySecp256k1 implements PubKey {
  private pubKey: Buffer;

  /**
   * 
   * @param pubKey 
   */
  constructor(
    pubKey: Buffer
  ) {
    this.pubKey = pubKey;
  }

  /**
   * 署名がこの公開鍵から作られたものであるか検証する。
   * @param message 
   * @param signature 
   */
  verify(message: Buffer, signature: Buffer): boolean {
    const hash = crypto.createHash('sha256').update(message).digest();

    return secp256k1.verify(hash, signature, this.pubKey);
  }

  /**
   * 
   */
  toBuffer() {
    return new Buffer(this.pubKey);
  }

  /**
   * 
   */
  toBase64() {
    return this.pubKey.toString('base64');
  }

  /**
   * JSON.stringify時に参照される。
   */
  toJSON() {
    return this.toBase64();
  }

  /**
   * 
   */
  static fromBase64(value: string) {
    const buffer = new Buffer(value, 'base64');
    return new this(buffer);
  }
}

