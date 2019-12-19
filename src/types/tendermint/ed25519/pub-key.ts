import { PubKey } from "../pub-key";
import * as crypto from "crypto";
import * as secp256k1 from "tiny-secp256k1";

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
  verify(message: string, signature: Buffer): boolean {
    const hash = crypto
      .createHash("sha256")
      .update(message)
      .digest("hex");
    const buffer = Buffer.from(hash, "hex");

    return secp256k1.verify(buffer, signature, this.pubKey);
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
