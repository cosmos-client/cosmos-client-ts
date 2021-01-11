import { Msg } from "../../types/msg";
import { AccAddress } from "../../types/address/acc-address";
import { codec } from "../../../codec";

export class MsgSetWithdrawAddress implements Msg {
  static "@type": "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress";
  "@type": "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress";

  /**
   * @param delegator_address
   * @param withdraw_address
   */
  constructor(
    public delegator_address: AccAddress,
    public withdraw_address: AccAddress,
  ) {}

  /**
   *
   * @param value
   */
  static fromJSON(value: any) {
    return new MsgSetWithdrawAddress(
      AccAddress.fromBech32(value.delegator_address),
      AccAddress.fromBech32(value.withdraw_address),
    );
  }

  getSignBytes() {
    return Buffer.from(codec.sortJSON(JSON.stringify(this)));
  }
}
