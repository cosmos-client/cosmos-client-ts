import { AnyI } from "../../../../codec/any";
import { AccAddress, Msg } from "../../../../cosmos/types";
import { codec } from "../../../../codec";

/**
 *
 */
export class MsgCreateClient implements Msg {
  static "@type": "/ibc.core.client.v1.MsgCreateClient";
  "@type": "/ibc.core.client.v1.MsgCreateClient";

  /**
   *
   * @param client_state
   * @param consensus_state
   * @param signer
   */
  constructor(
    public client_state?: AnyI,
    public consensus_state?: AnyI,
    public signer?: AccAddress,
  ) {}

  /**
   *
   * @param value
   */
  static fromJSON(value: any) {
    return new MsgCreateClient(
      value?.client_state,
      value?.consensus_state,
      AccAddress.fromBech32(value?.signer),
    );
  }

  getSignBytes() {
    return Buffer.from(codec.sortJSON(JSON.stringify(this)));
  }
}
