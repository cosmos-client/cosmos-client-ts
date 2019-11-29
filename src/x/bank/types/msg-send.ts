import { Coin } from "../../../types/cosmos-sdk/coin";
import { AccAddress } from "../../../types/cosmos-sdk/address/acc-address";
import { Msg } from "../../../types/cosmos-sdk/msg";

/**
 * 
 */
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
      AccAddress.fromBech32(obj.from_address),
      AccAddress.fromBech32(obj.to_address),
      obj.amount
    )
  }
}
