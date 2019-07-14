import { Amino } from "../../../tendermint/amino";
import { PubKey } from "../pub-key";
import * as crypto from 'crypto';
import * as secp256k1 from 'tiny-secp256k1';

/**
 * secp256k1公開鍵。
 */
@Amino.RegisterConcrete('tendermint/PubKeySecp256k1')
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
  public verify(message: string, signature: Buffer): boolean {
    const hash = crypto.createHash('sha256').update(message).digest('hex');
    const buffer = Buffer.from(hash, 'hex');

    return secp256k1.verify(buffer, signature, this.pubKey);
  }

  /**
   * 
   */
  public toBuffer() {
    return new Buffer(this.pubKey);
  }

  /**
   * 
   */
  public toBase64() {
    return this.pubKey.toString('base64');
  }

  /**
   * JSON.stringify時に参照される。
   */
  public toJSON() {
    return this.toBase64();
  }

  /**
   * 
   */
  public static fromBase64(value: string) {
    const buffer = new Buffer(value, 'base64');
    return new this(buffer);
  }
}
