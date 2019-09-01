import { PrivKey } from "../priv-key";
import { PubKey } from "../pub-key";
import { PubKeyEd25519 } from "./pub-key";
import { Amino } from "../../../common/amino";

/**
 * ed25519
 */
@Amino.RegisterConcrete('tendermint/PrivKeyEd25519')
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
    this.pubKey = new PubKeyEd25519(new Buffer(''));
    this.privKey = privKey;
  }

  /**
   * 
   */
  public getPubKey() {
    return this.pubKey;
  }

  /**
   * 
   * @param message 
   */
  public sign(message: string): Buffer {
    return new Buffer('');
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
