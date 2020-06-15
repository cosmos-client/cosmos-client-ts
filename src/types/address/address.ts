import { PubKey } from "../../tendermint";

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

  /**
   *
   * @param pubKey
   */
  static fromPublicKey(pubKey: PubKey) {
    return new Address(pubKey.getAddress());
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
