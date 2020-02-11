import { Coin } from "../../../types";

export type DepositParams = {
  min_deposit?: Coin[];
  /**
   * `time.Duration`
   */
  max_deposit_period?: any;
};
