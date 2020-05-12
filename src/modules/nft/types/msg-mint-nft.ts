import { Msg } from "../../../types/msg";
import { AccAddress } from "../../../types/address/acc-address";

export class MsgMintNFT implements Msg {
  /**
   * @param Sender
   * @param Recipient
   * @param ID
   * @param Denom
   * @param TokenURI
   */
  constructor(
    public Sender: AccAddress,
    public Recipient: AccAddress,
    public ID: string,
    public Denom: string,
    public TokenURI: string,
  ) {}

  public static fromJSON(value: any) {
    return new MsgMintNFT(
      AccAddress.fromBech32(value.Sender ? value.Sender : value.Recipient),
      AccAddress.fromBech32(value.Recipient),
      value.ID,
      value.Denom,
      value.TokenURI,
    );
  }
}
