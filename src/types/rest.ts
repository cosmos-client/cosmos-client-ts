import { Coin } from "./coin";
import { DecCoin } from "./deccoin";

export type ResponseWithHeight = {
  height: number;
  result: any;
};

export type GasEstimateResponse = {
  gas_estimate: number; // u64
};

/**
 *
 */
export type BaseReq = {
  from: string;
  memo: string;
  chain_id: string;
  account_number: number;
  sequence: number;
  /**
   * The maximum amount the user is willing to pay in fees. Alternative to specifying gas prices.
   */
  fees: Coin[];
  /**
   * The amount per unit of gas the user is willing to pay in fees. Alternative to specifying fees.
   */
  gas_prices: DecCoin[];
  /**
   * Option chosen by the users for how to calculate how much gas they will need to pay. A common option is "auto" which generates an automatic estimate.
   */
  gas: string;
  /**
   * To adjust the estimate of gas by a scalar value, used to avoid underestimating the amount of gas required.
   */
  gas_adjustment: string;
  simulate: boolean;
};

export class ErrorResponse extends Error {
  code?: number;
  error: string;

  constructor(code: number | undefined, error: string) {
    super(error);
    if (code) {
      this.code = code;
    }
    this.error = error;
  }
}
