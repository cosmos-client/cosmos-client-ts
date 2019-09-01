import { StdTx } from "./std-tx";
import { PrivKey } from "../../../types/tendermint/priv-key";
import { StdSignDoc } from "./std-sign-doc";

/**
 * @see Auth.postTransaction
 */
export class BroadcastReq {
  /**
   * 
   * @param tx 
   * @param mode 
   */
  constructor(public tx: StdTx, public mode: "sync" = "sync") {}
}
