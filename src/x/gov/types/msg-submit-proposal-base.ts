import { Msg } from "../../../types/msg";
import { AccAddress } from "../../../types/address/acc-address";
import { Coin } from "../../../api";

export class MsgSubmitProposalBase extends Msg {
  /**
   * @param initial_deposit
   * @param proposer
   */
  constructor(public initial_deposit: Coin[], public proposer: AccAddress) {
    super();
  }

  /**
   * @param value
   */
  public static fromJSON(value: any) {
    return new MsgSubmitProposalBase(
      value.initial_deposit,
      AccAddress.fromBech32(value.proposer),
    );
  }
}
