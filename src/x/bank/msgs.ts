import { Coin } from "../../cosmos-sdk/coin/coin";
import { Msg } from "../../cosmos-sdk/msg";
import { AccAddress } from "../../cosmos-sdk/address";

export class MsgSend implements Msg {
  public type = 'cosmos-sdk/MsgSend';
  public value: {
    from_address: AccAddress;
    to_address: AccAddress;
    amount: Coin[];
  }

  constructor(
    fromAddr: AccAddress,
    toAddr: AccAddress,
    amount: Coin[]
  ) {
    this.value = {
      from_address: fromAddr,
      to_address: toAddr,
      amount: amount
    };
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
  public type = 'cosmos-sdk/MsgMultiSend';
  public value: {
    inputs: Input[];
    outputs: Output[];
  }

  constructor(
    inputs: Input[],
    outputs: Output[]
  ) {
    this.value = {
      inputs: inputs,
      outputs: outputs
    };
  }
}
