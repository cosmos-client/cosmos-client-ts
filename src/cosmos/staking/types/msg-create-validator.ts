import { Msg } from "../../types/msg";
import { AccAddress } from "../../types/address/acc-address";
import { ValAddress } from "../../types/address/val-address";
import { PubKey } from "../../base/tendermint";
import { ValidatorDescription, Coin } from "../../../api";

export class MsgCreateValidator extends Msg {
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
  ) {
    super();
  }

  /**
   *
   * @param value
   */
  public static fromJSON(value: any) {
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
}
