import { Msg } from "../../../types/cosmos-sdk/msg";
import { AccAddress } from "../../../types/cosmos-sdk/address/acc-address";
import { ValAddress } from "../../../types/cosmos-sdk/address/val-address";
import { Coin } from "../../../types/cosmos-sdk/coin";

export class MsgDelegate implements Msg {
  /**
   * @param delegator_address
   * @param validator_address
   * @param amount
   */
  constructor(
    public delegator_address: AccAddress,
    public validator_address: ValAddress,
    public amount: Coin
  ) {}
  /**
   * @see Amino.reviver
   * @param obj
   */
  public static fromJSON(obj: any) {
    return new this(
      AccAddress.fromBech32(obj.delegator_address),
      ValAddress.fromBech32(obj.validator_address),
      obj.amount
    );
  }
}
