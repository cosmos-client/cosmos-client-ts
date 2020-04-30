import { Msg } from "../../../types/msg";
import { Description } from "./description";
import { ValAddress } from "../../../types/address/val-address";
import { Dec } from "../../../types";
import { Int } from "../../../types/int";

export class MsgEditValidator extends Msg {
  /**
   * @param description
   * @param validator_address
   * @param commission_rate
   * @param min_self_delegation
   */
  constructor(
    public description: Description,
    public validator_address: ValAddress,
    public committion_rate: Dec,
    public min_self_delegation: Int,
  ) {
    super();
  }

  /**
   * @see Amino.reviver
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
