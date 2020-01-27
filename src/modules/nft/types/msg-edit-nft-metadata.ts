import { Msg } from "../../../types/cosmos-sdk/msg";
import { AccAddress } from "../../../types/cosmos-sdk/address/acc-address";

export class MsgEditNFTMetadata implements Msg {
  /**
   * @param sender
   * @param id
   * @param denom
   * @param token_rui
   */
  constructor(
    public sender: AccAddress,
    public id: string,
    public denom: string,
    public token_uri: string
  ) {}

  public static fromJSON(value: any) {
    return new this(
      AccAddress.fromBech32(value.sender),
      value.id,
      value.denom,
      value.token_uri
    );
  }
}
