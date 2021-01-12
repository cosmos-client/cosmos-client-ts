import { codec } from "../../../../codec";
import { AccAddress, Msg } from "../../../../cosmos/types";
import { Height } from "../../client/types";

/**
 *
 */
export class MsgChannelOpenAck implements Msg {
  static "@type": "/ibc.core.channel.v1.MsgChannelOpenAck";
  "@type": "/ibc.core.channel.v1.MsgChannelOpenAck";

  /**
   *
   * @param port_id
   * @param channel_id
   * @param counterparty_channel_id
   * @param counterparty_version
   * @param proof_try
   * @param proof_height
   * @param signer
   */
  constructor(
    public port_id?: string,
    public channel_id?: string,
    public counterparty_channel_id?: string,
    public counterparty_version?: string,
    public proof_try?: Buffer,
    public proof_height?: Height,
    public signer?: AccAddress,
  ) {}

  toJSON() {
    const value: any = { ...this };
    if (this.proof_try) {
      value.proof_try = this.proof_try.toString("hex");
    }

    return value;
  }

  /**
   *
   * @param value
   */
  static fromJSON(value: any) {
    return new MsgChannelOpenAck(
      value?.port_id,
      value?.channel_id,
      value?.counterparty_channel_id,
      value?.counterparty_version,
      Buffer.from(value?.proof_try, "hex"),
      value?.proof_height,
      AccAddress.fromBech32(value?.signer),
    );
  }

  getSignBytes() {
    return Buffer.from(codec.sortJSON(JSON.stringify(this)));
  }
}
