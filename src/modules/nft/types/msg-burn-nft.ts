import { Msg } from "../../../types/msg";
import { AccAddress } from "../../../types/address/acc-address";

export class MsgBurnNFT implements Msg {
  /**
   * @param sender
   * @param id
   * @param denom
   */
  constructor(
    public sender: AccAddress,
    public id: string,
    public denom: string,
  ) {}

  public static fromJSON(value: any) {
    return new this(AccAddress.fromBech32(value.sender), value.id, value.denom);
  }
}
