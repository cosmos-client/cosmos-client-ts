import { PubKey } from "../pub-key";
import * as nacl from "tweetnacl";

/**
 * ed25519
 */
export class PubKeyEd25519 implements PubKey {
  private pubKey: Buffer;

  /**
   *
   * @param pubKey
   */
  constructor(pubKey: Buffer) {
    this.pubKey = pubKey;
  }

  /**
   * 
   * @param message
   * @param signature
   */
  verify(_: Buffer, signature: Buffer): boolean {
    return nacl.sign.open(signature, this.pubKey) !== null;
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
    return this.pubKey.toString("base64");
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
    const buffer = new Buffer(value, "base64");
    return new this(buffer);
  }
}
