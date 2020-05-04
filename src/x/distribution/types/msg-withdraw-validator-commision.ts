import { Msg } from "../../../types/msg";
import { ValAddress } from "../../../types/address/val-address";

export class MsgWithdrawValidatorCommission extends Msg {
  /**
   * @param validator_address
   */
  constructor(public validator_address: ValAddress) {
    super();
  }

  /**
   *
   * @param value
   */
  public static fromJSON(value: any) {
    return new MsgWithdrawValidatorCommission(
      ValAddress.fromBech32(value.validator_address),
    );
  }
}
