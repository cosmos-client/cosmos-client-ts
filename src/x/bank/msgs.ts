import { Coin } from "../../cosmos-sdk/coin/coin";
import { Msg } from "../../cosmos-sdk/msg";
import { AccAddress } from "../../cosmos-sdk/address";
import { Amino } from "../../tendermint/amino";

/**
 * MsgSendのクラス。
 * アセット送信するMsg。
 */
@Amino.RegisterConcrete('cosmos-sdk/MsgSend')
export class MsgSend implements Msg {
  /**
   * 
   * @param from_address 
   * @param to_address 
   * @param amount 
   */
  constructor(
    public from_address: AccAddress,
    public to_address: AccAddress,
    public amount: Coin[]
  ) {
  }

  /**
   * @see Amino.reviver
   * @param obj 
   */
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

/**
 * 
 */
@Amino.RegisterConcrete('cosmos-sdk/MsgMultiSend')
export class MsgMultiSend implements Msg {
  /**
   * 
   * @param inputs 
   * @param outputs 
   */
  constructor(
    public inputs: Input[],
    public outputs: Output[]
  ) {
    
  }
}
