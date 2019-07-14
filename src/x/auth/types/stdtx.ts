import { Amino } from "../../../tendermint/amino";
import { Msg } from "../../../types/cosmos-sdk/tx_msg";
import { Coin } from "../../../types/cosmos-sdk/coin";
import { PubKey } from "../../../types/tendermint/pub-key";

/**
 * 署名済みトランザクションのクラス。
 */
@Amino.RegisterConcrete('auth/StdTx')
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
