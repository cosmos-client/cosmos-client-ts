import { AccAddress } from "../../../types/address/acc-address";
import { Msg } from "../../../types/msg";

export class MsgTransferNFT implements Msg {
  constructor(
    public Sender: AccAddress,
    public Recipient: AccAddress,
    public Denom: string,
    public ID: string,
  ) {}

  public static fromJSON(value: any) {
    return new MsgTransferNFT(
      AccAddress.fromBech32(value.Sender),
      AccAddress.fromBech32(value.Recipient),
      value.Denom,
      value.ID,
    );
  }
}
