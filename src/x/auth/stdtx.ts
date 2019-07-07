import { Coin } from "../../cosmos-sdk/coin/coin";
import { PubKey } from "../../tendermint/crypto/crypto";
import { Msg } from "../../cosmos-sdk/msg";

export interface StdTx {
  msg: Msg[];
  fee: StdFee;
  signatures: StdSignature[];
  memo: string;
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
