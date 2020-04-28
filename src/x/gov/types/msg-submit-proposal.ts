import { Msg } from "../../../types/msg";
import { AccAddress } from "../../../types/address/acc-address";
import { Content } from "./content";
import { Coin } from "../../../types/coin";

export class MsgSubmitProposal extends Msg {
  /**
   * @param content
   * @param initial_deposit
   * @param proposer
   */
  constructor(
    public content: Content,
    public initial_deposit: Coin[],
    public proposer: AccAddress,
  ) {
    super();
  }

  /**
   * @see Amino.reviver
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
