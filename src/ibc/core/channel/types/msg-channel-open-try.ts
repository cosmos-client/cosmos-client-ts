import { codec } from "../../../../codec";
import { AccAddress, Msg } from "../../../../cosmos/types";
import { Height } from "../../client/types";
import { Channel } from "./channel";

/**
 *
 */
export class MsgChannelOpenTry implements Msg {
  static "@type": "/ibc.core.channel.v1.MsgChannelOpenTry";
  "@type": "/ibc.core.channel.v1.MsgChannelOpenTry";

  constructor(
    public port_id?: string,
    public previous_channel_id?: string,
    public channel?: Channel,
    public counterparty_version?: string,
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
    return new MsgChannelOpenTry(
      value?.port_id,
      value?.previous_channel_id,
      value?.channel,
      value?.counterparty_version,
      Buffer.from(value?.proof_init, "hex"),
      value?.proof_height,
      AccAddress.fromBech32(value?.signer),
    );
  }

  getSignBytes() {
    return Buffer.from(codec.sortJSON(JSON.stringify(this)));
  }
}
