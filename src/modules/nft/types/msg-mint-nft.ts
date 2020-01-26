import { Msg } from "../../../types/cosmos-sdk/msg";
import { AccAddress } from "../../../types/cosmos-sdk/address/acc-address";

export class MsgMintNFT implements Msg {
  /**
   * @param sender
   * @param recipient
   * @param id
   * @param denom
   * @param tokenURI
   */
  constructor(
    public sender: AccAddress,
    public recipient: AccAddress,
    public id: string,
    public denom: string,
    public tokenURI: string
  ) {}
  /**
   * @see Amino.reviver
   * @param obj
   */
  public static fromJSON(obj: any) {
    return new this(
      AccAddress.fromBech32(obj.sender),
      AccAddress.fromBech32(obj.recipient),
      obj.id,
      obj.denom,
      obj.tokenURI
    );
  }
}
