import { Msg } from "../../types/msg";
import { AccAddress } from "../../types/address/acc-address";
import { Coin } from "../../../api";
import { codec } from "../../../codec";

export class MsgSubmitProposal implements Msg {
  static "@type": "/cosmos.gov.v1beta1.MsgSubmitProposal";
  "@type": "/cosmos.gov.v1beta1.MsgSubmitProposal";

  /**
   * @param content
   * @param initial_deposit
   * @param proposer
   */
  constructor(
    public content: any,
    public initial_deposit: Coin[],
    public proposer: AccAddress,
  ) {}

  /**
   * @param value
   */
  static fromJSON(value: any) {
    return new MsgSubmitProposal(
      value.content,
      value.initial_deposit,
      AccAddress.fromBech32(value.proposer),
    );
  }

  getSignBytes() {
    return Buffer.from(codec.sortJSON(JSON.stringify(this)));
  }
}
