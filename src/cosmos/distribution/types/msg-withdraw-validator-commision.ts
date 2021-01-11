import { Msg } from "../../types/msg";
import { ValAddress } from "../../types/address/val-address";
import { codec } from "../../../codec";

export class MsgWithdrawValidatorCommission implements Msg {
  static "@type": "/cosmos.distribution.v1beta1.Msg/WithdrawValidatorCommission";
  "@type": "/cosmos.distribution.v1beta1.Msg/WithdrawValidatorCommission";

  /**
   * @param validator_address
   */
  constructor(public validator_address: ValAddress) {}

  /**
   *
   * @param value
   */
  static fromJSON(value: any) {
    return new MsgWithdrawValidatorCommission(
      ValAddress.fromBech32(value.validator_address),
    );
  }

  getSignBytes() {
    return Buffer.from(codec.sortJSON(JSON.stringify(this)));
  }
}
