import { Coin } from "./coin";
import { DecCoin } from "./deccoin";

export type ResponseWithHeight = {
  height: number;
  result: any;
}

export type GasEstimateResponse = {
  gas_estimate: number; // u64
}

export type BaseReq = {
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

export type ErrorResponse = {
  code?: number;
  error: string;
}
