import { Coin } from "../../cosmos-sdk/coin/coin";
import { PubKey } from "../../tendermint/crypto/crypto";
import { Msg } from "../../cosmos-sdk/msg";
import { AminoRegisteredConcrete } from "../../tendermint/amino";

export class StdTx implements AminoRegisteredConcrete {
  public readonly type = 'auth/StdTx';
  public value: {
    msg: Msg[];
    fee: StdFee;
    signatures: StdSignature[];
    memo: string;
  }

  constructor(
    msg: Msg[],
    fee: StdFee,
    signatures: StdSignature[],
    memo: string
  ) {
    this.value = {
      msg: msg,
      fee: fee,
      signatures: signatures,
      memo: memo
    }
  }
}

export interface StdFee {
  amount: Coin[];
  gas: bigint;
}

export interface StdSignDoc {
  account_number: bigint;
  chain_id: string;
  fee: StdFee;
  memo: string;
  msgs: Msg[];
  sequence: bigint;
}

export interface StdSignature {
  pub_key: PubKey;
  signature: string;
}
