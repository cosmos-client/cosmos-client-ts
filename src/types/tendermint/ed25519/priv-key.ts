import { PrivKey } from "../priv-key";
import { PubKey } from "../pub-key";
import { PubKeyEd25519 } from "./pub-key";

/**
 * ed25519
 */
export class PrivKeyEd25519 implements PrivKey {
  private pubKey: PubKey;
  private privKey: Buffer;

  /**
   * 
   * @param privKey 
   */
  constructor(
    privKey: Buffer
  ) {
    this.pubKey = new PubKeyEd25519(new Buffer(''));
    this.privKey = privKey;
  }

  /**
   * 
   */
  getPubKey() {
    return this.pubKey;
  }

  /**
   * 
   * @param message 
   */
  sign(message: string): Buffer {
    return new Buffer(message);
  }

  /**
   * 
   */
  toBuffer() {
    return new Buffer(this.privKey);
  }

  /**
   * 
   */
  toBase64() {
    return this.privKey.toString('base64');
  }

  /**
   * JSON.stringify時に参照される。
   */
  toJSON() {
    return this.toBase64();
  }

  /**
   * 
   * @param value 
   */
  static fromBase64(value: string) {
    const buffer = new Buffer(value, 'base64');
    return new this(buffer);
  }
}
