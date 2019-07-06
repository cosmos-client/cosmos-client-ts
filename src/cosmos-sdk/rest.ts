import { Coin } from "./coin/coin";
import { DecCoin } from "./coin/deccoin";

export interface BaseReq {
  from: string;
  memo: string;
  chain_id: string;
  account_number: number;
  sequence: number;
  fees: Coin[];
  gas_prices: DecCoin[];
  gas: string;
  gas_adjustment: string;
  simulate: boolean;
}