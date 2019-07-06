import { Coin } from "../../cosmos-sdk/coin/coin";
import { AccAddress } from "../../cosmos-sdk/address/acc-address";
import { Msg } from "../../cosmos-sdk/msg";

export class MsgSend implements Msg {
  from_address: AccAddress;
  to_address: AccAddress;
  amount: Coin[];

  constructor(
    fromAddr: AccAddress,
    toAddr: AccAddress,
    amount: Coin[]
  ) {
    this.from_address = fromAddr;
    this.to_address = toAddr;
    this.amount = amount;
  }
}

export interface Input {
  address: string;
  coins: Coin[];
}

export interface Output {
  address: string;
  coins: Coin[];
}

export class MsgMultiSend implements Msg {
  inputs: Input[];
  outputs: Output[];

  constructor(
    inputs: Input[],
    outputs: Output[]
  ) {
    this.inputs = inputs;
    this.outputs = outputs;
  }
}
