import * as crypto from 'crypto';
import * as secp256k1 from 'secp256k1';
import { PubKey, PrivKey } from "./crypto";
import { Amino } from '../amino';

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

/**
 * secp256k1秘密鍵。
 */
@Amino.RegisterConcrete('tendermint/PrivKeySecp256k1')
export class PrivKeySecp256k1 implements PrivKey {
  private pubKey: PubKey;
  private privKey: Buffer;

  /**
   * 
   * @param privKey 
   */
  constructor(
    privKey: Buffer
  ) {
    this.pubKey = new PubKeySecp256k1(secp256k1.publicKeyCreate(privKey));
    this.privKey = privKey;
  }

  /**
   * 
   */
  public getPubKey() {
    return this.pubKey;
  }

  /**
   * 署名を作成する。
   * @param message 
   */
  public sign(message: string): Buffer {
    const hash = crypto.createHash('sha256').update(message).digest('hex');
    const buffer = Buffer.from(hash, 'hex');
    const signature = secp256k1.sign(buffer, this.privKey);

    return signature.signature;
  }

  /**
   * 
   */
  public toBuffer() {
    return new Buffer(this.privKey);
  }

  /**
   * 
   */
  public toBase64() {
    return this.privKey.toString('base64');
  }

  /**
   * JSON.stringify時に参照される。
   */
  public toJSON() {
    return this.toBase64();
  }

  /**
   * 
   * @param value 
   */
  public static fromBase64(value: string) {
    const buffer = new Buffer(value, 'base64');
    return new this(buffer);
  }
}
