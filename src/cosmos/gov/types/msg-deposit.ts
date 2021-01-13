import { Msg } from "../../types/msg";
import { AccAddress } from "../../types/address/acc-address";
import { Coin } from "../../../generated/api";
import { codec } from "../../../codec";

export class MsgDeposit implements Msg {
  static "@type": "/cosmos.gov.v1beta1.MsgDeposit";
  "@type": "/cosmos.gov.v1beta1.MsgDeposit";

  /**
   * @param proposal_id
   * @param depositor
   * @param amount
   */
  constructor(
    public proposal_id: number,
    public depositor: AccAddress,
    public amount: Coin[],
  ) {}

  /**
   *
   * @param value
   */
  static fromJSON(value: any) {
    return new MsgDeposit(
      value.proposal_id,
      AccAddress.fromBech32(value.depositer),
      value.amount,
    );
  }

  getSignBytes() {
    return Buffer.from(codec.sortJSON(JSON.stringify(this)));
  }
}
