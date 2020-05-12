import * as nacl from "tweetnacl";
import { PrivKey, PubKey } from "./key";

/**
 * ed25519
 */
export class PrivKeyEd25519 implements PrivKey {
  private pubKey: PubKeyEd25519;
  private privKey: Buffer;

  /**
   *
   * @param privKey
   */
  constructor(privKey: Buffer) {
    const keypair = nacl.sign.keyPair.fromSeed(new Uint8Array(privKey));
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
    const keypair = nacl.sign.keyPair.fromSeed(new Uint8Array(this.privKey));
    return Buffer.from(
      nacl.sign(new Uint8Array(message), new Uint8Array(keypair.secretKey)),
    );
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

  toJSONInCodec() {
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
   * message is not needed
   * @param signature
   */
  verify(signature: Buffer): boolean {
    return (
      nacl.sign.open(new Uint8Array(signature), new Uint8Array(this.pubKey)) !==
      null
    );
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

  toJSONInCodec() {
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
