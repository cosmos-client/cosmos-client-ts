import { Msg } from "../../../types/msg";
import { ValAddress } from "../../../types/address/val-address";
import { ValidatorDescription } from "../../../api";

export class MsgEditValidator extends Msg {
  /**
   * @param description
   * @param validator_address
   * @param commission_rate
   * @param min_self_delegation
   */
  constructor(
    public description: ValidatorDescription,
    public validator_address: ValAddress,
    public committion_rate: string,
    public min_self_delegation: string,
  ) {
    super();
  }

  /**
   *
   * @param value
   */
  public static fromJSON(value: any) {
    return new MsgEditValidator(
      value.description,
      ValAddress.fromBech32(value.validator_address),
      value.commission_rate,
      value.min_self_delegation,
    );
  }
}
