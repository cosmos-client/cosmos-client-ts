import { Msg } from "../../../types/cosmos-sdk/msg";
import { StdFee } from "./std-fee";
import { StdSignature } from "./std-signature";
import { Amino } from "../../../common";

/**
 * 
 */
export class StdTx {
  /**
   * 
   * @param msg 
   * @param fee 
   * @param signatures 
   * @param memo 
   */
  constructor(
    public msg: Amino.Concrete<Msg>[],
    public fee: StdFee,
    public signatures: StdSignature[],
    public memo: string
  ) {
    
  }
}
