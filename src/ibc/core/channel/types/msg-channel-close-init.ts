import { codec } from "../../../../codec";
import { AccAddress, Msg } from "../../../../cosmos/types";

/**
 *
 */
export class MsgChannelCloseInit implements Msg {
  static "@type": "/ibc.core.channel.v1.MsgChannelCloseInit";
  "@type": "/ibc.core.channel.v1.MsgChannelCloseInit";

  constructor(
    public port_id?: string,
    public channel_id?: string,
    public signer?: AccAddress,
  ) {}

  /**
   *
   * @param value
   */
  static fromJSON(value: any) {
    return new MsgChannelCloseInit(
      value?.port_id,
      value?.channel_id,
      AccAddress.fromBech32(value?.signer),
    );
  }

  getSignBytes() {
    return Buffer.from(codec.sortJSON(JSON.stringify(this)));
  }
}
