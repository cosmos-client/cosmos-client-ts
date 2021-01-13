import { AccAddress } from "../../types/address/acc-address";
import { ValAddress } from "../../types/address/val-address";
import { Msg } from "../../types/msg";
import { Coin } from "../../../generated/api";
import { codec } from "../../../codec";

export class MsgUndelegate implements Msg {
  static "@type": "/cosmos.staking.v1beta1.MsgUndelegate";
  "@type": "/cosmos.staking.v1beta1.MsgUndelegate";

  /**
   * @param delegator_address
   * @param validator_address
   * @param amount
   */
  constructor(
    public delegator_address: AccAddress,
    public validator_address: ValAddress,
    public amount: Coin,
  ) {}

  /**
   *
   * @param value
   */
  static fromJSON(value: any) {
    return new MsgUndelegate(
      AccAddress.fromBech32(value.delegator_address),
      ValAddress.fromBech32(value.validator_address),
      value.amount,
    );
  }

  getSignBytes() {
    return Buffer.from(codec.sortJSON(JSON.stringify(this)));
  }
}
