import * as nacl from "tweetnacl";
import { PrivKey, PubKey } from "../types/key";

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
  constructor(privKey: Buffer) {
    const keypair = nacl.sign.keyPair.fromSeed(privKey);
    this.pubKey = new PubKeyEd25519(Buffer.from(keypair.publicKey));
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
    const keypair = nacl.sign.keyPair.fromSeed(this.privKey);
    return Buffer.from(nacl.sign(message, keypair.secretKey));
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
    const buffer = new Buffer(value, "base64");
    return new PrivKeyEd25519(buffer);
  }

  static fromJSON(value: any) {
    return PrivKeyEd25519.fromBase64(value);
  }
}

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
    return new PubKeyEd25519(buffer);
  }

  static fromJSON(value: any) {
    return PubKeyEd25519.fromBase64(value);
  }
}
