import { PrivKey } from "../priv-key";
import { PubKey } from "../pub-key";
import { PubKeyEd25519 } from "./pub-key";
import * as nacl from "tweetnacl";

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
    const keypair = nacl.sign.keyPair.fromSeed(privKey)
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
    const keypair = nacl.sign.keyPair.fromSeed(this.privKey)
    return Buffer.from(nacl.sign(message, keypair.secretKey))
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
