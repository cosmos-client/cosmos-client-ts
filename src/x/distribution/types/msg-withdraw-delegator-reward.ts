import { Msg } from "../../../types/msg";
import { AccAddress } from "../../../types/address/acc-address";
import { ValAddress } from "../../../types/address/val-address";

export class MsgWithdrawDelegatorReward extends Msg {
  /**
   *
   * @param delegator_address
   * @param validator_address
   */
  constructor(
    public delegator_address: AccAddress,
    public validator_address: ValAddress,
  ) {
    super();
  }

  /**
   * @see Amino.reviver
   */
  public static fromJSON(value: any) {
    return new MsgWithdrawDelegatorReward(
      AccAddress.fromBech32(value.delegator_address),
      ValAddress.fromBech32(value.validator_address),
    );
  }
}
