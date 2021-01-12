import { Any } from "../../../../cosmos/types/any";
import { AccAddress, Msg } from "../../../../cosmos/types";
import { codec } from "../../../../codec";

/**
 *
 */
export class MsgSubmitMisbehavior implements Msg {
  static "@type": "/ibc.core.client.v1.MsgSubmitMisbehavior";
  "@type": "/ibc.core.client.v1.MsgSubmitMisbehavior";

  /**
   * 
   * @param client_id 
   * @param misbehavior 
   * @param signer 
   */
  constructor(
    public client_id?: string,
    public misbehavior?: Any,
    public signer?: AccAddress,
  ) {}

  /**
   *
   * @param value
   */
  static fromJSON(value: any) {
    return new MsgSubmitMisbehavior(
      value?.client_id,
      value?.misbehavior,
      AccAddress.fromBech32(value?.signer),
    );
  }

  getSignBytes() {
    return Buffer.from(codec.sortJSON(JSON.stringify(this)));
  }
}
