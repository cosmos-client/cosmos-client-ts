import { Msg } from "../../types/msg";
import { AccAddress } from "../../types/address/acc-address";
import { Coin } from "../../../api";

export class MsgSubmitProposal implements Msg {
  /**
   * @param content
   * @param initial_deposit
   * @param proposer
   */
  constructor(
    public content: any,
    public initial_deposit: Coin[],
    public proposer: AccAddress,
  ) {
    super();
  }

  /**
   * @param value
   */
  public static fromJSON(value: any) {
    return new MsgSubmitProposal(
      value.content,
      value.initial_deposit,
      AccAddress.fromBech32(value.proposer),
    );
  }
}
