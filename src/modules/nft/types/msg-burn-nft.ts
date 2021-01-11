import { Msg } from "../../../cosmos/types/msg";
import { AccAddress } from "../../../cosmos/types/address/acc-address";

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

  static fromJSON(value: any) {
    return new MsgBurnNFT(
      AccAddress.fromBech32(value.sender),
      value.id,
      value.denom,
    );
  }
}
