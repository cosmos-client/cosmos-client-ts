import { Msg } from "../../models/cosmos-sdk/msg";
import { Coin } from "../../models/cosmos-sdk/coin";

export interface StdTx {
  msg: Msg[];
  fee: StdFee;
  signatures: StdSignature[];
  memo: string;
}

export interface StdFee {
  amount: Coin[];
  gas: number; //u64
}

export interface StdSignDoc {
  account_number: number; //u64
  chain_id: string;
  fee: unknown;
  memo: string;
  msgs: unknown[];
  sequence: number; //u64
}

export interface StdSignature {
  pub_key: unknown[]; //todo
  signature: string;
}
