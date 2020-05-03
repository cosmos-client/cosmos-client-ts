import * as crypto from "crypto";
import * as secp256k1 from "tiny-secp256k1";
import { PrivKey, PubKey } from "./key";
/**
 * secp256k1
 */
export class PrivKeySecp256k1 implements PrivKey {
  private pubKey: PubKey;
  private privKey: Buffer;

  /**
   *
   * @param privKey
   */
  constructor(privKey: Buffer) {
    this.pubKey = new PubKeySecp256k1(secp256k1.pointFromScalar(privKey)!);
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
  sign(message: Buffer): Buffer {
    const hash = crypto.createHash("sha256").update(message).digest();
    const signature = secp256k1.sign(hash, this.privKey);

    return signature;
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
    return this.privKey.toString("base64");
  }

  /**
   * JSON.stringify
   */
  toJSON() {
    return this.toBase64();
  }

  /**
   *
   * @param value
   */
  static fromBase64(value: string) {
    const buffer = new Buffer(value, "base64");
    return new PrivKeySecp256k1(buffer);
  }

  static fromJSON(value: any) {
    return PrivKeySecp256k1.fromBase64(value);
  }
}

/**
 * secp256k1公開鍵。
 */
export class PubKeySecp256k1 implements PubKey {
  private pubKey: Buffer;

  /**
   *
   * @param pubKey
   */
  constructor(pubKey: Buffer) {
    this.pubKey = pubKey;
  }

  /**
   * 署名がこの公開鍵から作られたものであるか検証する。
   * @param message
   * @param signature
   */
  verify(message: Buffer, signature: Buffer): boolean {
    const hash = crypto.createHash("sha256").update(message).digest();

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
    return new PubKeySecp256k1(buffer);
  }

  static fromJSON(value: any) {
    return PubKeySecp256k1.fromBase64(value);
  }
}
