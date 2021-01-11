import { Msg } from "../../types/msg";
import { AccAddress } from "../../types/address/acc-address";
import { ValAddress } from "../../types/address/val-address";
import { Coin } from "../../../api";

export class MsgBeginRedelegate extends Msg {
  /**
   *
   * @param delegator_address
   * @param validator_src_address
   * @param validator_dst_address
   * @param amount
   */
  constructor(
    public delegator_address: AccAddress,
    public validator_src_address: ValAddress,
    public validator_dst_address: ValAddress,
    public amount: Coin,
  ) {
    super();
  }

  /**
   *
   * @param value
   */
  public static fromJSON(value: any) {
    return new MsgBeginRedelegate(
      AccAddress.fromBech32(value.delegator_address),
      ValAddress.fromBech32(value.validator_src_address),
      ValAddress.fromBech32(value.validator_dst_address),
      value.amount,
    );
  }
}
