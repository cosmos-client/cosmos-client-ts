import * as crypto from "crypto";
import * as secp256k1 from "tiny-secp256k1";
import { PrivKey, PubKey } from "..";
/**
 * secp256k1
 */
export class PrivKeySecp256k1 implements PrivKey {
  static "@type": "/cosmos.crypto.secp256k1.PrivKey";
  "@type": "/cosmos.crypto.secp256k1.PrivKey";

  private _pubKey: PubKeySecp256k1;
  private _privKey: Buffer;

  /**
   *
   * @param privKey
   */
  constructor(privKey: Buffer) {
    this._pubKey = new PubKeySecp256k1(secp256k1.pointFromScalar(privKey)!);
    this._privKey = privKey;
  }

  /**
   *
   */
  bytes() {
    return Buffer.from(this._privKey);
  }

  /**
   *
   * @param message
   */
  sign(message: Buffer) {
    const hash = crypto.createHash("sha256").update(message).digest();
    const signature = secp256k1.sign(hash, this._privKey);

    return signature;
  }

  /**
   *
   */
  pubKey() {
    return this._pubKey;
  }

  /**
   *
   */
  toBase64() {
    return this._privKey.toString("base64");
  }

  /**
   *
   * @param value
   */
  static fromBase64(value: string) {
    const buffer = Buffer.from(value, "base64");
    return new PrivKeySecp256k1(buffer);
  }

  toJSON() {
    return {
      key: this.toBase64(),
    };
  }

  static fromJSON(value: any) {
    return PrivKeySecp256k1.fromBase64(value);
  }
}

/**
 * secp256k1公開鍵。
 */
export class PubKeySecp256k1 implements PubKey {
  static "@type": "/cosmos.crypto.secp256k1.PubKey";
  "@type": "/cosmos.crypto.secp256k1.PubKey";

  private pubKey: Buffer;

  /**
   *
   * @param pubKey
   */
  constructor(pubKey: Buffer) {
    this.pubKey = pubKey;
  }

  hash160(buffer: Buffer): Buffer {
    const sha256Hash: Buffer = crypto
      .createHash("sha256")
      .update(buffer)
      .digest();
    try {
      return crypto.createHash("rmd160").update(sha256Hash).digest();
    } catch (err) {
      return crypto.createHash("ripemd160").update(sha256Hash).digest();
    }
  }

  address() {
    return this.hash160(this.pubKey);
  }

  /**
   *
   */
  bytes() {
    return Buffer.from(this.pubKey);
  }

  /**
   *
   * @param msg
   * @param sig
   */
  verifySignature(msg: Buffer, sig: Buffer) {
    const hash = crypto.createHash("sha256").update(msg).digest();

    return secp256k1.verify(hash, sig, this.pubKey);
  }

  /**
   *
   */
  toBase64() {
    return this.pubKey.toString("base64");
  }

  /**
   *
   */
  static fromBase64(value: string) {
    const buffer = Buffer.from(value, "base64");
    return new PubKeySecp256k1(buffer);
  }

  toJSON() {
    return {
      key: this.toBase64(),
    };
  }

  static fromJSON(value: any) {
    return PubKeySecp256k1.fromBase64(value?.key);
  }
}
