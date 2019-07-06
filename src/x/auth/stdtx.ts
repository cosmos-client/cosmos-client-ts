import { Msg } from "../../cosmos-sdk/msg";
import { Coin } from "../../cosmos-sdk/coin/coin";
import { PubKey } from "../../tendermint/crypto/crypto";
import { Tx } from "../../cosmos-sdk/tx";

export class StdTx implements Tx {
  msg: Msg[];
  fee: StdFee;
  signatures: StdSignature[];
  memo: string;

  constructor(
    msgs: Msg[],
    fee: StdFee,
    sigs: StdSignature[],
    memo: string
  ) {
    this.msg = msgs;
    this.fee = fee;
    this.signatures = sigs;
    this.memo = memo;
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
  pub_key: PubKey[];
  signature: Uint8Array;
}
