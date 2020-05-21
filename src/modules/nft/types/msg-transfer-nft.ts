import { AccAddress } from "../../../types/address/acc-address";
import { Msg } from "../../../types/msg";

export class MsgTransferNFT implements Msg {
  constructor(
    public sender: AccAddress,
    public recipient: AccAddress,
    public denom: string,
    public id: string,
  ) {}

  static fromJSON(value: any) {
    return new MsgTransferNFT(
      AccAddress.fromBech32(value.sender),
      AccAddress.fromBech32(value.recipient),
      value.denom,
      value.id,
    );
  }
}
