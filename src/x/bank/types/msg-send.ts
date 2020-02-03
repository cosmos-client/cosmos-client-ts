import { Coin } from "../../../types/coin";
import { AccAddress } from "../../../types/address/acc-address";
import { Msg } from "../../../types/msg";

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
    public amount: Coin[]
  ) {
    super();
  }

  /**
   * @see Amino.reviver
   * @param value
   */
  public static fromJSON(value: any) {
    return new this(
      AccAddress.fromBech32(value.from_address),
      AccAddress.fromBech32(value.to_address),
      value.amount
    );
  }
}
