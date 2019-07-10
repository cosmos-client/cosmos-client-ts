import * as bech32 from 'bech32';
import * as crypto from 'crypto';

const prefix = {
  main: 'cosmos',
  account: 'acc',
  validator: 'val',
  consensus: 'cons',
  public: 'pub',
  operator: 'oper',
  address: 'addr'
};
const bech32Prefix = {
  accAddr: prefix.main,
  accPub: prefix.main + prefix.public,
  valAddr: prefix.main + prefix.validator + prefix.operator,
  valPub: prefix.main + prefix.validator + prefix.operator + prefix.public,
  consAddr: prefix.main + prefix.validator + prefix.consensus,
  consPub: prefix.main + prefix.validator + prefix.consensus + prefix.public
};

/**
 * 各種アドレスの基底クラス。
 */
export class Address {
  protected _value: Uint8Array;

  /**
   * 
   * @param value 
   */
  constructor(value: Uint8Array) {
    const addressLength = 20;
    if (value.length !== addressLength) {
      throw Error();
    }
    this._value = value;
  }

  private static hash160(buffer: Buffer): Buffer {
    const sha256Hash: Buffer = crypto.createHash('sha256')
      .update(buffer)
      .digest();
    try {
      return crypto.createHash('rmd160')
        .update(sha256Hash)
        .digest();
    } catch (err) {
      return crypto.createHash('ripemd160')
        .update(sha256Hash)
        .digest();
    }
  }

  /**
   * 公開鍵からアドレスのインスタンスを作成する。
   * @param publicKey 
   */
  public static fromPublicKey(publicKey: Buffer) {
    return new Address(this.hash160(publicKey));
  }
}

/**
 * AccAddressのクラス。
 */
export class AccAddress extends Address {
  /**
   * Bech32フォーマットのアドレスに変換する。
   */
  public toBech32() {
    const words = bech32.toWords(Buffer.from(this._value));
    return bech32.encode(bech32Prefix.accAddr, words);
  }

  /**
   * Bech32フォーマットのアドレスからインスタンスを作成する。
   * @param accAddress 
   */
  public static fromBech32(accAddress: string) {
    const { prefix, words } = bech32.decode(accAddress)
    if (prefix !== bech32Prefix.accAddr) {
      throw Error();
    }

    return new AccAddress(bech32.fromWords(words));
  }

  /**
   * JSON.stringify時に参照される。
   */
  public toJSON() {
    return this.toBech32();
  }
}
