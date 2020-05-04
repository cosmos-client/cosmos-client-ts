import { AccAddress } from "../../../types/address/acc-address";
import { ValAddress } from "../../../types/address/val-address";
import { Msg } from "../../../types/msg";
import { Coin } from "../../../api";

export class MsgUndelegate extends Msg {
  /**
   * @param delegator_address
   * @param validator_address
   * @param amount
   */
  constructor(
    public delegator_address: AccAddress,
    public validator_address: ValAddress,
    public amount: Coin,
  ) {
    super();
  }

  /**
   *
   * @param value
   */
  public static fromJSON(value: any) {
    return new MsgUndelegate(
      AccAddress.fromBech32(value.delegator_address),
      ValAddress.fromBech32(value.validator_address),
      value.amount,
    );
  }
}
