import { Msg } from "../../../types/msg";
import { description } from "./description";
import { CommissionRates } from "./commission-rates";
import { AccAddress } from "../../../types/address/acc-address";
import { ValAddress } from "../../../types/address/val-address";
import { Coin } from "../../../types/coin";
import { PubKey } from "../../../tendermint";

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
    public description: description,
    public commission: CommissionRates,
    public min_self_delegation: number,
    public delegator_address: AccAddress,
    public validator_address: ValAddress,
    public pubkey: PubKey,
    public value: Coin,
  ) {
    super();
  }
  /**
   * @see Amino.reviver
   * @param value
   */
  public static fromJSON(value: any) {
    return new this(
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
