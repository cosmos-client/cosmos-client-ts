import { codec } from "../../../../codec";
import { AccAddress, Msg } from "../../../../cosmos/types";
import { Height } from "../../client/types";

/**
 *
 */
export class MsgChannelOpenConfirm implements Msg {
  static "@type": "/ibc.core.channel.v1.MsgChannelOpenConfirm";
  "@type": "/ibc.core.channel.v1.MsgChannelOpenConfirm";

  /**
   *
   * @param port_id
   * @param channel_id
   * @param proof_ack
   * @param proof_height
   * @param signer
   */
  constructor(
    public port_id?: string,
    public channel_id?: string,
    public proof_ack?: Buffer,
    public proof_height?: Height,
    public signer?: AccAddress,
  ) {}

  toJSON() {
    const value: any = { ...this };
    if (this.proof_ack) {
      value.proof_ack = this.proof_ack.toString("hex");
    }

    return value;
  }

  /**
   *
   * @param value
   */
  static fromJSON(value: any) {
    return new MsgChannelOpenConfirm(
      value?.port_id,
      value?.channel_id,
      Buffer.from(value?.proof_ack, "hex"),
      value?.proof_height,
      AccAddress.fromBech32(value?.signer),
    );
  }

  getSignBytes() {
    return Buffer.from(codec.sortJSON(JSON.stringify(this)));
  }
}
