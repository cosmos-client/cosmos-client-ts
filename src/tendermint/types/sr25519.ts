import * as crypto from "crypto";
import * as sr25519 from "../sr25519/src";
import { PrivKey, PubKey } from "./key";

/**
 * sr25519
 */
export class PrivKeySr25519 implements PrivKey {
  private pubKey: PubKeySr25519;
  private privKey: Buffer;

  /**
   *
   * @param privKey
   */
  constructor(privKey: Buffer) {
    const keypair = sr25519.keypairFromSeed(new Uint8Array(privKey));
    this.pubKey = new PubKeySr25519(Buffer.from(keypair.slice(64, 96)));
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
  sign(message: Buffer) {
    const keypair = sr25519.keypairFromSeed(new Uint8Array(this.privKey));
    const privKey = keypair.slice(0, 64);
    return Buffer.from(sr25519.sign(this.pubKey.toBuffer(), privKey, message));
  }

  /**
   *
   */
  toBuffer() {
    return Buffer.from(this.privKey);
  }

  /**
   *
   */
  toBase64() {
    return this.privKey.toString("base64");
  }

  toJSONInCodec() {
    return this.toBase64();
  }

  /**
   *
   * @param value
   */
  static fromBase64(value: string) {
    const buffer = Buffer.from(value, "base64");
    return new PrivKeySr25519(buffer);
  }

  static fromJSON(value: any) {
    return PrivKeySr25519.fromBase64(value);
  }
}

/**
 * sr25519
 */
export class PubKeySr25519 implements PubKey {
  private pubKey: Buffer;

  /**
   *
   * @param pubKey
   */
  constructor(pubKey: Buffer) {
    this.pubKey = pubKey;
  }

  getAddress() {
    const hash = crypto.createHash("sha256").update(this.pubKey).digest();
    return hash.subarray(0, 20);
  }

  /**
   *
   * @param message
   * @param signature
   */
  verify(signature: Buffer, message: Buffer) {
    return sr25519.verify(
      new Uint8Array(signature),
      new Uint8Array(message),
      new Uint8Array(this.pubKey),
    );
  }

  /**
   *
   */
  toBuffer() {
    return Buffer.from(this.pubKey);
  }

  /**
   *
   */
  toBase64() {
    return this.pubKey.toString("base64");
  }

  toJSONInCodec() {
    return this.toBase64();
  }

  /**
   *
   */
  static fromBase64(value: string) {
    const buffer = Buffer.from(value, "base64");
    return new PubKeySr25519(buffer);
  }

  static fromJSON(value: any) {
    return PubKeySr25519.fromBase64(value);
  }
}
