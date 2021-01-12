import { codec } from "../../../../codec";
import { AccAddress, Msg } from "../../../../cosmos/types";
import { Channel } from "./channel";

/**
 *
 */
export class MsgChannelOpenInit implements Msg {
  static "@type": "/ibc.core.channel.v1.MsgChannelOpenInit";
  "@type": "/ibc.core.channel.v1.MsgChannelOpenInit";

  constructor(
    public port_id?: string,
    public channel?: Channel,
    public signer?: AccAddress,
  ) {}

  /**
   *
   * @param value
   */
  static fromJSON(value: any) {
    return new MsgChannelOpenInit(
      value?.port_id,
      value?.channel,
      AccAddress.fromBech32(value?.signer),
    );
  }

  getSignBytes() {
    return Buffer.from(codec.sortJSON(JSON.stringify(this)));
  }
}
