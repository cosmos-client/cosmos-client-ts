import { Msg } from "../../../types/msg";
import { AccAddress } from "../../../types/address/acc-address";
import { VoteOption } from "./vote-option";

export class MsgVote extends Msg {
  /**
   * @param proposal_id
   * @param voter
   * @param option
   */
  constructor(
    public proposal_id: number,
    public voter: AccAddress,
    public option: VoteOption,
  ) {
    super();
  }

  /**
   * @see Amino.reviver
   * @param value
   */
  public static fromJSON(value: any) {
    return new MsgVote(
      value.proposal_id,
      AccAddress.fromBech32(value.voter),
      value.option,
    );
  }
}
