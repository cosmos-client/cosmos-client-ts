import { Coin } from "../../../types/coin";

export interface StdFee {
  amount: Coin[];
  gas: string;
}
