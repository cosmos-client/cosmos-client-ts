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
   * @param value
   */
  public static fromJSON(value: any) {
    return new this(
      AccAddress.fromBech32(value.delegator_address),
      ValAddress.fromBech32(value.validator_address),
      value.amount
    );
  }
}
