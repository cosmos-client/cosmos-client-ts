import { Coin } from "./coin";
import { DecCoin } from "./deccoin";

export interface ResponseWithHeight {
  height: number;
  result: any;
}

export interface GasEstimateResponse {
  gas_estimate: number; // u64
}

export interface BaseReq {
  from: string;
  memo: string;
  chain_id: string;
  account_number: string; // u64
  sequence: string; // u64
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
