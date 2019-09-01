import { Amino } from "../../../common/amino";
import { Coin } from "../../../types/cosmos-sdk/coin";
import { PubKey } from "../../../types/tendermint/pub-key";
import { Msg } from "../../../types/cosmos-sdk/msg";
import { StdFee } from "./std-fee";
import { StdSignature } from "./std-signature";

/**
 * 
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
