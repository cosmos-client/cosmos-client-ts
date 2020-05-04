import { Msg } from "../../../types/msg";
import { ValAddress } from "../../../types/address/val-address";

export class MsgUnjail extends Msg {
  /**
   * @param address
   */
  constructor(public address: ValAddress) {
    super();
  }

  /**
   *
   * @param value
   */
  public static fromJSON(value: any) {
    return new MsgUnjail(ValAddress.fromBech32(value.address));
  }
}
