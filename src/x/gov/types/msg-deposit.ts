import { Msg } from "../../../types/msg";
import { AccAddress } from "../../../types/address/acc-address";
import { Coin } from "../../../api";

export class MsgDeposit extends Msg {
  /**
   * @param proposal_id
   * @param depositor
   * @param amount
   */
  constructor(
    public proposal_id: number,
    public depositor: AccAddress,
    public amount: Coin[],
  ) {
    super();
  }

  /**
   *
   * @param value
   */
  public static fromJSON(value: any) {
    return new MsgDeposit(
      value.proposal_id,
      AccAddress.fromBech32(value.depositer),
      value.amount,
    );
  }
}
