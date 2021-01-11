import { AccAddress } from "../../types/address/acc-address";
import { Msg } from "../../types/msg";
import { Coin } from "../../../api";
import { codec } from "../../../codec";

/**
 *
 */
export class MsgSend implements Msg {
  static "@type": "/cosmos.bank.v1beta1.Msg/Send";
  "@type": "/cosmos.bank.v1beta1.Msg/Send";

  /**
   *
   * @param from_address
   * @param to_address
   * @param amount
   */
  constructor(
    public from_address: AccAddress,
    public to_address: AccAddress,
    public amount: Coin[],
  ) {}

  /**
   *
   * @param value
   */
  static fromJSON(value: any) {
    return new MsgSend(
      AccAddress.fromBech32(value.from_address),
      AccAddress.fromBech32(value.to_address),
      value.amount,
    );
  }

  getSignBytes() {
    return Buffer.from(codec.sortJSON(JSON.stringify(this)));
  }
}
