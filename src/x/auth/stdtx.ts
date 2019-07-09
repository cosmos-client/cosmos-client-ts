import { Coin } from "../../cosmos-sdk/coin/coin";
import { PubKey } from "../../tendermint/crypto/crypto";
import { Msg } from "../../cosmos-sdk/msg";
import { AminoRegisterConcrete } from "../../tendermint/amino";

/**
 * 
 */
@AminoRegisterConcrete('auth/StdTx')
export class StdTx {
  /**
   * 
   * @param msg 
   * @param fee 
   * @param signatures 
   * @param memo 
   */
  constructor(
    public msg: Msg[],
    public fee: StdFee,
    public signatures: StdSignature[],
    public memo: string
  ) {
    
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
