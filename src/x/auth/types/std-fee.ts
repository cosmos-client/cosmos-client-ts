import { Coin } from "../../../types/cosmos-sdk/coin";

export interface StdFee {
  amount: Coin[];
  gas: string;
}
