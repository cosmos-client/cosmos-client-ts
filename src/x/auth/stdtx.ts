import { Msg } from "../../cosmos-sdk/msg";
import { Coin } from "../../cosmos-sdk/coin/coin";
import { PubKey } from "../../tendermint/crypto/crypto";

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
  pub_key: PubKey[]; //todo
  signature: Uint8Array;
}
