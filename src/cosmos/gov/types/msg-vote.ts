import { Msg } from "../../types/msg";
import { AccAddress } from "../../types/address/acc-address";

export class MsgVote implements Msg {
  /**
   * @param proposal_id
   * @param voter
   * @param option
   */
  constructor(
    public proposal_id: number,
    public voter: AccAddress,
    public option: any,
  ) {}

  /**
   * @param value
   */
  static fromJSON(value: any) {
    return new MsgVote(
      value.proposal_id,
      AccAddress.fromBech32(value.voter),
      value.option,
    );
  }
}
