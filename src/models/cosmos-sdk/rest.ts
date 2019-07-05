import { Coin } from "./coin";
import { DecimalCoin } from "./decimal-coin";

export interface BaseReq {
  from: string;
  memo: string;
  chain_id: string;
  account_number: number;
  sequence: number;
  fees: Coin[];
  gas_prices: DecimalCoin[];
  gas: string;
  gas_adjustment: string;
  simulate: boolean;
}