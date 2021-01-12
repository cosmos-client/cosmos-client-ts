import { codec } from "../../../../codec";
import { AccAddress, Msg } from "../../../../cosmos/types";
import { Height } from "../../client/types";

/**
 *
 */
export class MsgChannelCloseConfirm implements Msg {
  static "@type": "/ibc.core.channel.v1.MsgChannelCloseConfirm";
  "@type": "/ibc.core.channel.v1.MsgChannelCloseConfirm";

  /**
   *
   * @param port_id
   * @param channel_id
   * @param proof_init
   * @param proof_height
   * @param signer
   */
  constructor(
    public port_id?: string,
    public channel_id?: string,
    public proof_init?: Buffer,
    public proof_height?: Height,
    public signer?: AccAddress,
  ) {}

  toJSON() {
    const value: any = { ...this };
    if (this.proof_init) {
      value.proof_init = this.proof_init.toString("hex");
    }

    return value;
  }

  /**
   *
   * @param value
   */
  static fromJSON(value: any) {
    return new MsgChannelCloseConfirm(
      value?.port_id,
      value?.channel_id,
      Buffer.from(value?.proof_init, "hex"),
      value?.proof_height,
      AccAddress.fromBech32(value?.signer),
    );
  }

  getSignBytes() {
    return Buffer.from(codec.sortJSON(JSON.stringify(this)));
  }
}
