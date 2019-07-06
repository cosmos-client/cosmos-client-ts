import { Coin } from "../../cosmos-sdk/coin/coin";
import { AccAddress } from "../../cosmos-sdk/address/acc-address";

export interface MsgSend {
  from_address: AccAddress;
  to_address: AccAddress;
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
