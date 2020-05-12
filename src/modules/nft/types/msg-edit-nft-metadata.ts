import { Msg } from "../../../types/msg";
import { AccAddress } from "../../../types/address/acc-address";

export class MsgEditNFTMetadata implements Msg {
  /**
   * @param Sender
   * @param ID
   * @param Denom
   * @param TokenURI
   */
  constructor(
    public Sender: AccAddress,
    public ID: string,
    public Denom: string,
    public TokenURI: string,
  ) {}

  public static fromJSON(value: any) {
    return new MsgEditNFTMetadata(
      AccAddress.fromBech32(value.Sender),
      value.ID,
      value.Denom,
      value.TokenURI,
    );
  }
}
