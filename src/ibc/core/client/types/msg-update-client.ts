import { AnyI } from "../../../../codec/any";
import { AccAddress, Msg } from "../../../../cosmos/types";
import { codec } from "../../../../codec";

/**
 *
 */
export class MsgUpdateClient implements Msg {
  static "@type": "/ibc.core.client.v1.MsgUpdateClient";
  "@type": "/ibc.core.client.v1.MsgUpdateClient";

  /**
   *
   * @param client_id
   * @param header
   * @param signer
   */
  constructor(
    public client_id?: string,
    public header?: AnyI,
    public signer?: AccAddress,
  ) {}

  /**
   *
   * @param value
   */
  static fromJSON(value: any) {
    return new MsgUpdateClient(
      value?.client_id,
      value?.header,
      AccAddress.fromBech32(value?.signer),
    );
  }

  getSignBytes() {
    return Buffer.from(codec.sortJSON(JSON.stringify(this)));
  }
}
