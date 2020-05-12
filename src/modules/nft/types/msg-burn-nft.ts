import { Msg } from "../../../types/msg";
import { AccAddress } from "../../../types/address/acc-address";

export class MsgBurnNFT implements Msg {
  /**
   * @param Sender
   * @param ID
   * @param Denom
   */
  constructor(
    public Sender: AccAddress,
    public ID: string,
    public Denom: string,
  ) {}

  public static fromJSON(value: any) {
    return new MsgBurnNFT(
      AccAddress.fromBech32(value.Sender),
      value.ID,
      value.Denom,
    );
  }
}
