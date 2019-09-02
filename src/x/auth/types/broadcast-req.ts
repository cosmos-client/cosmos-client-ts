import { StdTx } from "./std-tx";

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
