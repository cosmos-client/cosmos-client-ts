import { codec } from "../../../../codec";
import { AccAddress, Msg } from "../../../../cosmos/types";
import { Height } from "../../client/types";
import { Packet } from "./packet";

/**
 *
 */
export class MsgAcknowledgement implements Msg {
  static "@type": "/ibc.core.channel.v1.MsgAcknowledgement";
  "@type": "/ibc.core.channel.v1.MsgAcknowledgement";

  /**
   *
   * @param packet
   * @param acknowledgement
   * @param proof_acked
   * @param proof_height
   * @param signer
   */
  constructor(
    public packet?: Packet,
    public acknowledgement?: Buffer,
    public proof_acked?: Buffer,
    public proof_height?: Height,
    public signer?: AccAddress,
  ) {}

  /**
   *
   * @param value
   */
  static fromJSON(value: any) {
    return new MsgAcknowledgement(
      value?.packer,
      Buffer.from(value?.acknowledgement, "hex"),
      Buffer.from(value?.proof_acked, "hex"),
      value?.proof_height,
      AccAddress.fromBech32(value?.signer),
    );
  }

  getSignBytes() {
    return Buffer.from(codec.sortJSON(JSON.stringify(this)));
  }
}
