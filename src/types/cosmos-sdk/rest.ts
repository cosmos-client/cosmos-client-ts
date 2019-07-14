import { Coin } from "./coin";
import { DecCoin } from "./deccoin";

export interface GasEstimateResponse {
  gas_estimate: bigint;
}

export interface BaseReq {
  from: string;
  memo: string;
  chain_id: string;
  account_number: bigint;
  sequence: bigint;
  fees: Coin[];
  gas_prices: DecCoin[];
  gas: string;
  gas_adjustment: string;
  simulate: boolean;
}

export interface ErrorResponse {
  code?: number;
  error: string;
}
