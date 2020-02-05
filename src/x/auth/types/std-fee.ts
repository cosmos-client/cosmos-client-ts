import { Coin } from "../../../types/coin";

export type StdFee = {
  amount: Coin[];
  gas: string;
}
