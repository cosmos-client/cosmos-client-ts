import { PrivKey } from "../priv-key";
import { PubKey } from "../pub-key";
import { Amino } from "../../../common/amino";
import { PubKeySecp256k1 } from "./pub-key";
import * as crypto from 'crypto';
import * as secp256k1 from 'tiny-secp256k1';
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
    this.pubKey = new PubKeySecp256k1(secp256k1.pointFromScalar(privKey)!);
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

    return signature;
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
