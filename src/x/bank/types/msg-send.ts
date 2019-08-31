import { Coin } from "../../../types/cosmos-sdk/coin";
import { AccAddress } from "../../../types/cosmos-sdk/address/acc-address";
import { Amino } from "../../../tendermint/amino";

/**
 * 
 */
@Amino.RegisterConcrete('cosmos-sdk/MsgSend')
export class MsgSend {
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
