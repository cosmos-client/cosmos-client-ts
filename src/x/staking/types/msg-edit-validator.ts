import { Msg } from "../../../types/cosmos-sdk/msg";
import { description } from "./description";
import { ValAddress } from "../../../types/cosmos-sdk/address/val-address";
import { CommissionRates } from "./commission-rates";

export class MsgEditValidator implements Msg {
  /**
   * @param description
   * @param address
   * @param commission_rate
   * @param min_self_delegation
   */
  constructor(
    public descriiption: description,
    public address: ValAddress,
    public committion_rate: CommissionRates,
    public min_self_delegation: number
  ) {}
  
  /**
   * @see Amino.reviver
   * @param value
   */
  public static fromJSON(value: any) {
    return new this(
      value.description,
      ValAddress.fromBech32(value.validator_address),
      value.commission_rate,
      value.min_self_delegation
    );
  }
}
