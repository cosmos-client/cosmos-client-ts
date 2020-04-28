import { Msg } from "../../../types/msg";
import { AccAddress } from "../../../types/address/acc-address";

export class MsgMintNFT implements Msg {
  /**
   * @param sender
   * @param recipient
   * @param id
   * @param denom
   * @param token_uri
   */
  constructor(
    public sender: AccAddress,
    public recipient: AccAddress,
    public id: string,
    public denom: string,
    public token_uri: string,
  ) {}

  public static fromJSON(value: any) {
    return new MsgMintNFT(
      AccAddress.fromBech32(value.sender),
      AccAddress.fromBech32(value.recipient),
      value.id,
      value.denom,
      value.token_uri,
    );
  }
}
