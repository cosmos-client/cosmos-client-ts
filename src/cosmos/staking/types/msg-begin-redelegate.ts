import { Msg } from "../../types/msg";
import { AccAddress } from "../../types/address/acc-address";
import { ValAddress } from "../../types/address/val-address";
import { Coin } from "../../../api";
import { codec } from "../../../codec";

export class MsgBeginRedelegate implements Msg {
  static "@type": "/cosmos.staking.v1beta1.MsgBeginRedelegate";
  "@type": "/cosmos.staking.v1beta1.MsgBeginRedelegate";

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
  ) {}

  /**
   *
   * @param value
   */
  static fromJSON(value: any) {
    return new MsgBeginRedelegate(
      AccAddress.fromBech32(value.delegator_address),
      ValAddress.fromBech32(value.validator_src_address),
      ValAddress.fromBech32(value.validator_dst_address),
      value.amount,
    );
  }

  getSignBytes() {
    return Buffer.from(codec.sortJSON(JSON.stringify(this)));
  }
}
