import { AccAddress } from "../../../types/address/acc-address";
import { Msg } from "../../../types/msg";
import { Coin } from "../../../api";

/**
 *
 */
export class MsgSend extends Msg {
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
  ) {
    super();
  }

  /**
   *
   * @param value
   */
  public static fromJSON(value: any) {
    return new MsgSend(
      AccAddress.fromBech32(value.from_address),
      AccAddress.fromBech32(value.to_address),
      value.amount,
    );
  }
}
