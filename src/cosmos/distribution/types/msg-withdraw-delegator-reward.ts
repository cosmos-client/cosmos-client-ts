import { Msg } from "../../types/msg";
import { AccAddress } from "../../types/address/acc-address";
import { ValAddress } from "../../types/address/val-address";
import { codec } from "../../../codec";

export class MsgWithdrawDelegatorReward implements Msg {
  static "@type": "/cosmos.distribution.v1beta1.Msg/WithdrawDelegatorReward";
  "@type": "/cosmos.distribution.v1beta1.Msg/WithdrawDelegatorReward";

  /**
   *
   * @param delegator_address
   * @param validator_address
   */
  constructor(
    public delegator_address: AccAddress,
    public validator_address: ValAddress,
  ) {}

  /**
   *
   * @param value
   */
  static fromJSON(value: any) {
    return new MsgWithdrawDelegatorReward(
      AccAddress.fromBech32(value.delegator_address),
      ValAddress.fromBech32(value.validator_address),
    );
  }

  getSignBytes() {
    return Buffer.from(codec.sortJSON(JSON.stringify(this)));
  }
}
