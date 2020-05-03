import * as crypto from "crypto";

const prefix = {
  cosmos: "cosmos",
  account: "acc",
  validator: "val",
  consensus: "cons",
  public: "pub",
  operator: "oper",
  address: "addr",
};
export const bech32Prefix = {
  accAddr: prefix.cosmos,
  accPub: prefix.cosmos + prefix.public,
  valAddr: prefix.cosmos + prefix.validator + prefix.operator,
  valPub: prefix.cosmos + prefix.validator + prefix.operator + prefix.public,
  consAddr: prefix.cosmos + prefix.validator + prefix.consensus,
  consPub: prefix.cosmos + prefix.validator + prefix.consensus + prefix.public,
};

/**
 * 各種アドレスの基底クラス。
 */
export class Address {
  protected _value: Buffer;

  /**
   *
   * @param value
   * @throws Error アドレスの長さが20でない場合、エラーがスローされます。
   */
  constructor(value: Buffer) {
    const addressLength = 20;
    if (value.length !== addressLength) {
      throw Error();
    }
    this._value = value;
  }

  static hash160(buffer: Buffer): Buffer {
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

  /**
   * 公開鍵からアドレスのインスタンスを作成する。
   * @param publicKey
   */
  static fromPublicKey(publicKey: Buffer) {
    return new Address(this.hash160(publicKey));
  }
}
