import { Msg } from "../../../types/cosmos-sdk/msg";
import { ValAddress } from "../../../types/cosmos-sdk/address/val-address";

export class MsgWithdrawValidatorCommission implements Msg {
  /**
   * @param validator_address
   */
  constructor(public validator_address: ValAddress) {}
  
  /**
   * @see Amino.reviver
   */

  public static fromJSON(value: any) {
    return new this(ValAddress.fromBech32(value.validator_address));
  }
}
