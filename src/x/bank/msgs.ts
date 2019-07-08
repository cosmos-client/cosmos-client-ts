import { Coin } from "../../cosmos-sdk/coin/coin";
import { Msg } from "../../cosmos-sdk/msg";
import { AccAddress } from "../../cosmos-sdk/address";
import { AminoRegisterConcrete } from "../../tendermint/amino";

@AminoRegisterConcrete('cosmos-sdk/MsgSend')
export class MsgSend implements Msg {
  constructor(
    public from_address: AccAddress,
    public to_address: AccAddress,
    public amount: Coin[]
  ) {
  }

  public static fromJSON(obj: any) {
    return new this(
      AccAddress.fromBech32(obj.from_Address),
      AccAddress.fromBech32(obj.to_address),
      obj.amount
    )
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

@AminoRegisterConcrete('cosmos-sdk/MsgMultiSend')
export class MsgMultiSend implements Msg {
  constructor(
    public inputs: Input[],
    public outputs: Output[]
  ) {
    
  }
}
