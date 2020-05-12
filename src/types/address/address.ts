import * as crypto from "crypto";

export enum Prefix {
  Cosmos = "cosmos",
  Public = "pub",
  Account = "acc",
  Validator = "val",
  Operator = "oper",
  Consensus = "cons",
}

export const bech32Prefix: { [key: string]: string } = {
  accAddr: Prefix.Cosmos,
  accPub: Prefix.Cosmos + Prefix.Public,
  valAddr: Prefix.Cosmos + Prefix.Validator + Prefix.Operator,
  valPub: Prefix.Cosmos + Prefix.Validator + Prefix.Operator + Prefix.Public,
  consAddr: Prefix.Cosmos + Prefix.Validator + Prefix.Consensus,
  consPub: Prefix.Cosmos + Prefix.Validator + Prefix.Consensus + Prefix.Public,
};

/**
 * 各種アドレスの基底クラス。
 */
export class Address {
  protected _value: Buffer;

  /**
   *
   * @param value
   */
  constructor(value: Buffer) {
    const addressLength = 20;
    if (value.length !== addressLength) {
      throw Error("Address must be 20 bytes length.");
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

  /**
   *
   * @param accAddr
   * @param accPub
   * @param valAddr
   * @param valPub
   * @param consAddr
   * @param consPub
   */
  static setBech32Prefix(
    accAddr: string,
    accPub: string,
    valAddr: string,
    valPub: string,
    consAddr: string,
    consPub: string,
  ) {
    bech32Prefix.accAddr = accAddr;
    bech32Prefix.accPub = accPub;
    bech32Prefix.valAddr = valAddr;
    bech32Prefix.valPub = valPub;
    bech32Prefix.consAddr = consAddr;
    bech32Prefix.consPub = consPub;
  }
}
