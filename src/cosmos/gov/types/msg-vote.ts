import { Msg } from "../../types/msg";
import { AccAddress } from "../../types/address/acc-address";
import { codec } from "../../../codec";

export class MsgVote implements Msg {
  static "@type": "/cosmos.gov.v1beta1.MsgVote";
  "@type": "/cosmos.gov.v1beta1.MsgVote";

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

  getSignBytes() {
    return Buffer.from(codec.sortJSON(JSON.stringify(this)));
  }
}
