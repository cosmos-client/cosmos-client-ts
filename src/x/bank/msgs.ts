import { Coin } from "../../models/cosmos-sdk/coin";

export interface MsgSend {
  from_address: string;
  to_address: string;
  amount: Coin[];
}

export interface Input {
  address: string;
  coins: Coin[];
}

export interface Output {
  address: string;
  coins: Coin[];
}

export interface MsgMultiSend {
  inputs: Input[];
  outputs: Output[];
}
