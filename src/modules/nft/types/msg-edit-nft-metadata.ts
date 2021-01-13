import { Msg } from "../../../cosmos/types/msg";
import { AccAddress } from "../../../cosmos/types/address/acc-address";

export class MsgEditNFTMetadata implements Msg {
  /**
   * @param sender
   * @param id
   * @param denom
   * @param token_uri
   */
  constructor(
    public sender: AccAddress,
    public id: string,
    public denom: string,
    public token_uri: string,
  ) {}

  static fromJSON(value: any) {
    return new MsgEditNFTMetadata(
      AccAddress.fromBech32(value.sender),
      value.id,
      value.denom,
      value.token_uri,
    );
  }
}
