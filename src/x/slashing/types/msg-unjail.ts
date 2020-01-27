import { Msg } from "../../../types/cosmos-sdk/msg";
import { ValAddress } from "../../../types/cosmos-sdk/address/val-address";

export class MsgUnjail implements Msg {
  /**
   * @param address
   */
  constructor(public address: ValAddress) {}
  
  /**
   * @see Amino.reviver
   */
  public static fromJSON(value: any) {
    return new this(ValAddress.fromBech32(value.address));
  }
}
