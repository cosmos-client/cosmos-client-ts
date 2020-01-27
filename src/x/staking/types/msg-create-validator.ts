import { Msg } from "../../../types/cosmos-sdk/msg";
import { description } from "./description";
import { CommissionRates } from "./commission-rates";
import { AccAddress } from "../../../types/cosmos-sdk/address/acc-address";
import { ValAddress } from "../../../types/cosmos-sdk/address/val-address";
import { PubKey } from "../../../types/tendermint/pub-key";
import { Coin } from "../../../types/cosmos-sdk/coin";

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
    public publey: PubKey,
    public value: Coin
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
      value.value
    );
  }
}
