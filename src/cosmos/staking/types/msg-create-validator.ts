import { Msg } from "../../types/msg";
import { AccAddress } from "../../types/address/acc-address";
import { ValAddress } from "../../types/address/val-address";
import { ValidatorDescription, Coin } from "../../../api";
import { codec } from "../../../codec";
import { PubKey } from "../../crypto";

export class MsgCreateValidator implements Msg {
  static "@type": "/cosmos.staking.v1beta1.MsgCreateValidator";
  "@type": "/cosmos.staking.v1beta1.MsgCreateValidator";

  /**
   * @param description
   * @param commission
   * @param min_self_delegation
   * @param delegator_address
   * @param validator_address
   * @param pubkey
   * @param value
   */
  constructor(
    public description: ValidatorDescription,
    public commission: {
      rate: string;
      max_rate: string;
      max_change_rate: string;
    },
    public min_self_delegation: number,
    public delegator_address: AccAddress,
    public validator_address: ValAddress,
    public pubkey: PubKey,
    public value: Coin,
  ) {}

  /**
   *
   * @param value
   */
  static fromJSON(value: any) {
    return new MsgCreateValidator(
      value.description,
      value.commission,
      value.min_self_delegation,
      AccAddress.fromBech32(value.delegator_address),
      ValAddress.fromBech32(value.validator_address),
      value.pubkey,
      value.value,
    );
  }

  getSignBytes() {
    return Buffer.from(codec.sortJSON(JSON.stringify(this)));
  }
}
